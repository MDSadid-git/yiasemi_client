import React from 'react';
import Banner from './Banner/Banner';
import FoodCategory from './FoodCategory/FoodCategory';
import PopluerMenu from './PopluerMenu/PopluerMenu';
import Featured from './Featured/Featured';

const Home = () => {
    return (
        <div>
            <Banner />
            <FoodCategory />
            <PopluerMenu />
            <Featured />
        </div>
    );
};

export default Home;