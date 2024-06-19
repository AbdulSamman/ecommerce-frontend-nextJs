import { AmountProps } from "@/src/interfaces";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useState } from "react";

import { useUser } from "@clerk/nextjs";
import { useContext } from "react";
import { AppContext } from "../../../AppContext";
import OrderApis from "@/src/_utils/OrderApis";
import CartApi from "@/src/_utils/CartApi";

const CheckoutForm = ({ amount }: AmountProps) => {
  //Orders
  const { cart } = useContext(AppContext);
  const { user } = useUser();

  //
  const stripe = useStripe();
  const elements = useElements();
  // HERE STATE VARIABLES
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (event: any) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    //HERE FETCH api/create-intent

    const handleError = (error: any) => {
      setLoading(false);
      setErrorMessage(error.message);
    };

    // should call here
    //setLoading(true);
    //await orders();
    //sendgrid
    await sendEmail();
    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit();
    if (submitError) {
      handleError(submitError);
      return;
    }

    // const res: any = await axios.post(`api/create-intent`, {
    //   amount: 10,
    // });
    // // here auch
    // const clientSecret = await res.data.clientSecret;
    //oder fetch
    const res: any = await fetch(`api/create-intent`, {
      method: "POST",
      body: JSON.stringify({
        amount: amount,
      }),
    });

    const clientSecret = await res.json();

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      clientSecret,
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/payment-confirmed",
      },
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };
  const orders = () => {
    const productIds: any[] = [];
    cart.forEach((item: any) => {
      console.log("type", item);

      productIds.push(item?.cart?.product?.id);
    });
    const data = {
      data: {
        email: user?.primaryEmailAddress?.emailAddress,
        username: user?.fullName,
        amount,
        products: productIds,
      },
    };
    OrderApis.createOrder(data).then((res) => {
      //delete all cart items after pay

      if (res) {
        cart.forEach((item: any) => {
          CartApi.deleteCartItem(item?.cart?.id).then((result) => {});
        });
      }
    });
  };

  //sendgrid

  const sendEmail = async () => {
    try {
      const response = await fetch("http://localhost:1337/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: "boudiii89@gmail.com",
          subject: "Test Email",
          text: "This is a test email sent from frontend to backend via Strapi and SendGrid.",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      const data = await response.json();
      console.log("Email sent:", data);
      alert("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email");
    }
  };

  return (
    <form className="mt-20" onSubmit={handleSubmit}>
      <div className="mx-10 xl:mx-[320px]">
        <PaymentElement />
        <button className="bg-primary p-2 text-white rounded-md w-full mt-4">
          Submit
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
