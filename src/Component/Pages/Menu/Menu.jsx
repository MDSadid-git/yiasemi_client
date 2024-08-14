import React from "react";
import { Helmet } from "react-helmet-async";
import PageCover from "../Shared/PageCover/PageCover";
import sectionImageHeader from "../../Assets/menu/banner3.jpg";
const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Yiasemi Lounge \ Menu</title>
      </Helmet>
      <PageCover coverImg={sectionImageHeader} />
    </div>
  );
};

export default Menu;
