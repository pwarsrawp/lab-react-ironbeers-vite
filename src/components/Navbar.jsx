import { Link } from "react-router-dom";
import { ThemeContext } from "./../context/theme.context"; 
import { useContext } from "react";
import homeicon from "../assets/home-icon.png"

function Navbar() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return(
        <nav className={"Navbar " + theme}>
            <ul className="menu-items">
                <Link to="/"><img src={homeicon}/>Home</Link>
            </ul>
        <button className="theme-btn" onClick={toggleTheme}>
            {theme === "light" ? "dark " : "light "}
        </button>
        </nav>
    )
}

export default Navbar;
