import React from 'react';
import { Layout } from '../layout';

const Contact = () => (
    <Layout>
        <h1 className='text-2xl'>This is the Contact page</h1>
        <form className='flex flex-col space-y-5 w-1/2 m-auto'>
            <div className='flex flex-col text-left '>
                <label>Name:</label>
                <input type="text" className='p-2 rounded'></input>
            </div>
            <div className='flex flex-col text-left'>
                <label>Email:</label>
                <input type="text" className='p-2 rounded'></input>
            </div>
            <div className='flex flex-col text-left'>
                <label>Message:</label>
                <textarea className='p-2 rounded'></textarea>
            </div>
            
            
        </form>
    </Layout>
);

export default Contact;