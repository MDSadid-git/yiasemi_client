import React, { useState } from "react";
import orderCoverImg from "../../Assets/shop/banner2.jpg";
import { Helmet } from "react-helmet-async";
import PageCover from "../Shared/PageCover/PageCover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import FoodCard from "../Shared/FoodCard/FoodCard";
import useMenu from "../../Hooks/useMenu";
import { useParams } from "react-router-dom";

const Order = () => {
  const categorys = ["dessert", "soup", "salad", "pizza", "drinks"];
  const { category } = useParams();
  const initialIndex = categorys.indexOf(category);
  const { dessert, soup, salad, pizza, drinks } = useMenu();
  const [tabsIndex, setTabsIndex] = useState(initialIndex);
  console.log(salad);

  return (
    <div>
      <Helmet>
        {" "}
        <title>Yiasemi Lounge \ Order Food</title>
      </Helmet>
      <PageCover
        coverImg={orderCoverImg}
        menuTitle={"Order Foods"}
        menuDesctription={"Would You Like to Try A Dish"}
      />
      {/* order tabs area start */}
      <section className="max-w-screen-xl mx-auto my-5">
        <Tabs
          defaultIndex={tabsIndex}
          onSelect={(index) => setTabsIndex(index)}
        >
          <TabList>
            <Tab>Dessert</Tab>
            <Tab>Soup</Tab>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Drinks</Tab>
          </TabList>

          <TabPanel>
            <div className="flex justify-between">
              <FoodCard items={dessert} />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex justify-between">
              <FoodCard items={soup} />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex justify-between">
              <FoodCard items={salad} />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex justify-between">
              <FoodCard items={pizza} />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex justify-between">
              <FoodCard items={drinks} />
            </div>
          </TabPanel>
        </Tabs>
      </section>
      {/* order tabs area end */}
      {/* order tabs area start */}
      {/* order tabs area end */}
      {/* order tabs area start */}
      {/* order tabs area end */}
      {/* order tabs area start */}
      {/* order tabs area end */}
      {/* order tabs area start */}
      {/* order tabs area end */}
    </div>
  );
};

export default Order;
