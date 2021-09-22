import "./pokemon-type-pill.styling.css";
import Chip from "@mui/material/Chip";

const PokemonTypePill = ({ type }) => {
    return (
        <Chip label={type} className={`pokemon-type-pill ${type}`} />
    );
};

export default PokemonTypePill;
