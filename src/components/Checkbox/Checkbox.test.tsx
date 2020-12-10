import {render, screen, fireEvent} from "@testing-library/react";
import {Checkbox} from "./Checkbox";

describe('Checkbox',  () => {
    test('Renders with checked if passed checked', () => {
        const {container} = render(<Checkbox name="test" onClick={jest.fn()} readonly={false} checked={true}/>);

        expect(container.firstChild.firstChild).toHaveClass('checked');
    });

    test('Renders with unchecked if passed checked', () => {
        const {container} = render(<Checkbox name="test" onClick={jest.fn()} readonly={false} checked={false}/>);

        expect(container.firstChild.firstChild).toHaveClass('unchecked');
    });

    test('Renders with passed name', () => {
        render(<Checkbox name="test" readonly={false} checked={false} onClick={jest.fn()}/>);

        expect(screen.getByText("test")).toBeInTheDocument();
    });

    test('Handle clicks', () => {
        const click = jest.fn();

        const {container} = render(<Checkbox name="test" onClick={click} readonly={false} checked={false}/>);

        fireEvent.click(container.firstChild.firstChild);

        expect(click).toHaveBeenCalledWith(true);
    });

    test('disable clicks if readonly', () => {
        const click = jest.fn();

        const {container} = render(<Checkbox name="test" onClick={click} readonly={true} checked={false}/>);

        fireEvent.click(container.firstChild.firstChild);

        expect(click).toHaveBeenCalledTimes(0);
    });
});