import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import useJWT from "../hooks/useJWT";

export default function AuthorRoute({ children }) {
  const { roleToken } = useAuth();
  const { decode } = useJWT();

  const decodedToken = decode(roleToken);
  return (
    <>
      {" "}
      {decodedToken.role != "Escritor" ? (
        <Navigate to="/system/main" />
      ) : (
        <>{children}</>
      )}
    </>
  );
}
