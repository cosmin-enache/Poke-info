import "./pokemon-searchbar.styling.css";
import { ReactComponent as PokeballRedIcon } from "../../assets/images/poke-ball-red-icon.svg";

const PokemonSearchbar = () => {
    return (
        <div className="pokemon-searchbar-wrapper">
            <input
                className="pokemon-searchbar"
                name="pokemon-searchbar"
                placeholder="Search for pokémon"
                />
            <PokeballRedIcon className="pokeball-red-icon" />
        </div>
    );
};

export default PokemonSearchbar;
