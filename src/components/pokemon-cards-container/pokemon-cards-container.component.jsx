import "./pokemon-cards-container.styling.css";

import PokemonCard from "../pokemon-card/pokemon-card.component";
import { GridContainer } from "../grid/grid.component";

import usePokeData from "../../custom-hooks/poke-data.hook";

const PokemonCardsContainer = () => {
    const pokeData = usePokeData();

    return (
        <GridContainer className="pokemon-cards-container">
            {
                pokeData ? (pokeData.map((data, index) => (
                    <PokemonCard key={index} data={data} />
                ))) : (
                    // display skeleton here
                    null
                )
            }
        </GridContainer>
    );
};

export default PokemonCardsContainer;
