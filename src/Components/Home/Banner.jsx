import React from 'react';

const Banner = () => {
    return (
        <div className='items-center mx-8 md:mx-12 relative'>
            <div className='flex flex-col z-10 justify-start h-[600px] gap-8 items-center rounded-2xl p-10 bg-[#9538E2]'>
                <h1 className='text-5xl text-center text-[#FFFFFF] font-bold'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                <p className='text-xl text-center text-[#FFFFFF] font-medium'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <button className='text-xl font-bold p-4 rounded-full bg-[#FFFFFF] text-[#9538E2]'>Shop Now</button>
            </div>
            <div className='rounded-2xl p-3 z-30 w-[400px] md:w-[580px] lg:w-[800px] static mt-[-250px] ml-[140px] border bg-transparent'>
                <img className='rounded-2xl w-full' src="https://i.ibb.co.com/7vNjP3q/banner.jpg" alt="" />
            </div>
        </div>

    );
};

export default Banner;