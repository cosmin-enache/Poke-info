import "./pokemon-card.styling.css";

import { GridItem } from "../grid/grid.component";
import PokemonTypePill from "../pokemon-type-pill/pokemon-type-pill.component";

import useSelectPokemon from "../../custom-hooks/select-pokemon.hook";

const paddedOrderNumber = n => n.toString().padStart(3, "0");
const capitalize = str => str[0].toUpperCase() + str.slice(1);

const PokemonCard = ({ data }) => {
    const { name, orderNumber, sprite, type } = data;
    const [selectedPokemon, selectPokemon] = useSelectPokemon();

    return (
        <GridItem xs={6} lg={4} className="pokemon-card-grid-item" onClick={() => selectPokemon(data)}>
            <div className="pokemon-card">
                <img
                    src={sprite}
                    className="pokemon-icon"
                    alt="pokemon-icon"
                    />
                <p className="pokemon-order">N°{paddedOrderNumber(orderNumber)}</p>
                <p className="pokemon-name">{capitalize(name)}</p>
                <PokemonTypePill type={type} />
            </div>
        </GridItem>
    );
};

export default PokemonCard;
