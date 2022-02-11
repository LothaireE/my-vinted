import axios from "axios";
import { useState } from "react/cjs/react.development";
import { useNavigate } from "react-router-dom";
// import Cookies from "js-cookie";
// import { Link } from "react-router-dom";

const Signup = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsLetter, setNewsLetter] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // const [data, setData] = useState();
  // const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    //inserrer un try catch qui englobe axios
    try {
      event.preventDefault();

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          username: username,
          email: email,
          password: password,
          newsLetter: newsLetter,
        }
      );
      if (response.data.token) {
        setUsername(response.data.token);
        navigate("/");
      }
    } catch (error) {
      if (error.response.status === 409) {
        setErrorMessage("Cet email est deja utilisé");
      }
    }

    // setData(response.data);

    // console.log(response.data.token);
    // const token = response.data.token;
    // Cookies.set("token", token);
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <div className="formular-div">
        <form className="formular" onSubmit={handleSubmit}>
          <h2 className="formular-h">S'inscrire</h2>
          <input
            className="form-inputs"
            value={username}
            type="text"
            placeholder="Nom d'utilisateur"
            onChange={(event) => setUsername(event.target.value)}
          />
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
            className="form-checkbox"
            type="checkbox"
            onChange={(event) => setNewsLetter(event.target.checked)}
          />
          <input
            className="submit-btn"
            value={"S'inscrire"}
            type="submit"
            // onClick={handleSubmit}
          />
          <span>{errorMessage}</span>
        </form>
      </div>
    </div>
  );
};
export default Signup;
