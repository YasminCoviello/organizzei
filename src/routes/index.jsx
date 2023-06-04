import { createBrowserRouter } from "react-router-dom";
import PasswordRecovery from "../pages/PasswordRecovery";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import { DateProvider } from "../contexts/date-context";
import { PrivateRoute } from "./PrivateRoute";
import { UnloggedRoute } from "./UnloggedRoute";
import UpdatePassword from "../pages/UpdatePassword";

const router = createBrowserRouter([
  {
    path: "/register",
    element: (
      <UnloggedRoute>
        <Register />
      </UnloggedRoute>
    )
  },
  {
    path: "/login",
    element: (
      <UnloggedRoute>
        <Login />
      </UnloggedRoute>
    )
  },
  {
    path: "/password-recovery",
    element: (
      <UnloggedRoute>
        <PasswordRecovery />,
      </UnloggedRoute>
    ) 
  },
  {
    path: "/update-password",
    element: (
      <UnloggedRoute>
        <UpdatePassword />,
      </UnloggedRoute>
    ) 
  },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <DateProvider>
          <Home />,
        </DateProvider>
      </PrivateRoute>
    )},
]);

export default router;
