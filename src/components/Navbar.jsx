import {NavLink} from "react-router-dom";
import {useDarkMode} from "./DarkThemeContext";

function Navbar() {
  const {isDarkMode, toggleDarkMode} = useDarkMode();
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/beers">Beers</NavLink>
      <NavLink to="/random-beer">Random beer</NavLink>
      <NavLink to="/new-beer">New beer</NavLink>
      <button onClick={() => toggleDarkMode()}>
        {" "}
        {isDarkMode ? "Turn the light on" : "Turn the light off"}
      </button>
    </nav>
  );
}

export default Navbar;
