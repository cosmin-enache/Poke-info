import { createContext, useState } from "react";

export const PokemonSelectedContext = createContext();

const PokemonFunctProvider = ({ children }) => {
    const [selectedPokemon, selectPokemon] = useState(null);

    return (
        <PokemonSelectedContext.Provider value={[selectedPokemon, selectPokemon]}>
            {children}
        </PokemonSelectedContext.Provider>
    );
};

export default PokemonFunctProvider;
