import RestaurantReviewItem from "../../components/RestaurantReviewItem/RestaurantReviewItem";
import "./RestaurantPage.scss"

export default function RestaurantPage () {
    return (
        <div id='restaurant-page'>
            <div id='restaurant-info'></div>
            <div id='rest-reviews-cont'>
                <RestaurantReviewItem/>
            </div>
        </div>
    );
}