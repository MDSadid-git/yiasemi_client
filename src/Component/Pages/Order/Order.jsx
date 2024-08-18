import React, { useState } from "react";
import orderCoverImg from "../../Assets/shop/banner2.jpg";
import { Helmet } from "react-helmet-async";
import PageCover from "../Shared/PageCover/PageCover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import FoodCard from "../Shared/FoodCard/FoodCard";

const Order = () => {
  const [tabsIndex, setTabsIndex] = useState(0);
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
            <Tab>Title 1</Tab>
            <Tab>Title 2</Tab>
          </TabList>

          <TabPanel>
            <FoodCard />
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
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
