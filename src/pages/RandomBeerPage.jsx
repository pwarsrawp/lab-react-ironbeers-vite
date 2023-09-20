import { useState,useEffect } from "react";
import axios from "axios";

function RandomBeersPage() {
    const [randomBeer, setRandomBeer] = useState([]);
    const [isLoading, setIsLoading ] = useState(true);

    useEffect(() =>{
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random').then(response => {
            setRandomBeer(response.data);
            setIsLoading(false);
        })

    }, [])
    return isLoading ? (
        <h1>loading</h1>
    ): (
        <div className="detail_wrapper">
            <div className="detail_img">
                <img src={randomBeer.image_url}/>
            </div>
            <h3>{randomBeer.name}</h3>
            <p>{randomBeer.tagline}</p>
            <p>{randomBeer.attenuation_level}</p>
            <p>{randomBeer.description}</p>
            <h6>{randomBeer.contributed_by}</h6>
        </div>
    );

}

export default RandomBeersPage;
