import { Link } from "react-router-dom";
import RatingsNumber from "../RatingsNumber/RatingsNumber";
import "./RestaurantListItem.scss"

export default function RestaurauntListItem ({ restaurantData }) {
    return (
        <>
            <Link to={"/restaurant/"+restaurantData._id}>
                <div className="restauraunt-container">
                    <div className="rest-info-container">
                        <h1>{restaurantData.name}</h1>
                        <h3>
                            <a href="https://maps.google.com/?q=200 N Greensboro St A-18, Carrboro, NC 27510">{restaurantData.address.building} {restaurantData.address.street}, {restaurantData.address.town}, {restaurantData.address.state} {restaurantData.address.zipcode}</a>
                        </h3>
                        <h3>1.32 miles</h3>
                    </div>
                    <RatingsNumber/>
                </div>
            </Link>
        </>
    );
}