import React, {useState, FC} from 'react';
import './Select.scss';

interface SelectProps {
    values: string[]
    onSelect: (value: string) => void,
    selected: string
}

export const Select: FC<SelectProps> = ({values, onSelect, selected}) => {
    const [isOpen, setOpen] = useState(false);

    const handleOptionClick = (value:string) => {
        if (selected !== value) {
            onSelect(value);
        }

        setOpen(false);
    };

    return (
        <div className="select">
            <h3 className="select__name">User Role</h3>
            <div className="select__field" onClick={() => setOpen(!isOpen)}>
                <span>{selected}</span>
                <span className={isOpen ?  'select__field__arrow opened' : 'select__field__arrow'}/>
            </div>
            {isOpen &&
            <ul className="select__list">
                {
                    values.map((value: string)=>
                    <li className="select__list__option" onClick={() => handleOptionClick(value)} key={value}>{value}</li>
                )
                }
            </ul>
                }
            
        </div>
    );
};
