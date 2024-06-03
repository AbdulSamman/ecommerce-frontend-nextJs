"use client";

import React from "react";
import Image from "next/image";

const ProductBanner = ({ product }: any) => {
  return (
    <div className="productBanner ">
      {product.data ? (
        <Image
          src={product.data.attributes.banner.data.attributes.url}
          width={450}
          height={300}
          alt="productDetailsBanner"
          priority={true}
          className="productImageBanner rounded-lg"
        />
      ) : (
        <div className="h-[300px] w-[500px] bg-slate-200 animate-pulse rounded-lg "></div>
      )}
    </div>
  );
};

export default ProductBanner;
