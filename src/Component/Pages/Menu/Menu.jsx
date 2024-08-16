import React from "react";
import { Helmet } from "react-helmet-async";
import PageCover from "../Shared/PageCover/PageCover";
import sectionImageHeader from "../../Assets/menu/banner3.jpg";
import useMenu from "../../Hooks/useMenu";
import MenuCategory from "../Shared/MenuCategory/MenuCategory";
import SectionTitle from "../../ComponentShered/SectionTitile/SectionTitle";
const Menu = () => {
  const [menu] = useMenu();
  const PopluerMenu = menu.filter((item) => item.category === "popular");
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Yiasemi Lounge \ Menu</title>
      </Helmet>
      {/* header section start */}
      <PageCover
        coverImg={sectionImageHeader}
        menuTitle={"Our Menu"}
        menuDesctription={"Would You Like to Try A Dish"}
      />
      {/* header section end  */}

      {/* todays Ours Offered start */}
      <SectionTitle heading="Don't Miss" subHeading="Todays Offered" />
      <MenuCategory allItem={offered} />
      {/* todays ours area end */}
    </div>
  );
};

export default Menu;
