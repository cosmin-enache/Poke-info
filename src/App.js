import "./App.css";

import { GridItem, GridContainer } from "./components/grid";
import { ButtonContained } from "./components/button";

import usePokeData from "./custom-hooks/poke-data.hook";

const App = () => {
    const pokeData = usePokeData();

    return (
        <GridContainer spacing={2} sx={{width:"100%",textAlign: "center"}}>
            <GridItem sm={12}>
                {
                    pokeData && pokeData.map(
                        (pokemon, index) => <p key={index}>{pokemon.name}</p>
                    )
                }
            </GridItem>
            <GridItem sm={12}>
                <ButtonContained>Click me!</ButtonContained>
            </GridItem>
        </GridContainer>
    );
};

export default App;
