import Grid from "@mui/material/Grid";

export const GridItem = ({ children, ...otherProps }) => (
    <Grid item {...otherProps}>{children}</Grid>
);

export const GridContainer = ({ children, ...otherProps }) => (
    <Grid container {...otherProps}>{children}</Grid>
);

export default Grid;
