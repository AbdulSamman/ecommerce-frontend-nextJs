"use client";

import { createContext, useState, useEffect } from "react";
import { IAppContext, IAppProvider, IProduct } from "./interfaces";
import axiosClient from "./_utils/axiosClient";
import CartApi from "./_utils/CartApi";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [productDetails, setProductDetails] = useState<any>({});
  const [productListCategory, setProductListCategory] = useState<any>([]);
  //add To Cart
  const [cart, setCart] = useState<any>([]);

  const { user } = useUser();
  const router = useRouter();

  //await axiosClient.get("/products") without images in cloudinary "WITHOUT BANNERS"
  //localhost:1337/api/products?populate=* with images "Media" "WITH BANNERS"

  //get products
  useEffect(() => {
    (async () => {
      const rawProducts = (await axiosClient.get("/products?populate=*")).data;

      setProducts(rawProducts.data);
    })();
  }, []);

  // get one product with id

  const getOneProduct = async (id: string) => {
    try {
      const response = (await axiosClient.get(`/products/${id}?populate=*`))
        .data;

      setProductDetails(response);

      getProductListByCategory(response.data.attributes.category);
    } catch (error) {
      console.error("Failed to fetch product details:", error);
    }
  };

  // filter category
  const getProductListByCategory = async (category: string) => {
    try {
      const response = (
        await axiosClient.get(
          `/products?filters[category][$eq]=${category}&populate=*`
        )
      ).data;

      setProductListCategory(response.data);
    } catch (error) {
      console.error("Failed to fetch product category:", error);
    }
  };

  //add to cart
  const handleAddToCart = (product: any) => {
    if (!user) {
      router.push("/sign-in");
    } else {
      // logic add to cart
      //data from clerk
      const data = {
        data: {
          userName: user.fullName,
          email: user.primaryEmailAddress?.emailAddress,
          products: [product.data?.id],
        },
      };

      CartApi.addToCart(data)
        .then((res) => {
          console.log("cart created", res?.data?.data?.id);
          setCart((rawCart: any) => [
            ...rawCart,
            {
              id: res?.data?.data?.id,
              product,
            },
          ]);
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  };

  return (
    <AppContext.Provider
      value={{
        products,
        getOneProduct,
        productDetails,
        getProductListByCategory,
        productListCategory,
        cart,
        handleAddToCart,
      }}>
      {children}
    </AppContext.Provider>
  );
};
