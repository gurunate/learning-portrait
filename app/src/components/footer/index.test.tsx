import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import Footer from '.';

describe('Footer', () => {
    it('renders Footer component', () => {
        render(<Footer />);
        
        const footerElement = screen.getByRole('contentinfo');
        expect(footerElement).toBeInTheDocument();
    });

    it('renders Container component inside Footer', () => {
        render(<Footer />);

        const containerElement = screen.getByTestId('footer');
        expect(containerElement).toBeInTheDocument();
    });

    it('renders Copyright component inside Container', () => {
        render(<Footer />);
        
        const copyrightElement = screen.getByTestId('copyright');
        expect(copyrightElement).toBeInTheDocument();
    });
});
