import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { NavBar } from './NavBar';

const items = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
]

describe('NavBar', () => {

  it('should exists', () => {
    render(<NavBar navItems={items} />, {
      wrapper: MemoryRouter
    })

    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('should render the navItems', () => {
    render(<NavBar navItems={items} />, {
      wrapper: MemoryRouter
    })

    const navItems = screen.getAllByRole('link')
    expect(navItems.length).toEqual(2);
  });

  it('should render the navItems label', () => {
    render(<NavBar navItems={items} />, {
      wrapper: MemoryRouter
    })

    const navItems = screen.getAllByRole('link')
    expect(navItems[0].textContent).toEqual('Home');
    expect(navItems[1].textContent).toEqual('About');
  });
});
