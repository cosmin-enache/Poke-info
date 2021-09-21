import { useState } from "react";
import axios from "axios";

import ENDPOINTS from "../config/endpoints";

// Fetches data for each pokemon and stores it in state
const fetchIndividualPokemonData = async (pokemonId) => {
    // To be added to internal data
    let internalPokemonData;

    try {
        const individualEndpoint = ENDPOINTS.pokemonIndividualEndpoint + pokemonId.toString();
        const response = await axios.get(individualEndpoint);
        const pokemonIndividualData = response.data;

        const speciesUrl = pokemonIndividualData.species.url;
        const speciesResponse = await axios.get(speciesUrl);
        const speciesData = speciesResponse.data;

        internalPokemonData = {
            height: pokemonIndividualData.height,
            weight: pokemonIndividualData.weight,
            name: pokemonIndividualData.name,
            sprite: pokemonIndividualData.sprites.front_default,
            type: pokemonIndividualData.types[0].type.name,
            color: speciesData.color.name,
            description: speciesData.flavor_text_entries[0].flavor_text,
            generation: speciesData.generation.name,
            orderNumber: speciesData.pokedex_numbers[0].entry_number
        };

        return internalPokemonData;
    } catch ({ message }) {
        console.error(message);
    }
};

// Extracts pokemon ID from each pokemon object,
// Returns array with all pokemon data
const extractIndividualPokemonIDAndReturnAll = async (pokemonArray) => {
    const extractIdFromUrl = urlString => {
        try {
            const urlArray = urlString.split("/");
            const len = urlArray.length;

            const idString = urlArray[len - 2];
            const id = parseInt(idString);

            if (isNaN(id)) throw "Invalid Pokemon ID during fetch!";

            return id;
        } catch ({ message }) {
            console.error(message);
        }
    };

    // this array will ultimately be stored in state
    const allPokemonData = [];

    for (const pokemonObject of pokemonArray) {
        const pokemonId = extractIdFromUrl(pokemonObject.url);
        const individualData = await fetchIndividualPokemonData(pokemonId);

        if (individualData) {
            allPokemonData.push(individualData);
        }
    }

    return allPokemonData;
};

// Fetches data of all desired pokemon from the main data endpoint
const fetchAllPokemonData = async () => {
    try {
        const response = await axios.get(
            ENDPOINTS.mainDataEndpoint
        );

        const pokemonArray = response.data.results;

        return await extractIndividualPokemonIDAndReturnAll(pokemonArray);
    } catch ({ message }) {
        console.error(message);
    }
};

// Returns an array with all pokemon data fetched from PokeApi
const useFetchPokeData = () => {
    const [pokeData, setPokeData] = useState(null);

    const fetchPokeData = async () => {
        const data = await fetchAllPokemonData();

        setPokeData(data);
    };

    return [pokeData, fetchPokeData];
};

export default useFetchPokeData;
