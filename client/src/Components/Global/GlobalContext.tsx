import React, { createContext, PropsWithChildren } from "react";

interface user {
  email: string;
  name: string;
  _id: string;
}

interface userData {
  userData: user;
  setUserData: React.Dispatch<React.SetStateAction<user>>;
}

export const allowAccess = createContext<userData | null>(null);

export const GlobalContext: React.FC<PropsWithChildren> = ({ children }) => {
  const [userData, setUserData] = React.useState({} as user);

  return (
    <allowAccess.Provider
      value={{
        userData,
        setUserData,
      }}
    >
      {children}
    </allowAccess.Provider>
  );
};
