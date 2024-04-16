import React, { useState, createContext } from "react";
import type { userDetailsType } from "../utils/userDB";

type ProviderProps = {
  user: userDetailsType | null;
  login: (userDetails: userDetailsType) => void;
  logout: () => void;
};

export const AuthContext = createContext<ProviderProps>({
  user: null,
  login: (userDetails: userDetailsType) => {},
  logout: () => {},
});

export function AuthProvider(props: any) {
  const { children } = props;
  const [user, setUser] = useState<userDetailsType | null>(null);

  const login = (userDetails: userDetailsType) => {
    setUser(userDetails);
  };

  const logout = () => {
    setUser(null);
  };

  const valueContext = {
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
  );
}
