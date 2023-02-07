import React from "react";
import { useRoutes } from "react-router-dom";
import AssignedToMe from "../Task/AssignedToMe";
import Importance from "../Task/Importance";
import MyDay from "../Task/MyDay";
import Planned from "../Task/Planned";
import Tasks from "../Task/Tasks";

const Routes = () => {
  const element = useRoutes([
    {
      path: "/task",
      element: <Tasks />,
    },
    {
      path: "/planned",
      element: <Planned />,
    },
    {
      path: "/assigned",
      element: <AssignedToMe />,
    },
    {
      path: "/importance",
      element: <Importance />,
    },
    {
      path: "/myday",
      element: <MyDay />,
    },
  ]);

  return element;
};

export default Routes;
