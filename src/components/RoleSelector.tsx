import React, {useState} from 'react';
import Select from "./Select";
import Admin from "../models/Admin";
import User from "../models/User";
import Member from "../models/Member";
import Custom from "../models/Custom";
import Checkbox from "./Checkbox";

const RoleSelector = ({}) => {
    const [roles, setRoles] = useState([new Admin(), new User(), new Member(), new Custom()]);
    const [selected, setSelected] = useState(roles[0]);
    const selectValues = roles.map(role => role.name);

    const handleSelectChange = (roleName: string) => {
        const role = roles.find(role => role.name === roleName);
        if (role) setSelected(role);
    };

    const handleCheckBoxClick = (key: string, value: boolean) => {
        setSelected({
            ...selected,
            [key]: value
        });
    };

    const handleFormSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if (selected.name === 'Custom') {
            const newRoles = roles.map(role => role.name === 'Custom' ? selected : role);
            setRoles(newRoles);
        }
    };

    return (
        <form className="form" onSubmit={handleFormSubmit}>
            <Select values={selectValues} onSelect={handleSelectChange} selected={selected.name}/>
            <section>
                <h2>Folders</h2>
                {
                    Object.entries(selected.folders).map((access: [string, boolean]) => {
                            const [name, value] = access;

                            return <Checkbox key={name} name={name} checked={value} readonly={!selected.editable}
                                             onClick={(newValue) => handleCheckBoxClick(name, newValue)}/>
                        }
                    )}
            </section>
            <section>
                <h2>Gems</h2>
                {
                    Object.entries(selected.gems).map((access: [string, boolean]) => {
                            const [name, value] = access;

                            return <Checkbox
                                key={name} name={name} checked={value} readonly={!selected.editable}
                                onClick={(newValue) => handleCheckBoxClick(name, newValue)}/>
                        }
                    )}
            </section>
            <button type="submit">Save</button>
        </form>
    );
};

export default RoleSelector;
