import { createBrowserRouter } from "react-router-dom";
import Root from "../mainLayOut/Root";
import Error from "../pages/Error";
import HOme from "../pages/HOme";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";
import TouristsSpot from "../pages/TouristsSpot";
import Private from "../privateRoutes/PrivateRoutes";
import CardDetails from "../pages/CardDetails";
import AllSpots from "../pages/AllSpots";
import MyListPage from "../pages/MyListPage";
import UpdateData from "../pages/UpdateData";
import Bangladesh from "../country/Bangladesh";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <Error></Error>,
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <HOme></HOme>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/TouristsSpot',
                element: <Private><TouristsSpot></TouristsSpot></Private>,
            },
            {
                path: '/spots/:id',
                element: <Private><CardDetails></CardDetails></Private>,
                loader: ({ params }) => fetch(`https://server-site-mu-seven.vercel.app/spots/${params.id}`)
            },
            {
                path: '/AllTourists',
                element: <AllSpots></AllSpots>
            },
            {
                path: '/List',
                element: <Private><MyListPage></MyListPage></Private>
            },
            {
                path: '/update/:id',
                element: <UpdateData></UpdateData>,
                loader: ({ params }) => fetch(`https://server-site-mu-seven.vercel.app/spots/${params.id}`)
            },
            {
                path: '/country/:id',
                element: <Bangladesh></Bangladesh>,
                loader: ({ params }) => fetch(`https://server-site-mu-seven.vercel.app/country/${params.id}`)
            }

        ]
    },
]);

export default router;