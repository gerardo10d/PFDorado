import CartWidget from "../CartWidget/CartWidget";
import Button from '@mui/material/Button';

const NavBar = () => {
  return (
    <nav>
      <h3>Hombre Elegante</h3>
      <div>
        <Button variant="contained" color="primary">Chaquetas</Button>
        <Button variant="contained">Camisas</Button>
        <Button variant="contained">Pantalones</Button>
        <Button variant="contained">Zapatos</Button>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
