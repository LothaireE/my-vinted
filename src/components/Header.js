import logo from "../pictures/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="my-header">
      <div className="header-top-bar">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="header-searchbar">
          <p>soon to be searchbar</p>
        </div>
        <div>
          <span className="header-btn">
            <button>se connecter</button>
            <button>vends tes articles</button>
            <Link to={"/signup"}>
              <button>S'inscrire</button>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Header;
