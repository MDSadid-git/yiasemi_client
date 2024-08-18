import React from "react";
import { Helmet } from "react-helmet-async";
import PageCover from "../Shared/PageCover/PageCover";
import sectionImageHeader from "../../Assets/menu/banner3.jpg";
import useMenu from "../../Hooks/useMenu";
import MenuCategory from "../Shared/MenuCategory/MenuCategory";
import SectionTitle from "../../ComponentShered/SectionTitile/SectionTitle";
import dessertImage from "../../Assets/menu/dessert-bg.jpeg";
import pizzaImage from "../../Assets/menu/pizza-bg.jpg";
import saladImage from "../../Assets/menu/salad-bg.jpg";
import soupImage from "../../Assets/menu/soup-bg.jpg";

const Menu = () => {
  const [dessert, soup, salad, pizza, offered] = useMenu();

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

      {/* dessert area start */}
      <MenuCategory
        allItem={dessert}
        img={dessertImage}
        menuDesctription={
          "      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, perspiciatis? Nulla aliquam placeat voluptas, facere molestias nisi ullam quibusdam quasi repudiandae hic officiis laborum praesentium reprehenderit veritatis dicta cum mollitia?"
        }
        menuTitle={"Dessert"}
      />

      {/* dessert area end */}

      {/* Pizza area start */}
      <MenuCategory
        allItem={pizza}
        img={pizzaImage}
        menuDesctription={
          "      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, perspiciatis? Nulla aliquam placeat voluptas, facere molestias nisi ullam quibusdam quasi repudiandae hic officiis laborum praesentium reprehenderit veritatis dicta cum mollitia?"
        }
        menuTitle={"pizza"}
      />
      {/* Pizza area end */}
      {/* salad area start */}
      <MenuCategory
        allItem={salad}
        img={saladImage}
        menuDesctription={
          "      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, perspiciatis? Nulla aliquam placeat voluptas, facere molestias nisi ullam quibusdam quasi repudiandae hic officiis laborum praesentium reprehenderit veritatis dicta cum mollitia?"
        }
        menuTitle={"salads"}
      />
      {/* salad area end */}
      {/* soup area start */}
      <MenuCategory
        allItem={soup}
        img={soupImage}
        menuDesctription={
          "      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, perspiciatis? Nulla aliquam placeat voluptas, facere molestias nisi ullam quibusdam quasi repudiandae hic officiis laborum praesentium reprehenderit veritatis dicta cum mollitia?"
        }
        menuTitle={"soups"}
      />
      {/* soup area end */}
    </div>
  );
};

export default Menu;
