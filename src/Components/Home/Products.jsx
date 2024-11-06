import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { addToStoreCardList, addToStoreWishList } from '../Utilities/addToStore';

const Products = () => {

    const { product_id } = useParams();
    const data = useLoaderData();
    const id = parseInt(product_id)
    const product = data.find(product => product.product_id === id)
    const { product_image, product_title, price, description, Specification, rating, availability } = product

    const handleMarkAsCard = (id) => {
        addToStoreCardList(id);
    }
    const handleMarkAsWish = (id) =>{
        addToStoreWishList(id);
    }

    return (
        <div className='flex flex-col relative'>
            <div className='flex z-10 flex-col text-center h-72 bg-[#9538E2]'>
                <h1 className='text-3xl font-bold text-[#FFFFFF]'>Product Details</h1>
                <p className='text-base w-3/4 mx-auto font-normal text-[#FFFFFF]'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className='flex border-2 mt-[-160px] rounded-2xl gap-5 static z-30 bg-white w-3/4 mx-auto p-8'>
                <div className='bg-zinc-200 rounded-2xl'>
                    <img className='h-full w-full' src={product_image} alt="" />
                </div>
                <div className='bg-zinc-200 flex flex-col gap-2 rounded-2xl p-4'>
                    <h1 className='text-3xl font-semibold text-[#09080F]'>{product_title}</h1>
                    <p className='text-xl font-semibold text-[#09080FCC]'>{price}</p>
                    <button className='text-2xl px-5 rounded-3xl font-semibold border-2 border-green-600 text-green-600 bg-[#309C081A]'>{availability === true ? "In Stock" : "Out of Stock"}</button>
                    <p className='text-lg font-normal text-[#09080F99]'>{description}</p>
                    <p className='text-lg font-bold text-[#09080F]'>Specification:<ol className='text-sm font-normal'>{Specification.map(item=><li> {item}</li>)}</ol></p>
                    <p className='text-lg font-bold text-[#09080F]'>Rating:{rating}</p>
                    <div className='flex gap-4'>
                        <button onClick={()=>{handleMarkAsCard(id)}} className='flex rounded-full gap-4 p-3 text-lg font-bold text-[#FFFFFF] bg-[#9538E2]'>Add To Card <BsCart3 /></button>
                        <button onClick={()=>{handleMarkAsWish(id)}} className='text-lg p-4 border-2 rounded-full font-bold bg-[#FFFFFF] text-[#3A3A3A]'><FaRegHeart /></button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Products;