import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {useDarkMode} from "../components/DarkThemeContext";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);
  const [loading, setLoading] = useState(true);
  const {isDarkMode} = useDarkMode();

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
      console.log("axios", response);
      setBeers(response.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p style={{color: isDarkMode ? "white" : "black"}}>Loading...</p>;
  }

  return (
    <div>
      <div>
        <h1 style={{color: isDarkMode ? "white" : "black"}}>All Beers</h1>

        {beers.map((beer) => (
          <div style={{display: "flex"}} key={beer._id}>
            <Link to={`/beers/${beer._id}`}>
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
                <h1>{beer.name}</h1>
                <h3>{beer.tagline}</h3>
                <p>{beer.contributed_by}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllBeersPage;
