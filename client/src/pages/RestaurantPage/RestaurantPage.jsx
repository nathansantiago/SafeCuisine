import RatingsNumber from "../../components/RatingsNumber/RatingsNumber";
import RatingsStars from "../../components/RatingsStars/RatingsStars";
import RestaurantReviewItem from "../../components/RestaurantReviewItem/RestaurantReviewItem";
import { HeartIcon } from '@heroicons/react/24/outline';
import { PhoneIcon, BookOpenIcon } from '@heroicons/react/24/solid';
import "./RestaurantPage.scss"

export default function RestaurantPage () {
    return (
        <div id='restaurant-page'>
            <div id='restaurant-info'>
                <div id='rest-header'>
                    <h1>Venable Rotisserie Bistro</h1>
                    {/* heart goes here */}
                    <HeartIcon id="heart-icon"/>
                </div>
                <h3>200 N Greensboro St A-18, Carrboro, NC 27510</h3>
                <div id="ratings-cont">
                    <RatingsStars/>
                    <RatingsNumber/>
                </div>
                <div id="phone-menu-cont">
                    <div id="phone-cont">
                        <PhoneIcon/>
                        <p id="phone-num">(919) 904-7160</p>
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