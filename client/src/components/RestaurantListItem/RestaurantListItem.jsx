import "./RestaurantListItem.scss"

export default function RestaurauntListItem () {
    return (
        <div className="restauraunt-container">
            <div className="rest-info-container">
                <h1>Venable Rotisserie Bistro</h1>
                <h3>200 N Greensboro St A-18, Carrboro, NC 27510</h3>
                <h3>1.32 miles</h3>
            </div>
            <div className="rest-ratings-container">
                <h1>5.0</h1>
                <h4>15 Ratings</h4>
            </div>
        </div>
    );
}