import React, { useState } from "react";

const GetUser = () => {
  const { user, setUser } = useState({});
  console.log(user);

  return {
    user,
    setUser,
  };
};

export default GetUser;
