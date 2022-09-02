import { createContext } from "react";

const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {
  return <AuthContextProvider>{children}</AuthContextProvider>;
};

export default AuthContextProvider;
