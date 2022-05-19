import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';

import SigIn from './';

describe('Testando SigIn', () => {
    test('Deve renderizar o form de Login', () => {
        // Arrange
        render(
            <Router>
                <SigIn />,
            </Router>,
        );

        // Act
        const renderLogin = screen.getByText('SISTEMA DE LOGIN');

        // Assert
        expect(renderLogin).toBeInTheDocument();
    });
});