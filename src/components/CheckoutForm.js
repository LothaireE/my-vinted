import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";
import { Navigate, useNavigate } from "react-router-dom";

const CheckoutForm = ({ title, price }) => {
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  const [completed, setCompleted] = useState(false);

  const userId = Cookies.get("userId");
  console.log("userId=====>", userId);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const cardElements = elements.getElement(CardElement);
      //
      const stripeResponse = await stripe.createToken(cardElements, {
        name: userId,
      });
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/payment",
        {
          token: stripeResponse.token.id,
          title: title,
          amount: price,
        }
      );
      if (response.data.status === "succeeded") {
        setCompleted(true);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="checkout-div">
      {!completed ? (
        <form className="checkout-form" onSubmit={handleSubmit}>
          <CardElement className="credit-card" />
          <input className="checkout-inp" type="submit" value={"Pay"} />
        </form>
      ) : (
        <span>Paiement effectué ! Ton achat arrive bientot 🎁</span>
      )}
    </div>
  );
};
export default CheckoutForm;
