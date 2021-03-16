import { render, screen } from '@testing-library/react';

import { App } from './App';

describe('App', () => {
  test('should render app with button', () => {
    render(<App />);
    const button = screen.getByText(/Button/i);
    expect(button).toBeInTheDocument();
  });
});
