import React, { useEffect, useState } from 'react';
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { getStoreCardList, getStoreWishList } from './Utilities/addToStore';

const NavBar = () => {
    const [count, setCount] = useState([])
    useEffect(()=>{
        const allCartList = getStoreCardList();
        setCount(allCartList);
    },[]);
    const [wishCount, setWishCount] = useState([])
    useEffect(()=>{
        const allWishList = getStoreWishList();
        setWishCount(allWishList);
    },[])
    const [activeSection, setActiveSection] = useState('/');
    const Links = <>
        <li><NavLink to="/" onClick={() => setActiveSection('/')}>Home</NavLink></li>
        <li><NavLink onClick={() => setActiveSection('statistics')} to="/statistics">Statistics</NavLink></li>
        <li><NavLink onClick={() => setActiveSection('dashboard')} to="/dashboard">Dashboard</NavLink></li>
        <li><NavLink onClick={() => setActiveSection('Contact')} to="/Contact">Contact Us</NavLink></li>
    </>
    return (
        <div className={`${activeSection === '/' ? "navbar py-6 bg-[#9538E2] rounded-t-xl text-white": "navbar py-6 bg-base-100"}`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {Links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Links}
                </ul>
            </div>
            <div className="navbar-end gap-3">
                <div className='flex flex-col items-center justify-end'>{count.length}
                <div className='text-2xl p-4 bg-white border rounded-full text-black'><BsCart3 /></div>
                </div>
                <div className='flex flex-col items-center justify-center'>{wishCount.length}
                <div className='text-2xl p-4 bg-white border rounded-full text-black'><FaRegHeart /></div>
                </div>
            </div>
        </div>
    );
};
export default NavBar;