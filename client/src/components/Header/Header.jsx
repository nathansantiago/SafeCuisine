import { Link } from "react-router-dom";
import "./Header.scss"

export default function Header () {
    return (
        <>
            <header>
                <Link to={"/"}>
                    <h2>
                        SafeCuisine
                    </h2>
                </Link>
            </header>
        </>
    );
}