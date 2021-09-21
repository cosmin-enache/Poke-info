import PokemonDataContext from "../context/pokemon-data.context";
import { useContext } from "react";

const usePokeData = () => {
    return useContext(PokemonDataContext);
};

export default usePokeData;
