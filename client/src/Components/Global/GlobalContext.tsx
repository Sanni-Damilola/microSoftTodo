import React, { createContext } from "react";

interface user {
  email: string;
  name: string;
  _id: string;
}

interface userData {}

const allowAccess = createContext(null);

export const GlobalContext = () => {
  const [userData, setUserData] = React.useState(initialState);

  return <div>GlobalContext</div>;
};
