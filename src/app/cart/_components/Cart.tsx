import { CartProps } from "../../../interfaces";
import { IoClose } from "react-icons/io5";
import { FaRegTrashCan } from "react-icons/fa6";
import { useContext, useEffect } from "react";
import { AppContext } from "../../../AppContext";
import Image from "next/image";
import Link from "next/link";

const Cart = ({ setIsCartOpen }: CartProps) => {
  const { cart, handleDeleteCartItem, getCartItems, isAdded } =
    useContext(AppContext);

  useEffect(() => {
    if (isAdded) {
      return getCartItems();
    }
  }, [cart]);

  return (
    <div className=" w-[300px] h-[300px] border bg-gray-100 shadow-sm absolute rounded-md right-3 top-14 px-2 overflow-auto z-10">
      <button
        className="absolute end-1.5 top-2 text-gray-600 transition hover:scale-110 hover:text-blue-500"
        onClick={() => setIsCartOpen(false)}>
        <IoClose className="text-xl" />
      </button>

      <div className="mt-10 space-y-6">
        {cart.length > 0 ? (
          <ul className="space-y-4">
            {cart.map((cartItem: any) => {
              return (
                <div key={cartItem?.id}>
                  <li className="flex items-center gap-4 ">
                    {cartItem?.cart?.product?.attributes?.banner?.data
                      ?.attributes?.url && (
                      <Image
                        src={
                          cartItem.cart?.product.attributes.banner.data
                            .attributes.url
                        }
                        alt="cartImage"
                        width={65}
                        height={70}
                        className="cartImage object-cover rounded w-30 h-15"
                        priority={true}
                      />
                    )}
                    <div>
                      <h3 className="text-sm text-gray-900 line-clamp-1">
                        {cartItem?.cart?.product?.attributes?.title}
                      </h3>

                      <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                        <div>
                          Category:
                          {cartItem?.cart?.product?.attributes?.category}
                        </div>

                        <div>
                          Price: {cartItem?.cart?.product?.attributes?.price} €
                        </div>
                      </dl>
                    </div>

                    <div className="flex flex-1 items-center justify-end gap-2">
                      <button
                        className="text-gray-600 transition hover:text-red-600 "
                        onClick={() => handleDeleteCartItem(cartItem.cart?.id)}>
                        <FaRegTrashCan />
                      </button>
                    </div>
                  </li>
                </div>
              );
            })}
          </ul>
        ) : (
          <h2 className="text-center">Your Cart is Empty!</h2>
        )}

        <div
          className="space-y-2 text-center"
          onClick={() => setIsCartOpen(false)}>
          <Link
            href="/cart"
            className="block rounded border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400">
            View my cart ({cart.length})
          </Link>

          <Link
            href="/"
            className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600">
            Continue shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
