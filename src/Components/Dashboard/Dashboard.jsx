import React, { useEffect, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import { getStoreCardList, getStoreWishList } from '../Utilities/addToStore';
import Cart from './Cart';
import Wishlist from './Wishlist';
import { toast } from 'react-toastify';

const Dashboard = () => {
    const [cartList, setCartList] = useState([])
    const allCarts = useLoaderData();
    useEffect(()=>{
        const storedCartList = getStoreCardList();
        const storedCartListInt = storedCartList.map(id => parseInt(id));
        const allCartList = allCarts.filter(cart => storedCartListInt.includes(cart.product_id));
        setCartList(allCartList)
    },[]);
    const [wishList, setWishList] = useState([])
    const allWishLists = useLoaderData();
    useEffect(()=>{
        const storedWishList = getStoreWishList();
        const storedWishListInt = storedWishList.map(id => parseInt(id));
        const allWishList = allWishLists.filter(wish => storedWishListInt.includes(wish.product_id));
        setWishList(allWishList)
    },[]);
    const [isActive, setIsActive] = useState({
        available: true,
        Status: "cart"
    });
    const handleSortByPrice = () =>{
        const sortedCartList = [...cartList].sort((a,b) => b.price - a.price)
        setCartList(sortedCartList);
        toast('Successfully Sorted')
    }
    const handlePurchase =() => {
        localStorage.removeItem('card-list')
        toast('Welcome to Purchases')
    }
    const handleIsActiveState = (status) => {
        if (status == "cart") {
            setIsActive({
                available: true,
                status: "cart"
            })
        } else {
            setIsActive({
                available: false,
                status: "wishlist"
            })
        }
    }

    return (
        <div className='flex flex-col'>
            <div className='flex flex-col gap-5 justify-center items-center py-6 bg-[#9538E2]'>
                <h1 className='text-3xl font-bold text-[#FFFFFF]'>Dashboard</h1>
                <p className='text-base w-9/12 text-center font-normal text-[#FFFFFF]'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className="flex justify-end items-center">
                    <div className="flex gap-3">
                        <button onClick={() => handleIsActiveState("cart")} className={`${isActive.available ? "btn bg-yellow-300" : "btn"}`}>Cart</button>
                        <button onClick={() => handleIsActiveState("wishlist")} className={`${isActive.available ? "btn" : "btn bg-yellow-300"}`}>Wishlist</
                        button>
                    </div>
                </div>
            </div>
            <div className={`${isActive.available ? "block" : "hidden"}`}>
                <div className="flex py-4 justify-between w-4/5 mx-auto items-center">
                    <h1 className='text-3xl font-bold '>Cart: {cartList.length}</h1>
                    <div className='flex gap-3 items-center'>
                        <p className='text-2xl font-bold text-[#0B0B0B]'>Total Cost: </p>
                        <button onClick={handleSortByPrice} className='text-lg font-medium border p-2 px-4 rounded-3xl bg-[#FFFFFF] text-[#9538E2]'>Sort by Price</button>
                        <button onClick={handlePurchase} className='text-lg font-medium p-2 px-4 rounded-3xl bg-[#9538E2] text-[#FFFFFF]'>Purchase</button>
                    </div>
                </div>
                <div className='flex flex-col w-4/5 mx-auto gap-6'>
                {
                    cartList.map((cart, index) =><Cart key={index} cartList={cartList} cart={cart}></Cart>)
                    
                }
                </div>
            
            </div>
            <div className={`${isActive.available ? "hidden" : "flex flex-col justify-start items-start gap-6"}`}>
                <div className="text-left py-4 text-3xl font-bold">
                    <h1>Wishlist</h1>
                </div>
                <div className='grid grid-cols-1 w-full gap-6'>
                    {
                        wishList.map((wish, index) =><Wishlist key={index} wish={wish}></Wishlist>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Dashboard;