import { render, screen, fireEvent } from '@testing-library/react';
import TranslateText from '@/components/translator/TranslateText';
import "@testing-library/jest-dom";

describe('TranslateText', () => {
    it('renders a div with the text "English" and a heading on the right with text "Chinese" ', () => {
        const result = render(<TranslateText />);
        expect(screen.getByTestId('heading-left')).toHaveTextContent('English');
    });
    it('switches English and Chinese headings when the toggle button is clicked', () => {
        const result = render(<TranslateText />);
        expect(screen.getByTestId('heading-left')).toHaveTextContent('English');
        expect(screen.getByTestId('heading-right')).toHaveTextContent('Chinese');
        fireEvent.click(screen.getByTestId('toggle-language'));
        expect(screen.getByTestId('heading-left')).toHaveTextContent('Chinese');
        expect(screen.getByTestId('heading-right')).toHaveTextContent('English');
    });
    it('changes the translate button to English when chinese mode is active', () => {
        const result = render(<TranslateText />);
        expect(screen.getByTestId('translate-button-chinese')).toBeInTheDocument();
        expect(screen.queryByTestId('translate-button-english')).toBe(null);
        fireEvent.click(screen.getByTestId('toggle-language'));
        expect(screen.getByTestId('translate-button-english')).toBeInTheDocument();
        expect(screen.queryByTestId('translate-button-chinese')).toBe(null);
    });
    it('should update the textarea value when the user inputs text', () => {
        const result = render(<TranslateText />);
        const textarea = screen.getByTestId('text-input');
        fireEvent.change(textarea, { target: { value: 'Hello' } });
        expect(textarea).toHaveValue('Hello');
    });
    it('should return a translation in the output textarea when the translate button is clicked', async () => {
        const result = render(<TranslateText />);
        const textarea = screen.getByTestId('text-input');
        fireEvent.change(textarea, { target: { value: 'Hello' } });
        fireEvent.click(screen.getByTestId('translate-button-chinese'));
        expect(await screen.findByTestId('text-output')).toHaveValue('你好');
    })
});