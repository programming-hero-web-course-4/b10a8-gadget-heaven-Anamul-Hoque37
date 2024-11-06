
import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ card }) => {
    const { product_id, product_image, product_title, price } = card
    return (
        <div className='bg-white p-4 flex flex-col gap-5 rounded-2xl'>
            <div className='h-40 rounded-2xl text-center justify-center items-center'>
                <img className='w-full h-full rounded-2xl' src={product_image} alt="" />
            </div>
            <div>
                <h1 className='text-2xl font-semibold text-[#09080F]'>{product_title}</h1>
                <p className='text-xl font-medium text-[#09080F99]'>{price}</p>
                <Link to={`/cards/${product_id}`}>
                    <button className='text-lg font-semibold text-[#9538E2] p-2 px-4 bg-teal-300 rounded-full'>View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Card;