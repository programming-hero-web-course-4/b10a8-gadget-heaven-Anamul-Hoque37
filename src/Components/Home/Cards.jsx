import React, { useEffect, useState } from 'react';
import Card from './Card';

const Cards = () => {
    const [cards, setCards] = useState([])
    useEffect(() => {
        fetch('/Laptop.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, []);

    const [selectedCategory, setSelectedCategory] = useState('All Products');
    const filteredProducts = selectedCategory === 'All Products' ? cards : cards.filter(card => card.category === selectedCategory );
    

    return (
        <div className='flex flex-col px-16 pt-12 gap-5 pb-6 bg-slate-200'>
            <div className='text-center'>
                <h1 className='text-4xl font-bold text-[#0B0B0B]'>Explore Cutting-Edge Gadgets</h1>
            </div>
            <div className='flex flex-row border-2 gap-4'>
                <div className='flex flex-col p-5 gap-4 w-1/5 border bg-white rounded-2xl'>
                    <button onClick={() => setSelectedCategory('All Products')} className='btn'>All Product</button>
                    <button onClick={() => setSelectedCategory('Laptops')} className='btn'>Laptops</button>
                    <button onClick={() => setSelectedCategory('Mobiles')} className='btn'>Mobiles</button>
                    <button onClick={() => setSelectedCategory('Tablets')} className='btn'>Tablets</button>
                    <button onClick={() => setSelectedCategory('Air Pods')} className='btn'>Air Pods</button>
                </div>
                <div className='w-4/5 grid grid-cols-3 gap-4 bg-slate-200 border rounded-2xl'>
                    {
                        filteredProducts.length > 0 ? (filteredProducts.map((card, index) => <Card key={index} card={card}></Card>)) : ( <p className='text-3xl font-bold text-black bg-white rounded-3xl p-5'>No Product Available in this Category</p> )
                    }
                </div>
            </div>
        </div>
    );
};

export default Cards;