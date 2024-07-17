import { Cog6ToothIcon, MagnifyingGlassIcon, MapIcon } from "@heroicons/react/24/solid";
import "./Footer.scss"
import { Link } from "react-router-dom";

export default function Footer () {
    return (
        <>
            <footer>
                <Link to={"/"}>
                    <MapIcon/>
                </Link>
                <Link to={"/search"}>
                    <MagnifyingGlassIcon/>
                </Link>
                <Link to={"/settings"}>
                    <Cog6ToothIcon/>
                </Link>
            </footer>
        </>
    );
}