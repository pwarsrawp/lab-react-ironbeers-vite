import {NavLink} from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/beers">Beers</NavLink>
      <NavLink to="/random-beer">
        Random beer
      </NavLink>
      <NavLink to="/new-beer">New beer</NavLink>
    </nav>
  );
}

export default Navbar;
