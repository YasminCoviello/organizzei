import { useContext } from "react";
import { AuthContext } from "../contexts/auth-context";
import { Navigate } from "react-router-dom";

export function PrivateRoute({ children }) {
  const { user } = useContext(AuthContext);

  console.log(user);

  if(!user) return <Navigate to="/login" />
  return children;
}