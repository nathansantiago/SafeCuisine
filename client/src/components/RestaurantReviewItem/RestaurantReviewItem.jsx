import RatingsStars from "../RatingsStars/RatingsStars";
import "./RestaurantReviewItem.scss"

export default function RestaurantReviewItem () {
    return (
        <div id="review-cont">
            <div id="review-header">
                <p id="username">Jonathan</p>
                <p id="review-date">Reviewed: 1/25/24</p>
            </div>
            <RatingsStars/>
            <p id="reviewed-for-allergens">Reviewed for: Gluten, Vegan</p>
            <p id="review-text">Knowledgable Staff, no issues.</p>
        </div>
    );
}