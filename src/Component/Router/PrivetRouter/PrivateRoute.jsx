import React from "react";
import GetUser from "../../Pages/Shared/GetUser/GetUser";

const PrivateRoute = ({ children }) => {
  const { user } = GetUser;
  return <div></div>;
};

export default PrivateRoute;
