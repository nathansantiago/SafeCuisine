import { Link } from "react-router-dom";
import RatingsNumber from "../RatingsNumber/RatingsNumber";
import "./RestaurantListItem.scss"

export default function RestaurauntListItem () {
    return (
        <>
            <Link to={"/restaurant/669c71ea6a78518e9f6c1de5"}>
                <div className="restauraunt-container">
                    <div className="rest-info-container">
                        <h1>Venable Rotisserie Bistro</h1>
                        <h3>
                            <a href="https://maps.google.com/?q=200 N Greensboro St A-18, Carrboro, NC 27510">200 N Greensboro St A-18, Carrboro, NC 27510</a>
                        </h3>
                        <h3>1.32 miles</h3>
                    </div>
                    <RatingsNumber/>
                </div>
            </Link>
        </>
    );
}