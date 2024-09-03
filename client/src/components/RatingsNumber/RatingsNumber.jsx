import "./RatingsNumber.scss";

export default function RatingsNumber ({ rating, numberOfRatings }) {
    rating = (Math.round(rating * 10) / 10).toFixed(1);
    return (
        <div id="rest-ratings-container">
            <h1>{ rating }</h1>
            <h4>{ numberOfRatings } Ratings</h4>
        </div>
    );
}