import Button from "@mui/material/Button";

export const ButtonContained = ({ children, ...otherProps }) => <Button variant="contained" {...otherProps}>{children}</Button>

export default Button;
