import { createBrowserRouter } from "react-router-dom";
import Root from "../mainLayOut/Root";
import Error from "../pages/Error";
import HOme from "../pages/HOme";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";
import TouristsSpot from "../pages/TouristsSpot";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement:<Error></Error>,
        element: <Root></Root>,
        children:[
            {
                path : '/',
                element:<HOme></HOme>
            },
            {
                path : '/login',
                element:<LogIn></LogIn>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path: '/TouristsSpot',
                element:<TouristsSpot></TouristsSpot>,
            }
        ]
    },
]);

export default router;