"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
const paymentConfirmed = () => {
  return (
    <div className="flex flex-col items-center justify-center px-5 mt-4">
      <Image src="/verify.gif" alt="check" width={130} height={130} />
      <h2 className="teyt-[24px]">Payment Successful</h2>
      <h2 className="teyt-[17px] text-center mt-6 text-gray-500">
        We sent an email with your order confirmation along with Digital Content
      </h2>
      <Link href="/" className="p-2 mt-6 text-white rounded-md bg-primary">
        Go to Home
      </Link>
    </div>
  );
};

export default paymentConfirmed;
