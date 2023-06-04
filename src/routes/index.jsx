import { createBrowserRouter } from "react-router-dom";
import PasswordRecovery from "../pages/PasswordRecovery";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import { DateProvider } from "../contexts/date-context";

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
    element: (
      <DateProvider>
        <Home />,
      </DateProvider>
    )},
]);

export default router;
