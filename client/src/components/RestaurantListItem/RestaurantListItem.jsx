import "./RestaurantListItem.scss"

export default function RestaurauntListItem () {
    return (
        <>
        <div className="restauraunt-container">
            <div className="rest-info-container">
                <h1>Venable Rotisserie Bistro</h1>
                <h3>
                    <a href="https://maps.google.com/?q=200 N Greensboro St A-18, Carrboro, NC 27510">200 N Greensboro St A-18, Carrboro, NC 27510</a>
                </h3>
                <h3>1.32 miles</h3>
            </div>
            <div className="rest-ratings-container">
                <h1>5.0</h1>
                <h4>15 Ratings</h4>
            </div>
        </div>
        <div className="restauraunt-container">
            <div className="rest-info-container">
                <h1>Buns</h1>
                <h3>
                    <a href="https://maps.google.com/?q=200 N Greensboro St A-18, Carrboro, NC 27510">200 N Greensboro St A-18, Carrboro, NC 27510</a>
                </h3>
                <h3>0.88 miles</h3>
            </div>
            <div className="rest-ratings-container">
                <h1>4.4</h1>
                <h4>10 Ratings</h4>
            </div>
        </div>
        </>
    );
}