import {useState, useEffect} from "react";

import axios from "axios";

function RandomBeerPage() {
  const [beer, setBeer] = useState();

  useEffect(() => {
    axios
      .get(
        "https://ih-beers-api2.herokuapp.com/beers/random"
      )
      .then((response) => {
        console.log(response.data);
        setBeer(response.data);
      });
  }, []);

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
        <h1>{beer.name}</h1>
        <h3>{beer.tagline}</h3>
        <p>{beer.contributed_by}</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p>{beer.first_brewed}</p>
        <p>{beer.attenuation_level}</p>
        <p>{beer.description}</p>
      </div>
    </div>
  );
}

export default RandomBeerPage;

//https://github.com/MixterKill29/lab-react-ironbeers-vite
