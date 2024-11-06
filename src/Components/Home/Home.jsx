import React from 'react';
import Banner from './Banner';
import Cards from './Cards';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet><title>Gadget | Home Page</title></Helmet>
            <Banner></Banner>
            <Cards></Cards>
            
        </div>
    );
};

export default Home;