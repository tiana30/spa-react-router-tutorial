import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => (
    <nav className='bg-purple-600 p-4 text-white'>
    <ul className='flex space-x-4 justify-end'>
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/about">About</Link>
        </li>
        <li>
        <Link to="/contact">Contact</Link>
        </li>
    </ul>
    </nav>
)

export default Nav;