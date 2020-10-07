import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

const Layout = (props) =>  
<div class='flex-auto text-center p-5 h-screen'>
{props.children}
</div>;


export {Layout, Nav, Footer};