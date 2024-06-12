"use client";
// stripe docs
import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./_components/CheckoutForm";
import { useSearchParams } from "next/navigation";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string
);

const checkout = () => {
  // call the amout from router
  const searchParams = useSearchParams();
  const options: any = {
    mode: "payment",
    currency: "eur",
    //clientSecret: process.env.STRIPE_SECRET_KEY,
    amount: Math.round(Number(searchParams.get("amount")) * 100),
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm
        amount={Math.round(Number(searchParams.get("amount")) * 100)}
      />
    </Elements>
  );
};

export default checkout;
