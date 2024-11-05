import React from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";

const Cart = ({cart}) => {
    const handleDelete =() => {
        localStorage.removeItem('card-list')
    }
    const {product_image,product_title,description,price} = cart
    return (
        <div className='flex border-2 gap-5 p-2 items-center justify-between rounded-2xl'>
            <div className='max-h-44 max-w-44 rounded-2xl'>
                <img className='h-full w-full rounded-2xl' src={product_image} alt="" />
            </div>
            <div className='flex flex-col justify-around'>
                <h1 className='text-xl font-semibold'>{product_title}</h1>
                <p className='text-lg font-medium'>{description}</p>
                <p className='text-xl font-bold'>{price}</p>
            </div>
            <div>
                <button onClick={handleDelete} className='text-3xl items-center text-yellow-500 font-bold'><RiDeleteBin6Line /></button>
            </div>
        </div>
    );
};

export default Cart;