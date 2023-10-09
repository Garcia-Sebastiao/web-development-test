import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

function AuthProvider({ children }) {
  const [roleToken, setRoleToken] = useState(
    localStorage.getItem("role_token") || null
  );
  const [token, setToken] = useState(
    localStorage.getItem("access_token") || null
  );

  function signIn(token, role_token) {
    setToken(token);
    setRoleToken(role_token);

    localStorage.setItem("access_token", token);
    localStorage.setItem("role_token", role_token);
  }

  function logOut() {
    setToken(null);
    setRoleToken(null);
    localStorage.removeItem("access_token");
    localStorage.removeItem("role_token");
  }

  return (
    <AuthContext.Provider value={{ token, roleToken, signIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
