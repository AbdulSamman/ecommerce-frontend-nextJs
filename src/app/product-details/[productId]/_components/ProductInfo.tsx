import { TiShoppingCart } from "react-icons/ti";
import { LuBadgeCheck } from "react-icons/lu";
import { LuAlertOctagon } from "react-icons/lu";
import SekeletonEffect from "./SkeletonEffect";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const ProductInfo = ({ product }: any) => {
  const { user } = useUser();
  const router = useRouter();

  const handleAddToCart = () => {
    if (!user) {
      router.push("/sign-in");
    } else {
    }
  };
  return (
    <div className="h-[300px]">
      {product.data ? (
        <div className="px-4 ">
          <h2 className="text-[20px]">{product.data.attributes.title}</h2>
          <h2 className="text-[15px] text-gray-500">
            {product.data.attributes.category}
          </h2>
          <p className="text-[15px] mt-5">
            {product.data.attributes.description[0].children[0].text}
          </p>
          <h2 className="text-[10px] text-gray-500 flex items-center gap-x-3">
            {product.data.attributes.instantDelivery ? (
              <>
                <LuBadgeCheck className="text-green-500 text-[25px]" />
                <span> Eligible For Instant Delivery</span>
              </>
            ) : (
              <>
                <LuAlertOctagon className="text-red-500 text-[25px]" />
                <span>Not Eligible For Instant Delivery</span>
              </>
            )}
          </h2>
          <h2 className="text-[32px] text-primary mt-3">
            {product.data.attributes.price}€
          </h2>
          <button
            className="flex justify-between items-center gap-3 bg-primary hover:bg-teal-400 rounded-lg p-3 text-white"
            onClick={() => handleAddToCart()}>
            <TiShoppingCart className="text-2xl" />
            <span>Add To Cart</span>
          </button>
        </div>
      ) : (
        <SekeletonEffect />
      )}
    </div>
  );
};

export default ProductInfo;
