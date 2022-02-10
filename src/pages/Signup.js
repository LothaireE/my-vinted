import axios from "axios";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();

    const response = await axios.post(
      "https://lereacteur-vinted-api.herokuapp.com/user/signup"
    );
    setData(response.data);
  };
  //   fetchData();
  return (
    <div>
      <h1>Sign Up</h1>
      <div className="formular-div">
        <form className="formular" onSubmit={handleSubmit}>
          <h2 className="formular-h">S'inscrire</h2>
          <input
            value={username}
            type="text"
            placeholder="Nom d'utilisateur"
            onChange={(event) => setUsername(event.target.value)}
          />
          <input
            value={email}
            type="email"
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            value={password}
            type="password"
            placeholder="Mot de passe"
            onChange={(event) => setPassword(event.target.value)}
          />
          <input value={"S'inscrire"} type="submit" onClick={handleSubmit} />
        </form>
      </div>
    </div>
  );
};
export default Signup;
