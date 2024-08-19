import React, { useState } from "react";
import orderCoverImg from "../../Assets/shop/banner2.jpg";
import { Helmet } from "react-helmet-async";
import PageCover from "../Shared/PageCover/PageCover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import FoodCard from "../Shared/FoodCard/FoodCard";
import useMenu from "../../Hooks/useMenu";

const Order = () => {
  const [tabsIndex, setTabsIndex] = useState(0);
  const [dessert, soup, salad, pizza, drinks] = useMenu();
  return (
    <div>
      <Helmet>
        {" "}
        <title>Yiasemi Lounge \ Order</title>
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
