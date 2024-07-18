import { ArrowRightMagnifyingGlassIcon } from "../../components/Icons";
import "./SearchPage.scss"

export default function SearchPage () {
    return (
        <div id="search-page">
            <div id="search-container">
                <form action="">
                    <label htmlFor="">Location (Zip or City):</label>
                    <input type="text" name="" id="" />
                    <label htmlFor="">Distance in miles:</label>
                    <input type="text" name="" id="" />
                    <label htmlFor="">Allergens:</label>
                    <input type="text" />
                    <button>
                        <ArrowRightMagnifyingGlassIcon/>
                    </button>
                </form>
            </div>
        </div>
    );
}