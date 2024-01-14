import CartWidget from "../CartWidget/CartWidget";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <h3>Hombre Elegante</h3>
      <div>
        <Button variant="contained">
          <Link to={`/category/chaqueta`} variant="contained" color="primary">
            Chaquetas
          </Link>
        </Button>
        <Link to={`/category/camisa`} variant="contained">
          Camisas
        </Link>
        <Link to={`/category/pantalones`} variant="contained">
          Pantalones
        </Link>
        <Link to={`/category/zapatos`} variant="contained">
          Zapatos
        </Link>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
