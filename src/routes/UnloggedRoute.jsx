import { useContext } from "react";
import { AuthContext } from "../contexts/auth-context";
import { Navigate } from "react-router-dom";

export function UnloggedRoute({ children }) {
  const { user } = useContext(AuthContext);

  if(user) return <Navigate to="/" />
  return children;
}