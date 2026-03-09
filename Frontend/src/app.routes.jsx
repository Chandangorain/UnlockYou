// This file is for defining the routes of the application using react-router-dom.


import{createBrowserRouter} from "react-router-dom";
import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";

export const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />      //  Login element will be rendered when the user navigates to /login
    },
    {
        path: "/register",
        element: <Register />
    }
])