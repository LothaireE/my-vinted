import { Navigate, useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe("pk_test_5z9rSB8XwuAOihoBixCMfL6X");

const Payment = ({ token }) => {
  const location = useLocation();
  const { title, price } = location.state;
  console.log(title);
  return token ? (
    <div>
      <h1>Payment</h1>
      <span>{title}</span>

      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};
export default Payment;
