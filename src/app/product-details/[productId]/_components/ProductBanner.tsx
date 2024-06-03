"use client";

import React from "react";
import Image from "next/image";

const ProductBanner = ({ product }: any) => {
  return (
    <div className="productBanner">
      {product.data && (
        <Image
          src={product.data.attributes.banner.data.attributes.url}
          width={300}
          height={300}
          alt="productDetailsBanner"
          priority={true}
          className="productImageBanner rounded-lg"
        />
      )}
    </div>
  );
};

export default ProductBanner;
