import React, { useState } from "react";

const GetUser = () => {
  const { user, setUser } = useState({});

  return {
    user,
    setUser,
  };
};

export default GetUser;
