import "./sort-select-container.styling.css";

import SingleSelect from "../single-select/single-select.component";
import { ButtonReset } from "../button/button.component";

const SortSelectContainer = () => {
    return (
        <div className="sort-select-container">
            <SingleSelect
                labelId="type-label"
                label="Type"
                menuItems={TYPE_VALUES}
                />
            <SingleSelect
                labelId="weakness-label"
                label="Weakness"
                menuItems={TYPE_VALUES}
                />
            <div className="reset-button-wrapper">
                <ButtonReset width={25} height={25} />
            </div>
        </div>
    );
};

const TYPE_VALUES = ["Fire", "Water", "Grass"];

export default SortSelectContainer;
