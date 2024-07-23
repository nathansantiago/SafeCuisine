import RatingsStars from "../RatingsStars/RatingsStars";
import "./RestaurantReviewItem.scss"

export default function RestaurantReviewItem ({ reviewData }) {
    return (
        <div id="review-cont">
            <div id="review-header">
                <p id="username">{reviewData.name}</p>
                <p id="review-date">Reviewed: {new Date(reviewData.date).toLocaleDateString()}</p>
            </div>
            <RatingsStars rating={reviewData.rating}/>
            <p id="reviewed-for-allergens">Reviewed for: {reviewData.allergens.length > 0 &&  // If reviewed for allergens display them
                reviewData.allergens.map((allergen, index) => {  // adds each allergen to the returned p tag
                    if (index !== reviewData.allergens.length - 1) {  // If not the last allergen in the array add a comma and space.
                        return <span>{allergen}, </span>
                    }
                    return <span>{allergen}</span>
                })
            }</p>
            <p id="review-text">{reviewData.text}</p>
        </div>
    );
}