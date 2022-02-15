import logo from "../pictures/logo.svg";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ token, setUser }) => {
  const navigate = useNavigate();
  return (
    <div className="my-header">
      <div className="header-top-bar">
        <Link to={"/"}>
          <div className="logo">
            <img src={logo} alt="" />
          </div>
        </Link>
        <div>
          <input
            className="header-searchbar"
            type="text"
            placeholder="Recherche des articles"
          />
        </div>
        {token ? (
          <button
            onClick={() => {
              setUser(null);
              navigate("/");
            }}
            className="log-out-btn"
          >
            Se deconnecter
          </button>
        ) : (
          <>
            <Link to={"/signup"}>
              <button className="sign-in-btn">S'inscrire</button>
            </Link>
            <Link to={"/login"}>
              <button className="log-in-btn">Se connecter</button>
            </Link>
          </>
        )}

        <div>
          <Link to={"/publish"}>
            <button className="sell-btn">Vends tes articles</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
