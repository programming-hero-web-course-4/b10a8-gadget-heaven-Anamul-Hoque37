import React from 'react';

const Footer = () => {
    return (
        <footer className="py-20 border-2 px-28">
            <div className='flex flex-col items-center justify-center pb-12 gap-4'>
                <h1 className='text-3xl font-bold'>Gadget Heaven</h1>
                <p className='text-base font-medium'>Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <div className='footer justify-between'>
                <nav className='flex flex-col justify-center items-center'>
                    <h6 className="footer-title text-[#09080F]">Services</h6>
                    <a className="link link-hover">Product Support</a>
                    <a className="link link-hover">Order Tracking</a>
                    <a className="link link-hover">Shipping & Delivery</a>
                    <a className="link link-hover">Returns</a>
                </nav>
                <nav className='flex flex-col justify-center items-center'>
                    <h6 className="footer-title text-[#09080F]">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav className='flex flex-col justify-center items-center'>
                    <h6 className="footer-title text-black">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;