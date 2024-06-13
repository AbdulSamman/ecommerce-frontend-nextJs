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

  const amountString: any = searchParams.get("amount");

  const amountDecimal = parseFloat(amountString);

  const amountInCents = amountString * 100;
  const options: any = {
    mode: "payment",
    currency: "eur",
    //clientSecret: process.env.STRIPE_SECRET_KEY,
    amount: amountInCents,
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm amount={amountString} />
    </Elements>
  );
};

export default checkout;
