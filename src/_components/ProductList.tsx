"use client";
import Image from "next/image";
import { FaList } from "react-icons/fa";
import { IProduct } from "../interfaces";
import Link from "next/link";

const ProductList = ({ products }: any) => {
  //moved to productSection, um die funktion mehrmals benutzen, für get Products and filter similar products
  //const { products }: any = useContext(AppContext);

  return (
    <div className=" products gap-1 grid bg-blue grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
      {products.map((product: IProduct) => {
        return (
          <Link
            key={product?.id}
            href={`/product-details/${product?.id}`}
            className="product p-1 border-teal-400 hover:border hover:cursor-pointer rounded-lg">
            <div className="images flex justify-center rounded-t-lg ">
              <Image
                src={product?.attributes?.banner?.data?.attributes?.url}
                alt="bannerCard"
                width={500}
                height={500}
                className="imagesProducts rounded-t-lg lg:h-[200px] h-[150px]"
                priority={true}
              />
            </div>
            <div className="py-2 text-start px-1 bg-gray-100 rounded-b-lg ">
              <h2 className="text-[12px] line-clamp-1">
                {product?.attributes?.title}
              </h2>

              <div className="flex justify-between items-center ">
                <div className="py-1 flex items-center gap-x-2 text-gray-500">
                  <FaList />
                  <span className="text-[10px]">
                    {product?.attributes?.category}
                  </span>
                </div>
                <span className="text-[15px]">
                  {product?.attributes?.price} €
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductList;
