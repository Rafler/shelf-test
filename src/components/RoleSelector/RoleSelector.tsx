import React, {useState, FC} from 'react';
import {Select} from "../Select/Select";
import Admin from "../../models/Admin";
import User from "../../models/User";
import Member from "../../models/Member";
import Custom from "../../models/Custom";
import {Checkbox} from "../Checkbox/Checkbox";
import './RoleSelector.scss';

interface RoleSelectorProps {
    onSelect: (role:  Custom) => void;
    onChange: (selected: Custom) => void,
    onSubmit: (roles: (Custom)[]) => void
}

export const RoleSelector: FC<RoleSelectorProps> = ({onSelect, onChange, onSubmit}) => {
    const [roles, setRoles] = useState([new Admin(), new User(), new Member(), new Custom()]);
    const [selected, setSelected] = useState(roles[0]);
    const selectValues = roles.map(role => role.name);

    const handleSelectChange = (roleName: string) => {
        const role = roles.find(role => role.name === roleName);

        if (role) {
            setSelected(role);
            onSelect(role);
        }
    };


    const handleFormSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if (selected.name === 'Custom') {
            const newRoles = roles.map(role => role.name === 'Custom' ? selected : role);
            setRoles(newRoles);
        }

        onSubmit(roles);
    };

    return (
        <form className="form" onSubmit={handleFormSubmit}>
            <div className="form__content">
                <Select values={selectValues} onSelect={handleSelectChange} selected={selected.name}/>
                <section className="form__content__data">
                    <h2 className="form__content__data__title">Folders</h2>
                    <div className="form__content__data__checkboxes">
                        {
                            Object.entries(selected.folders).map((access: [string, boolean]) => {
                                    const handleCheckBoxClick = (key: string, value: boolean) => {
                                        setSelected({
                                            ...selected,
                                            folders: {
                                                ...selected.folders,
                                                [key]: value,
                                            }
                                        });

                                        onChange(selected);
                                    };
                                    const [name, value] = access;

                                    return <Checkbox key={name} name={name} checked={value} readonly={!selected.editable}
                                                     onClick={(newValue) => handleCheckBoxClick(name, newValue)}/>
                                }
                            )}
                    </div>
                </section>
                <section className="form__content__data">
                    <h2 className="form__content__data__title">Gems</h2>
                    <div className="form__content__data__checkboxes">
                        {
                            Object.entries(selected.gems).map((access: [string, boolean]) => {
                                    const handleCheckBoxClick = (key: string, value: boolean) => {
                                        setSelected({
                                            ...selected,
                                            gems: {
                                                ...selected.gems,
                                                [key]: value,
                                            }
                                        });

                                        onChange(selected);
                                    };
                                    const [name, value] = access;

                                    return <Checkbox
                                        key={name} name={name} checked={value} readonly={!selected.editable}
                                        onClick={(newValue) => handleCheckBoxClick(name, newValue)}/>
                                }
                            )}
                    </div>
                </section>
            </div>
            <button type="submit" className="form__submit">Save</button>
        </form>
    );
};
