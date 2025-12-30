import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import { MyAwesomeApp } from "./MyAwesomeApp";


describe("MyAwesomeApp", () => {

    test("should render firstName and lastName", () => {

        const { container } =render(<MyAwesomeApp />);
        //screen.debug();
        //console.log(container.innerHTML);

        const h1 = container.querySelector('h1');
        const h3 = container.querySelector('h3');

        //podemmos usar tantos sxpect como necesitemos
        expect(h1?.innerHTML).toContain('Fernando');
        expect(h3?.innerHTML).toContain('zeballos');
    
    });
    test("should render firstName and lastName - screen", () => {

        render(<MyAwesomeApp />);
        screen.debug();
        //console.log(container.innerHTML);

        // const h1 = screen.getByRole('heading', {
        //     level: 1,
        // });
        const h1 = screen.getByTestId('first-name-tittle');

        expect(h1.innerHTML).toContain('Fernando');
    });

    test('should match with snapshot', () => {
        const { container } = render(<MyAwesomeApp />);
        expect(container).toMatchSnapshot();
    });

      test('should match with snapshot', () => {
        render(<MyAwesomeApp />);
        expect( screen.getByTestId('div-app') ).toMatchSnapshot();
    });

});
        