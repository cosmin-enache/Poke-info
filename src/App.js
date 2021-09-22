import "./App.css";

import Container from '@mui/material/Container';
import { GridItem, GridContainer } from "./components/grid/grid.component";

import PokemonSearchbar from "./components/pokemon-searchbar/pokemon-searchbar.component";
import SearchDataContainer from "./components/search-data-container/search-data-container.component";
import SelectedPokemonCard from "./components/selected-pokemon-card/selected-pokemon-card.component.jsx";

// Background svg
import { ReactComponent as BackgroundSvg } from "./assets/images/poke-ball-bg.svg";

const App = () => {
    return (
        <>
            <BackgroundSvg id="background-svg" />
            <Container id="app-container">
                <GridContainer spacing={2}>
                    <GridItem xs={12} md={7}>
                        <PokemonSearchbar />
                    </GridItem>
                    <GridItem xs={0} md={5} />
                    <GridItem xs={12} md={7}>
                        <SearchDataContainer />
                    </GridItem>
                    <GridItem xs={12} md={5}>
                        <SelectedPokemonCard />
                    </GridItem>
                </GridContainer>
            </Container>
        </>
    );
};

export default App;
