import axios from "axios";
import { useState } from "react/cjs/react.development";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // const [data, setData] = useState();

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );
      if (response.data.token) {
        console.log(response.data.token);
        console.log(navigate);
        setUser(response.data.token);

        navigate("/");
      }
    } catch (error) {
      if (
        error.response &&
        (error.response.status === 400 || error.response.status === 401)
      ) {
        setErrorMessage("wrong mail adress and/or password");
      }
    }
  };

  return (
    <div>
      <div className="formular-div">
        <form className="formular" onSubmit={handleSubmit}>
          <h2 className="formular-h">Se connecter</h2>

          <input
            className="form-inputs"
            value={email}
            type="email"
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            className="form-inputs"
            value={password}
            type="password"
            placeholder="Mot de passe"
            onChange={(event) => setPassword(event.target.value)}
          />
          <input
            // className="form-inputs"
            className="submit-btn"
            value={"Se connecter"}
            type="submit"
          />
          <span>{errorMessage}</span>
        </form>
      </div>
    </div>
  );
};

export default Login;
