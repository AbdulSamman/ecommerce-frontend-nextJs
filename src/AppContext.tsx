"use client";

import { createContext, useState, useEffect } from "react";
import { IAppContext, IAppProvider, IProduct } from "./interfaces";
import axiosClient from "./_utils/axiosClient";

export const AppContext = createContext<IAppContext | undefined>(
  {} as IAppContext
);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [productDetails, setProductDetails] = useState<any>({});
  const [productListCategory, setProductListCategory] = useState([]);
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
      console.log("data", response);

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

  return (
    <AppContext.Provider
      value={{
        products,
        getOneProduct,
        productDetails,
        getProductListByCategory,
        productListCategory,
      }}>
      {children}
    </AppContext.Provider>
  );
};
