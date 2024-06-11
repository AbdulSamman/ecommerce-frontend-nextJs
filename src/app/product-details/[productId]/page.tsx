"use client";

import { useContext, useEffect } from "react";
import { AppContext } from "../../../AppContext";
import BreadCrumb from "@/src/_components/BreadCrumb";
import ProductBanner from "./_components/ProductBanner";
import ProductInfo from "./_components/ProductInfo";
import ProductList from "@/src/_components/ProductList";
import { usePathname } from "next/navigation";

const ProductDetails = ({ params }: any) => {
  //breadCrum nav
  const path: string = usePathname();

  const { productDetails, getOneProduct, productListCategory, products }: any =
    useContext(AppContext);

  useEffect(() => {
    getOneProduct(params?.productId);
  }, [params?.productId]);

  //ausgewählte product nicht simiral product auftauchen

  const filteredProducts = productListCategory.filter(
    (product: any) => product.id !== productDetails.data.id
  );

  return (
    <div className="px-10 py-8 md:px-18 ">
      <BreadCrumb path={path} />
      <div className="grid grid-cols-1 sm:grid-cols-2 items-start mt-10 gap-y-[30px]">
        <ProductBanner product={productDetails} />
        <ProductInfo product={productDetails} />
      </div>
      <div className=" mt-10">
        <h2 className="text-xl py-5">Similar Products</h2>

        {filteredProducts.length > 0 ? (
          <>
            <ProductList products={filteredProducts} />
            <div>
              <h2 className="text-xl py-5">Porducts could be interessted!</h2>
              <ProductList products={products} />
            </div>
          </>
        ) : (
          <>
            {products.length > 0 ? (
              <>
                <h3 className="mb-4">No Products Related To This Item!</h3>
                <ProductList products={products} />
              </>
            ) : (
              <>
                <div className="mb-4 h-[30px] w-[200px]  bg-slate-200 animate-pulse rounded-lg"></div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
