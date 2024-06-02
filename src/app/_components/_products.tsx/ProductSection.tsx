"use client";
import React from "react";
import ProductList from "../ProductList";
import { useContext } from "react";
import { AppContext } from "../../../AppContext";
import Image from "next/image";
import { FaList } from "react-icons/fa";

//Tipp for externe url for images from cloudinary should add link in ext.config
const ProductSection = () => {
  const { products } = useContext(AppContext);

  return (
    <div className="  py-20 lg:px-20">
      <h1 className="my-4 text-xl">Our Latest Products</h1>
      <div className=" products gap-1 grid bg-blue grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="product p-1 border-teal-400  hover:border hover:cursor-pointer rounded-lg">
              <div className="images flex justify-center rounded-t-lg ">
                <Image
                  src={product.attributes.banner.data.attributes.url}
                  alt="bannerCard"
                  width={350}
                  height={210}
                  className="imagesProducts  rounded-t-lg"
                  priority={true}
                />
              </div>
              <div className="py-2  text-start px-1 bg-gray-100 rounded-b-lg ">
                <h2 className="text-[12px] line-clamp-1">
                  {product.attributes.title}
                </h2>

                <div className="flex justify-between items-center">
                  <div className="row py-1 flex items-center gap-x-2 text-gray-500">
                    <FaList />
                    <h2 className="text-[10px]">
                      {product.attributes.category}
                    </h2>
                  </div>
                  <span className="text-[15px]">
                    {product.attributes.price} €
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductSection;
