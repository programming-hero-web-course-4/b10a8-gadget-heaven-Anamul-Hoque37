import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Products = () => {

    const {product_id} = useParams();
    const data = useLoaderData();
    const id = parseInt(product_id)
    const product = data.find(product => product.product_id === id)
    const {product_image,product_title,price,description,Specification,rating,availability}=product
    console.log(product)

    return (
        <div>
            <div className='flex flex-col text-center h-48 bg-[#9538E2]'>
                <h1 className='text-3xl font-bold text-[#FFFFFF]'>Product Details</h1>
                <p className='text-base font-normal text-[#FFFFFF]'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div>
                <div>
                    <img src={product_image} alt="" />
                </div>
                <div>
                    <h1>{product_title}</h1>
                    <p>{price}</p>
                    <button>{availability}</button>
                    <p>{description}</p>
                    <p>{Specification}</p>
                    <p>Rating:{rating}</p>

                </div>
            </div>
        </div>
    );
};

export default Products;