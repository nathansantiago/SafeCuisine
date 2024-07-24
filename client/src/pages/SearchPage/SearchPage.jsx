import { useState } from "react";
import { ArrowRightMagnifyingGlassIcon } from "../../components/Icons";
import "./SearchPage.scss"

import axios from "axios";

export default function SearchPage () {
    const[redirect, setRedirect] = useState(false);
    const[location, setLocation] = useState(null);
    const[distance, setDistance] = useState(0);
    const[allergens, setAllergens] = useState([])

    async function searchFormSubmit (ev, location, distance, allergens) {
        ev.preventDefault();
        
        try {
            const restaraunts = await axios.post('/search', {location, distance, allergens});
            setRedirect(true);
        }
        catch (e) {
            alert('search failed.');
        }
    }

    return (
        <div id="search-page">
            <div id="search-container">
                <form onSubmit={searchFormSubmit}>
                    <label htmlFor="">Location (Zip or City):</label>
                    <input type="text" name="" id="" onChange={ev => setLocation(ev.target.value)}/>
                    <label htmlFor="">Distance in miles:</label>
                    <input type="number" name="" id="" onChange={ev => setDistance(ev.target.value)}/>
                    <label htmlFor="">Allergens:</label>
                    <div id="allergens-options">
                        <input type="checkbox" />
                        <label htmlFor="">Gluten</label>
                        <input type="checkbox" />
                        <label htmlFor="">Vegan</label>
                    </div>
                    <button>
                        <ArrowRightMagnifyingGlassIcon/>
                    </button>
                </form>
            </div>
        </div>
    );
}