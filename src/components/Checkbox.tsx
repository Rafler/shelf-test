import React, {FC} from 'react';

interface CheckboxProp {
    checked: boolean,
    readonly: boolean,
    name: string,
    onClick: (value: boolean) => void,
}


const Checkbox: FC<CheckboxProp> = ( {checked, name, readonly, onClick} ) => {
    const handleCheckboxClick = () => {
        if (!readonly) onClick(!checked)
    };

    return (
        <div className="checkbox">
            <span className={checked ? 'checked' : 'unchecked'} onClick={handleCheckboxClick}/>
            <span className="checkbox__name">{name}</span>
        </div>
    );
};

export default Checkbox;
