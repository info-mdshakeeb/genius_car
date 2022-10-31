import { createBrowserRouter } from "react-router-dom";
import ErrorElement from "../Components/ErrorElement";
import Home from "../Components/Home";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";
import Layout from "../Layout/Layout";

export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Layout />,
            errorElement: <ErrorElement />,
            children: [
                { path: '/', element: <Home /> },
                { path: '/home', element: <Home /> },
                { path: '/login', element: <Login /> },
                { path: '/signUp', element: <SignUp /> },
            ]
        },
    ]
)