import "./selected-pokemon-card.styling.css";

import useSelectPokemon from "../../custom-hooks/select-pokemon.hook";

const paddedOrderNumber = n => n.toString().padStart(3, "0");

const SelectedPokemonCard = () => {
    const [selectedPokemon,] = useSelectPokemon();

    if (selectedPokemon) {
        var { sprite } = selectedPokemon;
    }

    return (
        <>
        {
            selectedPokemon ? (
                <div className="selected-pokemon-card">
                    <img
                        src={sprite}
                        className="pokemon-icon"
                        alt="pokemon-icon"
                        />
                </div>
            ) : (
                // skeleton here
                <div className="selected-pokemon-card">
                    <h1 style={{textAlign: "center"}}>Click a pokemon!</h1>
                </div>
            )
        }
        </>
    );
};

export default SelectedPokemonCard;
