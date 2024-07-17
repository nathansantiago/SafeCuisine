import RatingsStars from "../RatingsStars/RatingsStars";
import "./RestaurantReviewItem.scss"

export default function RestaurantReviewItem () {
    return (
        <div id="review-cont">
            <div id="review-header">
                
            </div>
            <RatingsStars/>
            <p id="reviewed-for-allergens"></p>
            <p id="review-text"></p>
        </div>
    );
}