import React from "react";
import PageCover from "../PageCover/PageCover";

const MenuCategory = () => {
  return (
    <div>
      <PageCover
        coverImg={img}
        menuTitle={menuTitle ? menuTitle : ""}
        menuDesctription={menuDesctription ? menuDesctription : ""}
      />
    </div>
  );
};

export default MenuCategory;
