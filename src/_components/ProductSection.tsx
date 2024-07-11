"use client";

import ProductList from "./ProductList";

//Tipp for externe url for images from cloudinary should add link in ext.config
const ProductSection = () => {
  return (
    <div className="px-2 py-20 lg:px-20 ">
      <h1 className="px-2 mb-4">Brand Neu</h1>
      <ProductList />
    </div>
  );
};

export default ProductSection;
