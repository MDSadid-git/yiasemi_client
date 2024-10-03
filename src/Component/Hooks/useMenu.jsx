import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useMenu = () => {
  // const [menu, setMenu] = useState([]);
  // const [loding, setLoading] = useState(true);
  // useEffect(() => {
  //   fetch("http://localhost:8000/api/v1/menus/alldata")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMenu(data.data);
  //       setLoading(false);
  //     });
  // });
  const axiosSecure = useAxiosSecure();
  const {
    data: menu = [],
    refetch,
    isLoading: loding,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axiosSecure.get("/menus/alldata");
      return res.data;
    },
  });

  const dessert = menu?.data?.filter((item) => item.category === "dessert");
  const soup = menu?.data?.filter((item) => item.category === "soup");
  const salad = menu?.data?.filter((item) => item.category === "salad");
  const pizza = menu?.data?.filter((item) => item.category === "pizza");
  const offered = menu?.data?.filter((item) => item.category === "offered");
  const drinks = menu?.data?.filter((item) => item.category === "drinks");
  const PopluerMenu = menu?.data?.filter((item) => item.category === "popular");

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
    refetch,
  };
};

export default useMenu;
