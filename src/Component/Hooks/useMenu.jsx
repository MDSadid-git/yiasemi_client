import React, { useEffect, useState } from "react";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loding, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:8000/api/v1/menus/alldata")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data.allMenu);
        setLoading(false);
      });
  });

  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  const drinks = menu.filter((item) => item.category === "drinks");
  const PopluerMenu = menu.filter((item) => item.category === "popular");

  return {
    menu,
    PopluerMenu,
    dessert,
    soup,
    salad,
    pizza,
    offered,
    drinks,

    loding,
  };
};

export default useMenu;
