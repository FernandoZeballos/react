import { render, screen } from '@testing-library/react';
import { FirstStepsApp } from './FirstStepsApp';
import { describe, expect, test } from 'vitest';

describe('FirstStepsApp', () => {

    test('should match with snapshot', () => {

        const { container } = render(<FirstStepsApp />);
        expect(container).toMatchSnapshot();

    });

    test('should show the title "Carrito de compras"', () => {

        render(<FirstStepsApp />);
        expect(screen.getByText('Carrito de compras')).toBeTruthy();
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toBe('Carrito de compras');

    });

});