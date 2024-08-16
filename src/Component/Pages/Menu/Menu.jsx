import React from "react";
import { Helmet } from "react-helmet-async";
import PageCover from "../Shared/PageCover/PageCover";
import sectionImageHeader from "../../Assets/menu/banner3.jpg";
// import PopluerMenu from "../Home/PopluerMenu/PopluerMenu";
import useMenu from "../../Hooks/useMenu";
const Menu = () => {
  const [menu] = useMenu();
  const PopluerMenu = menu.filter((item) => item.category === "popular");
  // const dessert = menu.filter((item) => item.category === "dessert");
  // const soup = menu.filter((item) => item.category === "soup");
  // const salad = menu.filter((item) => item.category === "salad");
  // const pizza = menu.filter((item) => item.category === "pizza");
  // const offered = menu.filter((item) => item.category === "offered");

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
      {/* <PopluerMenu /> */}
    </div>
  );
};

export default Menu;
