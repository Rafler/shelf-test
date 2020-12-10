import React, {FC} from 'react';
import './Checkbox.scss';

interface CheckboxProp {
    checked: boolean,
    readonly: boolean,
    name: string,
    onClick: (value: boolean) => void,
}


export const Checkbox: FC<CheckboxProp> = ( {checked, name, readonly, onClick} ) => {
    const handleCheckboxClick = () => {
        if (!readonly) onClick(!checked)
    };

    return (
        <div className="checkbox">
            <span className={checked ? 'checkbox__input checked' : 'checkbox__input unchecked'} onClick={handleCheckboxClick}/>
            <span className="checkbox__name">{name}</span>
        </div>
    );
};

