import React, { useContext, useMemo } from "react";
import useLocalStorage from "../hooks/use-localStorage";

const AuthContext = React.createContext({
  isLoggedIn: false,
  token: "",
  onLogout: () => {},
  onLogin: (token) => {},
});

export const AuthContextProvider = (props) => {
  const [token, setToken] = useLocalStorage("token", null);
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage("isLoggedIn", null);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const storedUserLoggedInInfomattion = localStorage.getItem("isLoggedIn");

  //   if (storedUserLoggedInInfomattion === "1") {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  const logoutHandler = () => {
    setToken(null);
    setIsLoggedIn(null);
  };

  const loginHandler = (data) => {
    setToken(data);
    setIsLoggedIn(1);
  };

  const value = useMemo(
    () => ({
      isLoggedIn: isLoggedIn,
      token: token,
      onLogin: loginHandler,
      onLogout: logoutHandler,
    }),
    [isLoggedIn, token]
  );

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
