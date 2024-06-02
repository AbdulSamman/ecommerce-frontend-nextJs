"use client";

import { createContext, useState, useEffect } from "react";
import { IAppContext, IAppProvider, IProduct } from "./interfaces";
import axiosClient from "./app/_utils/axiosClient";

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    (async () => {
      const rawProducts = (await axiosClient.get("/products")).data;
      console.log(rawProducts.data);
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
