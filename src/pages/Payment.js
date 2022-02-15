import { Navigate, useNavigate } from "react-router-dom";

const Payment = ({ token }) => {
  return token ? (
    <div>
      <h1>Payment</h1>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};
export default Payment;
