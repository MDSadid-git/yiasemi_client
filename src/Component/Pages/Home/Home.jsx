import React from "react";
import Banner from "./Banner/Banner";
import FoodCategory from "./FoodCategory/FoodCategory";
import PopluerMenu from "./PopluerMenu/PopluerMenu";
import Featured from "./Featured/Featured";
import Testimonials from "./Testimonials/Testimonials";
import YiasemiLounge from "./BistroBoss/YiasemiLounge";
import { Helmet } from "react-helmet-async";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const user = useSelector((state) => state.user);
  console.log(user);

  return (
    <div>
      <Helmet>
        <title>Yiasemi Lounge \ Home</title>
      </Helmet>
      <Banner />
      <FoodCategory />
      <YiasemiLounge />
      <PopluerMenu />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
