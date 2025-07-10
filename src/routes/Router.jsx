import { createBrowserRouter } from "react-router-dom";
import LazyComponent from "./LazyComponent";
import AppLayout from "../layout/Layout";
// import ErrorScreen from "../pages/error/ErrorScreen";
// import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AppLayout />
    ),
    errorElement: <div>Something went wrong</div>,
    children: [
      // dashboard route
      {
        path: "/dashboard",
        element: <LazyComponent path="/dashboard" />,
      },
      {
        path: "/notfound",
        element: <LazyComponent path="/notfound" />,
      },
    ],
  },

]);
