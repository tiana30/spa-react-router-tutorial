import React from 'react';
import Nav from './Nav';

const Layout = (props) =>  
<div className='bg-purple-500 border border-black m-5'>
{props.children}
</div>;


export {Layout, Nav};