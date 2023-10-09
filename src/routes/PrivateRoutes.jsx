import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function PrivateRoutes({ children }) {
  const { token } = useAuth();

  return <> {!token ? <Navigate to="/auth/sign_in" /> : <>{children}</>}</>;
}
