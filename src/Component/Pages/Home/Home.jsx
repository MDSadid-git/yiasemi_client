import React from 'react';
import Banner from './Banner/Banner';
import FoodCategory from './FoodCategory/FoodCategory';
import PopluerMenu from './PopluerMenu/PopluerMenu';

const Home = () => {
    return (
        <div>
            <Banner />
            <FoodCategory />
            <PopluerMenu />
        </div>
    );
};

export default Home;