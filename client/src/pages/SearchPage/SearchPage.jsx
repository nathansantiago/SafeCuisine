import { useState } from "react";
import { ArrowRightMagnifyingGlassIcon } from "../../components/Icons";
import "./SearchPage.scss"

import axios from "axios";
import { Navigate } from "react-router-dom";

export default function SearchPage () {
    const[redirect, setRedirect] = useState(false);
    const[location, setLocation] = useState(null);
    const[distance, setDistance] = useState(0);
    const[allergens, setAllergens] = useState(["Gluten", "Vegan"]);
    const [results, setResults] = useState([]);

    async function searchFormSubmit (ev) {
        ev.preventDefault();
        
        try {
            console.log(location, distance, allergens);
            const restaurants = await axios.get('/search',
                {params: {location, distance, allergens}
            });
            if (restaurants.data.length === 0) {
                alert('No results found.');
                return;
            }
            setResults(restaurants.data);
            setRedirect(true);
        }
        catch (e) {
            alert('search failed.');
        }
    }

    if (redirect) {
        return <Navigate to={'/'} state={{ results }}/>
    }

    return (
        <div id="search-page">
            <div id="search-container">
                <form onSubmit={searchFormSubmit}>
                    <label htmlFor="location">Location (Zip or City):</label>
                    <input type="text" name="location" id="location" onChange={ev => setLocation(ev.target.value)}/>
                    <label htmlFor="distance">Distance in miles:</label>
                    <input type="number" name="distance" id="distance" onChange={ev => setDistance(ev.target.value)}/>
                    <label htmlFor="allergens">Allergens:</label>
                    <div id="allergens-options">
                        <input type="checkbox" id="gluten" />
                        <label htmlFor="gluten">Gluten</label>
                        <input type="checkbox" id="vegan" />
                        <label htmlFor="vegan">Vegan</label>
                    </div>
                    <button type="submit">
                        <ArrowRightMagnifyingGlassIcon/>
                    </button>
                </form>
            </div>
        </div>
    );
}