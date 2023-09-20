import axios from "axios";
import { useState } from "react";

function AddBeerPage() {
    const [beerData,setBeerData] = useState({
        name:'',
        tagline:'',
        description:'',
        first_brewed:'',
        brewers_tips:'',
        attenuation_level:'',
        contributed_by:''
    });
    const handleInputChange = (event) => {
        const {name,value} = event.target;
        setBeerData((prevBeerData) => ({
            ...prevBeerData,
            [name]:value
        }))
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.post('https://ih-beers-api2.herokuapp.com/beers/new',beerData)
        console.log(response)
    }
    return(
        <form onSubmit={handleSubmit} action="">
            <label>
                Name:
                <input name="name" type="text" value={beerData.name} onChange={handleInputChange}/>
            </label>
            <label>
                Tagline:
                <input name="tagline" type="text" value={beerData.tagline} onChange={handleInputChange}/>
            </label>
            <label>
                Description:
                <input name="description" type="text" value={beerData.description} onChange={handleInputChange}/>
            </label>
            <label>
                First brewed:
                <input name="first_brewed" type="text" value={beerData.first_brewed} onChange={handleInputChange}/>
            </label>
            <label>
                Brewers tips:
                <input name="brewers_tips" type="text" value={beerData.brewers_tips} onChange={handleInputChange}/>
            </label>
            <label>
                Attenuation level:
                <input name="attenuation_level" type="number" value={beerData.attenuation_level} onChange={handleInputChange}/>
            </label>
            <label>
                Contributed by:
                <input name="contributed_by"type="text" value={beerData.contributed_by} onChange={handleInputChange}/>
            </label>
            <button type="submit">Add new beer</button>
        </form>
    )
}

export default AddBeerPage;
