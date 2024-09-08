import { useEffect, useState } from "react";
import RestaurauntListItem from "../../components/RestaurantListItem/RestaurantListItem";
import "./IndexPage.scss"
import axios from "axios";
import { useLocation } from "react-router-dom";
import UserLocation from "../../utils/UserLocation";

export default function IndexPage () {
    const[restaurants, setRestaurants] = useState([]);
    // const variable array to save the users location
    const [userLocation, setUserLocation] = useState(null);
    // Gets search results if redirected from search screen.
    const { results } = useLocation().state || {};

    useEffect(() => {
        if (results) {
            setRestaurants(results);
        } else {
            axios.get('/restaurants').then(response => {
                setRestaurants(response.data);
            });
        }
    }, [results]);

    useEffect (() => {
        UserLocation().then(location => {
            setUserLocation(location);
        }).catch(error => {
            console.error('Error getting user location:', error);
        });
    }, []);

    return (
        <div className="index-container">
            {restaurants.length > 0 && restaurants.map((restaurant, index) => (
                <RestaurauntListItem restaurantData={restaurant} locationData={userLocation} key={index} />
            ))}
        </div>
    );
}