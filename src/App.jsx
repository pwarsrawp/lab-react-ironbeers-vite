import "./App.css";
import {Routes, Route} from "react-router-dom";

import HomePage from "./pages/HomePage";
import AllBeersPage from "./pages/AllBeersPage";

import RandomBeerPage from "./pages/RandomBeerPage";
import BeerDetailsPage from "./pages/BeerDetailsPage";
import Navbar from "./components/Navbar";
import {useDarkMode} from "./components/DarkThemeContext";

function App() {
  const {isDarkMode} = useDarkMode();
  return (
    <div className="App" style={{backgroundColor: isDarkMode ? "#5A5A5A" : "white"}}>
      <h1 style={{color: isDarkMode ? "white" : "black", margin: 0}}>LAB | React IronBeers</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/beers" element={<AllBeersPage />} />
        <Route path="/random-beer" element={<RandomBeerPage />} />
        <Route path="/beers/:beerId" element={<BeerDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
