import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = "pk_test_51KsxPfEDJs1UCEIIMbLIJmNULUkLQbcjEdwIzbvj19HHtr6zEtU5WISWQo9DMB6ws8lNf1VquosSSlkpvtzHAJ1j00didwPp1m";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  return (
    <Elements 
      stripe={stripeTestPromise}
      className="bg-white font-bold text-white my-2 p-2"
      >
      <CheckoutForm />
    </Elements>
  );
};

export default Stripe;