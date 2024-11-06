import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';

const Root = () => {
    return (
        <div className='max-w-6xl m-auto'>
            <Helmet>
                <title>Gadget</title>
            </Helmet>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer
            position="top-center"
            />
        </div>
        
    );
};

export default Root;