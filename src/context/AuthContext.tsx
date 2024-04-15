import React, { useState, createContext } from "react";

export const AuthContext = createContext({
  user: undefined,
  login: (userDetails: any) => {},
  logout: () => {},
});

export function AuthProvider(props: any) {
  const { children } = props;
  const [user, setUser] = useState(undefined);

  const login = (userDetails: any) => {
    setUser(userDetails);
  };

  const logout = () => {
    setUser(undefined);
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
