import ResultBox from './ResultBox';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


describe('Component ResultBox', () => {
    it('should render without crashing', () => {
        render(<ResultBox from="PLN" to="USD" amount={100} />);
      });
    it('should render proper info about conversion when PLN -> USD', () => {
        // render component
        render(<ResultBox from="PLN" to="USD" amount={100} />);

        // find main div
        const resultField = screen.getByTestId('result');

        // check if output = input
        expect(resultField).toHaveTextContent('PLN 100.00 = $28.57');

 
    });
});