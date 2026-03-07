// This file is for defining the routes of the application using react-router-dom.


import{createBrowserRouter} from "react-router";
import Login from "./features/pages/login";
import Register from "./features/pages/Register";

export const router = createBrowserRouter([
    {
        path: "/Login",
        element: <Login />      //  Login element will be rendered when the user navigates to /login
    },
    {
        path: "/Register",
        element: <Register />
    }
])