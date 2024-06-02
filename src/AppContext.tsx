"use client";

import { createContext, useState, useEffect } from "react";
import { IAppContext, IAppProvider, IProduct } from "./interfaces";
import axiosClient from "./app/_utils/axiosClient";

export const AppContext = createContext<IAppContext | undefined>(
  {} as IAppContext
);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  //await axiosClient.get("/products") without images in cloudinary "WITHOUT BANNERS"
  //localhost:1337/api/products?populate=* with images "Media" "WITH BANNERS"

  //get products
  useEffect(() => {
    (async () => {
      const rawProducts = (await axiosClient.get("/products?populate=*")).data;

      setProducts(rawProducts.data);
    })();
  }, []);

  return (
    <AppContext.Provider
      value={{
        products,
      }}>
      {children}
    </AppContext.Provider>
  );
};
