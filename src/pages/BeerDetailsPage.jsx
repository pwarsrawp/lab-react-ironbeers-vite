import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDarkMode} from "../components/DarkThemeContext";
import axios from "axios";

function BeerDetailsPage() {
  const [beer, setBeer] = useState();
  const {beerId} = useParams();
  const [loading, setLoading] = useState(true);
  const {isDarkMode} = useDarkMode();

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers/" + beerId).then((response) => {
      console.log(response.data);
      setBeer(response.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div>
        <h1 style={{color: isDarkMode ? "white" : "black"}}>loading</h1>
      </div>
    );
  }

  return (
    <div style={{display: "flex"}} key={beer._id}>
      <img
        style={{
          width: "100px",
        }}
        src={beer.image_url}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1 style={{color: isDarkMode ? "white" : "black"}}>{beer.name}</h1>
        <h3 style={{color: isDarkMode ? "white" : "black"}}>{beer.tagline}</h3>
        <p style={{color: isDarkMode ? "white" : "black"}}>{beer.contributed_by}</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p style={{color: isDarkMode ? "white" : "black"}}>{beer.first_brewed}</p>
        <p style={{color: isDarkMode ? "white" : "black"}}>{beer.attenuation_level}</p>
        <p style={{color: isDarkMode ? "white" : "black"}}>{beer.description}</p>
      </div>
    </div>
  );
}

export default BeerDetailsPage;
