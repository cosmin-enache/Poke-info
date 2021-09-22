import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { ReactComponent as ResetIcon } from "../../assets/images/restart.svg";

export const ButtonContained = ({ children, ...otherProps }) => (
    <Button variant="contained" {...otherProps}>{children}</Button>
);

export const ButtonReset = ({ width, height }) => (
    <IconButton
        aria-label="reset"
        color="primary"
        size="large"
        >
        <ResetIcon style={{ width, height }}/>
    </IconButton>
);

export default Button;
