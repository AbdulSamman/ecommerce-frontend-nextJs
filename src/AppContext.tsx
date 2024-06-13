"use client";

import { createContext, useState, useEffect } from "react";
import { IAppContext, IAppProvider, IProduct } from "./interfaces";
import axiosClient from "./_utils/axiosClient";
import CartApi from "./_utils/CartApi";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import OrderApis from "./_utils/OrderApis";

export const AppContext = createContext<IAppContext>({} as IAppContext);
export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [productDetails, setProductDetails] = useState<any>({});
  const [productListCategory, setProductListCategory] = useState<any>([]);
  //add To Cart
  const [cart, setCart] = useState<any>([]);
  const [isAdded, setIsAdded] = useState<boolean>(false);
  //
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

  const handleAddToCart = async (product: any) => {
    if (!user) {
      router.push("/sign-in");
    } else {
      try {
        // logic add to cart
        //data from clerk
        const data = {
          data: {
            username: user?.fullName,
            email: user?.primaryEmailAddress?.emailAddress,
            products: [product?.data?.id],
          },
        };

        //const res = (await axiosClient.post("/carts", data)).data;

        const res = (await CartApi.addToCart(data)).data;

        setCart([
          ...cart,
          {
            id: res?.data?.id,
            product,
          },
        ]);
        setIsAdded(true);
      } catch (error) {
        console.error("Error adding to cart", error);
      }
    }
  };

  // [user] => wenn user sich ändert, soll cart auch geändert werden
  useEffect(() => {
    if (user) {
      getCartItems();
    }
  }, [user]);

  const getCartItems = () => {
    (async () => {
      const _cartItems: any = [];
      const rawCart = (
        await CartApi.getUserCartItems(user?.primaryEmailAddress?.emailAddress)
      ).data;

      rawCart.data.forEach((cartItem: any) => {
        const _cartItem: any = {
          ...cartItem,
          cart: {
            id: cartItem?.id,
            product: cartItem?.attributes?.products?.data[0],
          },
        };
        _cartItems.push(_cartItem);
      });
      setCart(_cartItems);
    })();
  };

  // delete cart Item
  const handleDeleteCartItem = async (id: any) => {
    const res = (await CartApi.deleteCartItem(id)).data;

    const filterDeletedCartItem = cart.filter(
      (m: any) => m.id !== res?.data?.id
    );
    setCart(filterDeletedCartItem);
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
        handleDeleteCartItem,
        isAdded,
        getCartItems,
      }}>
      {children}
    </AppContext.Provider>
  );
};
