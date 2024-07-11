"use client";

import ProductList from "./ProductList";
import { useContext } from "react";
import { AppContext } from "../AppContext";
//Tipp for externe url for images from cloudinary should add link in ext.config
const ProductSection = () => {
  const { products }: any = useContext(AppContext);
  return (
    <div className="px-2 py-20 lg:px-20 ">
      <h1 className="px-2 mb-4">Brand Neu</h1>
      <ProductList products={products} />
    </div>
  );
};

export default ProductSection;
