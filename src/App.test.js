import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

//these tests are typically in the __test__ folder but dont have to be
// unclear if i am using jest here
describe('Addition', () => {
  it('knows that 2 and 2 make 4', () => {
    expect(2 + 2).toBe(4);
  });
});

describe('test?', () => {
  it('does smth', () => {
    expect(this).toBe(that);
  });
});