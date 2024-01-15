import CartWidget from "../CartWidget/CartWidget";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <h3>Hombre Elegante</h3>
      </Link>
      <div>
        <Link to={`/category/chaqueta`}>Chaquetas</Link>
        <Link to={`/category/camisa`}>Camisas</Link>
        <Link to={`/category/pantalones`}>Pantalones</Link>
        <Link to={`/category/zapatos`}>Zapatos</Link>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
