import React from "react";
import { Helmet } from "react-helmet-async";
import PageCover from "../Shared/PageCover/PageCover";
import sectionImageHeader from "../../Assets/menu/banner3.jpg";
import PopluerMenu from "../Home/PopluerMenu/PopluerMenu";
const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Yiasemi Lounge \ Menu</title>
      </Helmet>
      <PageCover
        coverImg={sectionImageHeader}
        menuTitle={"Our Menu"}
        menuDesctription={"Would You Like to Try A Dish"}
      />
      <PopluerMenu />
    </div>
  );
};

export default Menu;
