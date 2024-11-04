import React, { useEffect, useState } from 'react';
import Card from './Card';

const Cards = () => {
    const [cards, setCards] = useState([])
    useEffect(() => {
        fetch('../../../public/Laptop.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])
    return (
        <div className='flex flex-col px-16 pt-12 gap-5 pb-6 bg-slate-200'>
            <div className='text-center'> 
                <h1 className='text-4xl font-bold text-[#0B0B0B]'>Explore Cutting-Edge Gadgets</h1>
            </div>
            <div className='flex flex-row border-2 gap-4'>
                <div className='w-1/5 border bg-white rounded-2xl'> Item Section</div>
                <div className='w-4/5 grid grid-cols-3 gap-4 bg-slate-200 border rounded-2xl'>
                    {
                        cards.map((card, index) => <Card key={index} card={card}></Card>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Cards;