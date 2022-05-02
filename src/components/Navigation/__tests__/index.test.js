import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navigation from '..';

afterEach(cleanup);

describe('Nav component', () => {
    // baseline test
    it('renders', () => {
      render(<Navigation />);
    });
  
    //snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Navigation />);
        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
      });
  })

  describe('links are visible', () => {
    it('inserts text into the links', () => {
      const { getByTestId } = render(<Navigation />);
      expect(getByTestId('link')).toHaveTextContent('Jiyeon You');
      expect(getByTestId('about')).toHaveTextContent('About me');
    });
  })