import { Outlet } from "react-router-dom";

export default function Layout () {
    return (
        <>
            <div>
                this is within the layout file
            </div>
            <Outlet/>
        </>
    );
}