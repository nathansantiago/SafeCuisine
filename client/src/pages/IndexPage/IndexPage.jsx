import { useEffect, useState } from "react";
import RestaurauntListItem from "../../components/RestaurantListItem/RestaurantListItem";
import "./IndexPage.scss"
import axios from "axios";
import { useLocation } from "react-router-dom";

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
        // if geolocation is supported by the users browser
        if (navigator.geolocation) {
            // get the current users location
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    // save the geolocation coordinates in two variables
                    const { latitude, longitude } = position.coords;
                    // update the value of userlocation variable
                    setUserLocation({ latitude, longitude });
                },
                // if there was an error getting the users location
                (error) => {
                    console.error('Error getting user location:', error);
                }
            );
        }
        // if geolocation is not supported by the users browser
        else {
            console.error('Geolocation is not supported by this browser.');
        }
    }, []);

    return (
        <div className="index-container">
            {restaurants.length > 0 && restaurants.map((restaurant, index) => (
                <RestaurauntListItem restaurantData={restaurant} locationData={userLocation} key={index} />
            ))}
        </div>
    );
}