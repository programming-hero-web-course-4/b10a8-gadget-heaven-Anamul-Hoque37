import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DashBanner = () => {
    const [activeSection, setActiveSection] = useState('/dashboard/cart');
    return (

        // <div className={`${activeSection === '/' ? "navbar py-6 bg-[#9538E2] rounded-t-xl text-white": "navbar py-6 bg-base-100"}`}></div>
        <div className='flex flex-col gap-5 justify-center items-center py-6 bg-[#9538E2]'>
            <h1 className='text-3xl font-bold text-[#FFFFFF]'>Dashboard</h1>
            <p className='text-base w-9/12 text-center font-normal text-[#FFFFFF]'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            <div className='flex flex-row justify-center items-center'>
                <button className={activeSection ? 'text-lg p-1 px-5 font-extrabold rounded-full bg-white' :'text-lg p-3 px-5 font-extrabold text-[#FFFFFF]'}><Link to="/dashboard/cart" onClick={() => setActiveSection('/dashboard/cart')}>Cart</Link></button>
                <button className={activeSection ? 'text-lg p-1 px-5 font-extrabold rounded-full bg-white' :'text-lg p-3 px-5 font-extrabold text-[#FFFFFF]'}><Link to="/dashboard/wishlist" onClick={() => setActiveSection('/dashboard/wishlist')}>Wishlist</Link></button>
            </div>
        </div>
    );
};

export default DashBanner;