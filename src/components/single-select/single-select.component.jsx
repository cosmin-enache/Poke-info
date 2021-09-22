import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const SingleSelect = ({ labelId, label, menuItems }) => {
    return (
        <FormControl fullWidth className="sort-select-group">
            <InputLabel id={labelId}>{label}</InputLabel>
            <Select
                labelId={labelId}
                id={`${label}Select`}
                label={label}
                style={{borderRadius: "12px"}}
                >
                {
                    menuItems.map(
                        (menuItem, index) => (
                            <MenuItem value={menuItem} key={index}>
                                {menuItem}
                            </MenuItem>
                        )
                    )
                }
            </Select>
        </FormControl>
    );
};

export default SingleSelect;
