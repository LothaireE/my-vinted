import { Navigate, useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";
import CheckoutForm from "../components/CheckoutForm";
import { useState } from "react";

const stripePromise = loadStripe("pk_test_5z9rSB8XwuAOihoBixCMfL6X");

const Payment = ({ token }) => {
  const location = useLocation();
  const { title, price } = location.state;
  const feePrice = price + 1.2;

  return token ? (
    <div className="background-payment">
      <div className="element-block">
        <Elements stripe={stripePromise}>
          <div className="fees-block">
            <h4>Resumé de la commande</h4>
            <div className="fee-details">
              <p>Commande:</p>
              <p>{price} €</p>
            </div>
            <div className="fee-details">
              <p>Frais de protection acheteurs</p>
              <p>0.40 €</p>
            </div>
            <div className="fee-details">
              <p>Frais de port</p>
              <p>0.80 €</p>
            </div>
          </div>
          <div className="total-block">
            <div className="total-price">
              <span>Total</span>
              <span>{feePrice} €</span>
            </div>
            <div className="total-text">
              <p>
                Il ne vous reste plus qu'une étape pour vous offrir{" "}
                <span>{title}</span>. Vous allez payer <span>{feePrice}</span>€
                (frais de protection et frais de port inclus).
              </p>
            </div>
            <div className="checkout-div">
              <CheckoutForm title={title} price={feePrice} />
            </div>
          </div>
        </Elements>
      </div>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};
export default Payment;
