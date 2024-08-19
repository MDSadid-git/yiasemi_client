import React, { useEffect, useState } from "react";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loding, setLoading] = useState(true);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
        setLoading(false);
      });
  });
  const PopluerMenu = menu.filter((item) => item.category === "popular");
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  const drinks = menu.filter((item) => item.category === "drinks");
  return [
    menu,
    PopluerMenu,
    dessert,
    soup,
    salad,
    pizza,
    offered,
    drinks,
    loding,
  ];
};

export default useMenu;
