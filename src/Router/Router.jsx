import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Layout from "../Layout/Layout";
import Login from "../Pages/SignIn/Login";
import Register from "../Pages/SignUp/Register";
import Dashboard from "../Layout/Dashboard";
import Profile from "../Profile/Profile";
import CreateTask from "../CreateTask/CreateTask";
import AllTask from "../AllTask/AllTask";
import Private from "./Private";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <Private><Dashboard></Dashboard></Private>,
        children: [
            {
                path: 'profile',
                element: <Profile></Profile>
            },
            {
                path: "create",
                element: <CreateTask></CreateTask>
            },
            {
                path: "tasks",
                element: <AllTask></AllTask>
            }
        ]
    }
])


export default router