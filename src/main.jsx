import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProviderWrapper } from "./context/theme.context"; // <== IMPORT


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <ThemeProviderWrapper>
      <App />
    </ThemeProviderWrapper>
  </Router>
);
