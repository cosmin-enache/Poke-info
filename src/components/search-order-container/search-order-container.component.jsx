import "./search-order-container.styling.css";
import { ReactComponent as DownArrowIcon } from "../../assets/images/arrow-down.svg";

const SearchOrderContainer = () => {
    return (
        <div className="search-order-container">
            <button className="search-order-button">Ascending</button>
            <DownArrowIcon className="arrow-icon"/>
        </div>
    );
};

export default SearchOrderContainer;
