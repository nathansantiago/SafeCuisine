import { Link } from "react-router-dom";
import RatingsNumber from "../RatingsNumber/RatingsNumber";
import "./RestaurantListItem.scss"
import { getDistanceFromLatLonInMi } from "../../utils/Distance";

export default function RestaurauntListItem ({ restaurantData, locationData }) {
    return (
        <>
            <Link to={"/restaurant/"+restaurantData._id}>
                <div className="restauraunt-container">
                    <div className="rest-info-container">
                        <h1>{restaurantData.name}</h1>
                        <h3>
                            <a href="https://maps.google.com/?q=200 N Greensboro St A-18, Carrboro, NC 27510">{restaurantData.address.building} {restaurantData.address.street}, {restaurantData.address.town}, {restaurantData.address.state} {restaurantData.address.zipcode}</a>
                        </h3>
                        <h3>{ locationData && Math.round( // Rounds result to two decimal places
                                getDistanceFromLatLonInMi(  // Calls util function to find distance as the crow flies
                                    restaurantData.address.coord[0], restaurantData.address.coord[1],
                                    locationData.latitude, locationData.longitude
                                ) * 100) / 100} miles</h3>
                    </div>
                    <RatingsNumber rating={restaurantData.rating} numberOfRatings={restaurantData.numberOfRatings}/>
                </div>
            </Link>
        </>
    );
}