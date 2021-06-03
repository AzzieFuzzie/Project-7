import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='main-nav'>
      <ul>
        <li>
          <Link>Waterfall</Link>
        </li>
        <li>
          <Link>Sunset</Link>
        </li>
        <li>
          <Link>Horses</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
