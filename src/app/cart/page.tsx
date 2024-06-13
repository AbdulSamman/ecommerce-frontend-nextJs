"use client";
import React, { useEffect, useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import Image from "next/image";
import { useContext } from "react";
import { AppContext } from "../../AppContext";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const { cart, handleDeleteCartItem } = useContext(AppContext);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const discount: number = 10;
  const shipping: number = 3.99;

  // amount => getTotalAmount in route anzeigt und abschicken
  //sehe router.push
  const router = useRouter();

  useEffect(() => {
    getTotalPrice();
  }, [cart]);

  const getTotalPrice = () => {
    const prices: number[] = [];
    cart.forEach((item: any) => {
      prices.push(parseFloat(item?.cart?.product?.attributes?.price) * 1);
    });
    setTotalPrice(
      prices.reduce((total: number, price: number) => total + price, 0)
    );
  };

  const getTotalAmount = () => {
    const totalAmount = (
      totalPrice -
      (totalPrice * discount) / 100 +
      shipping
    ).toFixed(2);
    return totalAmount;
  };

  return (
    <section>
      <div className="mx-auto max-w-screen-xl py-6 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl p-2">
          <header className="text-center">
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Your Cart
            </h1>
          </header>

          <div className="mt-8  ">
            <ul className="space-y-4 ">
              {cart?.map((cartItem: any) => {
                return (
                  <li className="flex items-center gap-4 p-2" key={cartItem.id}>
                    {cartItem?.cart?.product?.attributes?.banner?.data
                      ?.attributes?.url && (
                      <Image
                        src={
                          cartItem?.cart?.product?.attributes?.banner?.data
                            ?.attributes?.url
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

                      <div className="mt-0.5 space-y-px text-[10px] text-gray-600">
                        <div>
                          Category:{" "}
                          {cartItem?.cart?.product?.attributes?.category}
                        </div>
                        <input
                          type="text"
                          disabled
                          className="h-7 w-9 bg-gray-100 text-center rounded-md"
                          placeholder="1x"
                        />
                      </div>
                    </div>

                    <div className="flex flex-1 items-center justify-end gap-2 px-1">
                      <div className="bg-gray-100 p-2 rounded-md text-gray-500 w-20">
                        {cartItem?.cart?.product?.attributes?.price} €
                      </div>

                      <button
                        className=" transition hover:text-red-500 hover:scale-110 text-[20px]"
                        onClick={() => handleDeleteCartItem(cartItem.id)}>
                        <FaRegTrashCan />
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 flex justify-end border-t border-gray-400 pt-8 ">
              <div className="w-screen max-w-full space-y-4  px-4 p-2">
                <dl className="space-y-0.5 text-sm text-gray-700">
                  <div className="flex justify-between px-2">
                    <dt>SUBTOTAL:</dt>
                    <dd>{totalPrice.toFixed(2)} €</dd>
                  </div>

                  <div className="flex justify-between px-2">
                    <dt>SHIPPING:</dt>
                    <dd>{shipping} €</dd>
                  </div>

                  <div className="flex justify-between px-2">
                    <dt>DISCOUNT:</dt>
                    <dd>- {discount} %</dd>
                  </div>

                  <div className="flex justify-between font-bold bg-gray-200 py-2 px-2 rounded-md">
                    <dt>TOTAL:</dt>
                    <dd>
                      {getTotalAmount()}
                      <span> €</span>
                    </dd>
                  </div>
                </dl>

                <div className="flex justify-end">
                  <span className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700">
                    <p className="whitespace-nowrap text-xs">
                      2 Discounts Applied
                    </p>
                  </span>
                </div>

                <div className="flex justify-end">
                  <button
                    className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                    onClick={() =>
                      router.push(`/checkout?amount=${getTotalAmount()}`)
                    }>
                    Checkout
                  </button>
                </div>
              </div>
            </div>
            <h2 className="text-red-300 text-[12px] bg-gray-200 p-2 rounded-md">
              Note: All Items will be sent via Email
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
