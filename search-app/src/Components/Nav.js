import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='main-nav'>
      <ul>
        <li>
          <Link>Cats</Link>
        </li>
        <li>
          <Link>Dogs</Link>
        </li>
        <li>
          <Link>Computers</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
