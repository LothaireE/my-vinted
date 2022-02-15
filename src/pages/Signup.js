import axios from "axios";
import { useState } from "react/cjs/react.development";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Signup = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsLetter, setNewsLetter] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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
        setUser(response.data.token);
        Cookies.set("userId", response.data._id, { expires: 10 });
        navigate("/");
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setErrorMessage("Cet email est deja utilisé");
      }
    }
  };

  return (
    <div>
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
          <span>
            <input
              className="form-checkbox"
              type="checkbox"
              onChange={(event) => setNewsLetter(event.target.checked)}
            />
          </span>

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
