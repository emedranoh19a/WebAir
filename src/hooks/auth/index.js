import { createContext, useContext, useMemo } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import api from "services/api/login";

const UserContext = createContext();

export function UserProvider({ children }) {
  const navigate = useNavigate();
  const [cookies, setCookies, removeCookie] = useCookies();

  async function login({ email, password }) {
    const response = await api.post("/auth", {
      email: email,
      password: password,
    });
    //TODO we are still missing the credentials verification. There is no security in here
    setCookies("token", response.data.token); // your token
    setCookies("expirationDate", response.data.expirationDate); // optional data

    navigate("/");
  }

  function logout() {
    ["token"].forEach((obj) => removeCookie(obj)); // remove data save in cookies
    navigate("/login");
  }

  const value = useMemo(
    () => ({
      cookies,
      login,
      logout,
    }),
    [cookies]
    // [cookies]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

//Esto debería ser opcional.
export function useAuth() {
  return useContext(UserContext);
}
