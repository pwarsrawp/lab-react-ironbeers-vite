import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AllBeersPage() {
    const [beers,setBeers] = useState([])
    const handleInputChange = (event) => {
        const {value} = event.target;
        axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${value}`)
        .then((response) => {
            setBeers(response.data);
        });
       
    }
    useEffect(() => {
        axios
          .get("https://ih-beers-api2.herokuapp.com/beers")
          .then((response) => {
            setBeers(response.data);
          });
        
      }, [] );

    return(
        
        <div className="list_wrapper">
            <input type="text" name="search" onChange={handleInputChange}></input>
        {beers.map(beer =>(
             <Link key={beer._id} to={`/beers-detail/${beer._id}`}>
                <div className="item_wrapper">
                    <div className="image_wrapper">
                        <img src={beer.image_url}/>
                    </div>
                    <div className="description_wrapper">
                        <h3>{beer.name}</h3>
                        <p>{beer.tagline}</p>
                        <h6>{beer.contributed_by}</h6>
                    </div>
                </div>
            </Link>
        ))}
    </div>
   
    
    );
}

export default AllBeersPage;
