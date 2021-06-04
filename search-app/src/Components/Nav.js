import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
  return (
    <nav className='main-nav'>
      <ul>
        <li>
          <Link to='/water'>Water</Link>
        </li>
        <li>
          <Link to='/dogs'>Dogs</Link>
        </li>
        <li>
          <Link to='/horses'>Horses</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
