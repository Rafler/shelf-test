import React, {useState, FC} from 'react';

interface SelectProps {
    values: string[]
    onSelect: (value: string) => void,
    selected: string
}

const Select: FC<SelectProps> = ({values, onSelect, selected}) => {
    const [isOpen, setOpen] = useState(false);

    const handleOptionClick = (value:string) => {
        if (selected !== value) {
            onSelect(value);
            setOpen(false);
        }
    };

    return (
        <div className="select">
            <div className="select__field" onClick={() => setOpen(!isOpen)}>{selected}</div>
            {isOpen &&
            <ul>
                {
                    values.map((value: string)=>
                    <li onClick={() => handleOptionClick(value)} key={value}>{value}</li>
                )
                }
            </ul>
                }
            
        </div>
    );
};

export default Select;
