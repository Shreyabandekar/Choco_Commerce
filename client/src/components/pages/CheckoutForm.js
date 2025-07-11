import React from "react";
import axios from "axios";

import StripeCheckout from "react-stripe-checkout";

import PAYMENT_SERVER_URL from "../../utils/server";

const CURRENCY = "USD";

const fromDollarToCent = (amount) => parseInt(amount * 100);

const CheckoutForm = ({ name, description, amount, onSuccess, onFailure }) => {
  const successPayment = (data) => {
    console.log("successPayment",data);
    onSuccess(data);
  };

  const errorPayment = (data) => {
    console.error(data);
    onFailure(data);
  };

  const onToken = (amount, description) => (token) =>
    axios
  .post(PAYMENT_SERVER_URL, {
    description,
    source: token.id,
    currency: CURRENCY,
    amount: 100,
  })
  .then((response) => {
    console.log("Payment Successful:", response);
    successPayment(response);
  })
  .catch((error) => {
    console.error("Payment Failed:", error);
    errorPayment(error);
  });

  
    // axios
    //   .post(PAYMENT_SERVER_URL, {
    //     description,
    //     source: token.id,
    //     currency: CURRENCY,
    //     amount: 100,
    //   })
    //   .then(successPayment)
    //   .catch(errorPayment);
  return (
    <StripeCheckout
      name={name}
      description={description}
      amount={fromDollarToCent(amount)}
      token={onToken(amount, description)}
      currency={CURRENCY}
      stripeKey={
        "pk_test_51KbALaFc4X4KsU22jdX47Ta9QxT1GUQGJhzzsypQbExkjRSUDyf8c9F4CaEMj741evosIEXTzEr3lAO2Ib425vsb00DACZuj78"
      }
      zipCode
      email
      allowRememberMe
      shippingAddress
    >
      <button className="btn btn-warning btn-block btn-lg ml-2">
        Proceed to Checkout
      </button>
    </StripeCheckout>
  );
};

export default CheckoutForm;
