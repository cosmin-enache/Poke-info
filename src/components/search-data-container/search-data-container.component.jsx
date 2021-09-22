import "./search-data-container.styling.css";

import SortSelectContainer from "../sort-select-container/sort-select-container.component";
import SearchOrderContainer from "../search-order-container/search-order-container.component";
import PokemonCardsContainer from "../pokemon-cards-container/pokemon-cards-container.component";

const SearchDataContainer = () => {
    return (
        <div className="search-data-container">
            <SearchOrderContainer />
            <SortSelectContainer />
            <PokemonCardsContainer />
        </div>
    );
};

export default SearchDataContainer;
