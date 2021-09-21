import "../custom-hooks/fetch-poke-data.hook";
import { useEffect, createContext } from "react";
import useFetchPokeData from "../custom-hooks/fetch-poke-data.hook";

const PokemonDataContext = createContext();

export const PokemonDataProvider = ({ children }) => {
    // Hook to fetch pokemon data
    const [pokeData, fetchPokeData] = useFetchPokeData();

    // Fetch data only on componentDidMount and componentWillUnmount
    useEffect(() => {
        fetchPokeData();
    }, []);

    return (
        <PokemonDataContext.Provider value={pokeData}>
            {children}
        </PokemonDataContext.Provider>
    );
};

export default PokemonDataContext;
