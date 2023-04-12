import { createBrowserRouter } from "react-router-dom";
import PasswordRecovery from "../pages/PasswordRecovery";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/password-recovery",
    element: <PasswordRecovery />,
  },
  {
    path: "/",
    element: <Home />,
  },
]);

export default router;
