import React from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';

const Navbar = () => (
  <>
    <nav style={{ padding: '1rem', background: '#222', color: '#fff' }}>
      <Link to="/" style={{ color: '#fff', marginRight: '1rem' }}>Home</Link>
      <Link to="/login" style={{ color: '#fff', marginRight: '1rem' }}>Login</Link>
    </nav>
    <Cart />
  </>
);

export default Navbar;