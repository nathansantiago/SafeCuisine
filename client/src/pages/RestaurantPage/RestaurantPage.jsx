import RatingsNumber from "../../components/RatingsNumber/RatingsNumber";
import RatingsStars from "../../components/RatingsStars/RatingsStars";
import RestaurantReviewItem from "../../components/RestaurantReviewItem/RestaurantReviewItem";
import { HeartIcon } from '@heroicons/react/24/outline';
import { PhoneIcon, BookOpenIcon } from '@heroicons/react/24/solid';
import "./RestaurantPage.scss"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function RestaurantPage () {
    // Grabs restaurant id from url
    const {id} = useParams();
    // Stores the restaurant data from database
    const [restaurant, setRestaurant] = useState(null);

    // Runs each time the page id changes
    useEffect(() => {
        if (!id) {
            return;
        }
        // Calls api and updates the page data.
        axios.get(`/restaurants/${id}`).then(response => {
            setRestaurant(response.data);
        });
    }, [id]);

    if (!restaurant) return '';

    return (
        <div id='restaurant-page'>
            <div id='restaurant-info'>
                <div id='rest-header'>
                    <h1>{restaurant.name}</h1>
                    {/* heart goes here */}
                    <HeartIcon id="heart-icon"/>
                </div>
                <h3>{restaurant.address.building} {restaurant.address.street}, {restaurant.address.town}, {restaurant.address.state} {restaurant.address.zipcode}</h3>
                <div id="ratings-cont">
                    <RatingsStars/>
                    <RatingsNumber/>
                </div>
                <div id="phone-menu-cont">
                    <div id="phone-cont">
                        <PhoneIcon/>
                        <p id="phone-num">({restaurant.phone.slice(0,3)}) {restaurant.phone.slice(3,6)}-{restaurant.phone.slice(6,10)}</p>
                    </div>
                    <div id="menu-cont">
                        <BookOpenIcon/>
                        <p>View Menu</p>
                    </div>
                </div>
            </div>
            <div id='rest-reviews-cont'>
                <RestaurantReviewItem/>
            </div>
        </div>
    );
}