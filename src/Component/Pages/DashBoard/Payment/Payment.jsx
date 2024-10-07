import React from "react";
import SectionTitle from "../../../ComponentShered/SectionTitile/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import { Helmet } from "react-helmet-async";

const Payment = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEYS);
  return (
    <div>
      <Helmet>
        {" "}
        <title>Yiasemi Lounge \ Payment </title>
      </Helmet>
      <SectionTitle heading="Payment" subHeading="Please Pay First" />
      <div>
        <Elements stripe={stripePromise}>
          <CheckOutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
