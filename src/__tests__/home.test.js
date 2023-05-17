import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import '@testing-library/jest-dom';

jest.mock("next/router", () => require('next-router-mock'));

describe('Home page', () => {
  it('renders a heading with the portfolio owner name', () => {
    render(<Home name='Juan Carlos' />);
 
    const heading = screen.getByRole('heading', {
      name: 'Juan Carlos',
    });
 
    expect(heading).toBeInTheDocument();
  });

  it('renders a summary with the portfolio owner summary', () => {
    render(<Home summary="Other value" />);
    const summary = screen.getByText("My summary");
    expect(summary).toBeInTheDocument();
  });
  // it should render a name when something happen
});