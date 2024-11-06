import React from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast } from 'react-toastify';

const Cart = ({ cart , cartList }) => {
    const handleDelete = () => {
        const updateCartList = cartList.filter(item=>item.product_id !== product_id);
        localStorage.setItem('card-list', JSON.stringify(updateCartList));
        toast('Deleted this item')
    }
    const {product_image,product_title,description,price, product_id} = cart
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
                <button onClick={()=>handleDelete('id')} className='text-3xl items-center text-yellow-500 font-bold'><RiDeleteBin6Line /></button>
            </div>
        </div>
    );
};

export default Cart;