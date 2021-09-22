import { useContext } from "react";
import { PokemonSelectedContext } from "../context/pokemon-funct.context";

const useSelectPokemon = () => {
    return useContext(PokemonSelectedContext);
};

export default useSelectPokemon;
