import {render, screen, fireEvent} from "@testing-library/react";
import {Select} from "./Select";

describe('Select',  () => {
    test('Opens Dropdown', () => {
        const values = ['a', 'b', 'c'];

        const {container} = render(<Select onSelect={jest.fn()} selected={values[0]} values={values}/>);
        fireEvent.click(container.firstChild.lastChild);

        expect(screen.getByText('b')).toBeInTheDocument();
        expect(screen.getByText('c')).toBeInTheDocument();
    });

    test('Not updating selected of you choose the same option', () => {
        const values = ['a', 'b', 'c'];
        const onSelect = jest.fn();

        const {container} = render(<Select onSelect={onSelect} selected={values[0]} values={values}/>);
        fireEvent.click(container.firstChild.lastChild);
        fireEvent.click(screen.getAllByText('a')[1]);

        expect(onSelect).toHaveBeenCalledTimes(0);
    });

    test('Not updating selected of you choose the same option', () => {
        const values = ['a', 'b', 'c'];
        const onSelect = jest.fn();

        const {container} = render(<Select onSelect={onSelect} selected={values[0]} values={values}/>);
        fireEvent.click(container.firstChild.lastChild);
        fireEvent.click(screen.getByText('b'));

        expect(onSelect).toHaveBeenCalledWith('b');
        expect(screen.queryByText('b')).not.toBeInTheDocument();
    });
});