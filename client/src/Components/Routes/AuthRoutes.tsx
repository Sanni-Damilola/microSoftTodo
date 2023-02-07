import React from "react";
import { useRoutes } from "react-router-dom";
import SignUp from "../Auth/SignUp";
import SignIn from "../Auth/SignIn";
import Body from "../Body/Body";

const AuthRoutes = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <SignUp />,
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
  ]);

  return element;
};

export default AuthRoutes;
