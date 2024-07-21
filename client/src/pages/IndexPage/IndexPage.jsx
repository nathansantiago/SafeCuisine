import { useEffect, useState } from "react";
import RestaurauntListItem from "../../components/RestaurantListItem/RestaurantListItem";
import "./IndexPage.scss"
import axios from "axios";

export default function IndexPage () {
    const[restaurants, setRestaurants] = useState([]);
    useEffect (() => {
        axios.get('/restaurants').then(response => {
            setRestaurants(response.data);
        });
    }, []);

    return (
        <div className="index-container">
            {/* <RestaurauntListItem restaurantData={restaurants[0]}/> */}
            {restaurants.length > 0 && restaurants.map(restaurant => {
                <RestaurauntListItem restaurantData={restaurant}/>
            })}
        </div>
    );
}