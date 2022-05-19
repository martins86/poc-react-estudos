import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from './App';

describe('Testando App', () => {
    test('Deve renderizar o App na tela de Login', () => {
        // Arrange
        render(<App />);

        // Act
        const renderLogin = screen.getByText('SISTEMA DE LOGIN');

        // Assert
        expect(renderLogin).toBeInTheDocument();
    });
});


