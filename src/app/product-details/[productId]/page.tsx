"use client";

import { useContext, useEffect } from "react";
import { AppContext } from "../../../AppContext";

import BreadCrumb from "@/src/_components/BreadCrumb";
import ProductBanner from "./_components/ProductBanner";
import ProductInfo from "./_components/ProductInfo";

import ProductList from "@/src/_components/ProductList";

const ProductDetails = ({ params }: any) => {
  const { productDetails, getOneProduct, productListCategory }: any =
    useContext(AppContext);

  useEffect(() => {
    getOneProduct(params?.productId);
  }, [params?.productId]);

  //ausgewählte product nicht simiral product auftauchen

  const filteredProducts = productListCategory.filter(
    (product: any) => product.id !== productDetails.data.id
  );

  return (
    <div className="px-10 py-8 md:px-28 ">
      <BreadCrumb />
      <div className="grid grid-cols-1 sm:grid-cols-2 items-start mt-10 gap-y-[30px] ">
        <ProductBanner product={productDetails} />
        <ProductInfo product={productDetails} />
      </div>
      <div className=" mt-10">
        <h2 className="text-xl py-5">Similar Products</h2>

        {productListCategory.length > 0 && filteredProducts && (
          <ProductList products={filteredProducts} />
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
