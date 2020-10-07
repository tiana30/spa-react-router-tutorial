import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = () => (
    <nav className='bg-purple-600 p-4 text-white'>
    <ul className='flex space-x-4 justify-end'>
        <li>
        <NavLink exact to="/" activeClassName="border-b-2 border-white">Home</NavLink>
        </li>
        <li>
        <NavLink exact to="/about" activeClassName="border-b-2 border-white">About</NavLink>
        </li>
        <li>
        <NavLink exact to="/contact" activeClassName="border-b-2 border-white">Contact</NavLink>
        </li>
    </ul>
    </nav>
)

export default Nav;