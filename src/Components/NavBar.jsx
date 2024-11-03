import React from 'react';
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    const Links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/Statistics">Statistics</NavLink></li>
        <li><NavLink to="/Dashboard">Dashboard</NavLink></li>
    </>
    return (
        <div className="navbar py-6 bg-base-100">
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
                <div className='text-2xl'><BsCart3 /></div>
                <div className='text-2xl'><FaRegHeart /></div>
            </div>
        </div>
    );
};

export default NavBar;