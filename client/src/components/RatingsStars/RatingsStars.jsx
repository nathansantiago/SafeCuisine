import { StarIcon } from '@heroicons/react/24/solid';

import "./RatingsStars.scss";

export default function RatingsStars ({ rating }) {
    return (
        <div id="stars-cont">
            {rating > 0 && [...Array(rating)].map((index) => (  // Creates an array the length of the rating number.
                <StarIcon key={index} />
            ))}
        </div>
    );
}