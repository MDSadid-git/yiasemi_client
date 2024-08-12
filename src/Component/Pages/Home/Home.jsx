import React from "react";
import Banner from "./Banner/Banner";
import FoodCategory from "./FoodCategory/FoodCategory";
import PopluerMenu from "./PopluerMenu/PopluerMenu";
import Featured from "./Featured/Featured";
import Testimonials from "./Testimonials/Testimonials";
import BistroBoss from "./BistroBoss/BistroBoss";

const Home = () => {
  return (
    <div>
      <Banner />
      <FoodCategory />
      <BistroBoss />
      <PopluerMenu />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
