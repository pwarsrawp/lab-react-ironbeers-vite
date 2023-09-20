import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
function BeerDetailsPage() {
    const params = useParams();
    const [beer,setBeer] = useState({});
    const getData = async () => {
        const { data } = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${params.beerId}`)
        setBeer(data);
        

      };
    useEffect(() => {
       getData()
      }, [] );
    return(
        <div className="detail_wrapper">
            <div className="detail_img">
                <img src={beer.image_url}/>
            </div>
            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
            <p>{beer.attenuation_level}</p>
            <p>{beer.description}</p>
            <h6>{beer.contributed_by}</h6>
        </div>
    );
}

export default BeerDetailsPage;
