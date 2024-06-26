import { Navigate, createBrowserRouter } from "react-router-dom";
import RootLayout from "./root";
import DriversPage from "../pages/drivers";
import VehiclesPage from "../pages/vehicles";
import ErrorPage from "../pages/error";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Navigate to="/drivers" replace/>
      },
      {
        path: '/drivers',
        element: <DriversPage/>
      },
      {
        path: '/vehicles',
        element: <VehiclesPage/>
      }
    ]
  }
])

