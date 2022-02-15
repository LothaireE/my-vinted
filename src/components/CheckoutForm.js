import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";

// très forte proba de transmettre qqch dans ces parenthese, genre un token ou un id
const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [completed, setCompleted] = useState(false);

  //   userId = userId.name? / userId tout court ??
  //   const userId =

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const cardElements = elements.getElement(CardElement);
      const stripeResponse = await stripe.createToken(cardElements, {});
    } catch (error) {}
  };

  return (
    <div>
      <h1>Formulaire de paiement</h1>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <input type="submit" />
      </form>
    </div>
  );
};
export default CheckoutForm;
