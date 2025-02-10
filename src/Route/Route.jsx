import { createBrowserRouter, Navigate } from "react-router-dom";
import Main_layout from "./Main_layout";
import Home from "../Pages/Home";
import News from "../Pages/News";
import Destination from "../Pages/Destination";
import Error from "../Components/Error";
import Calender from "../Components/Calender";
import Travel from "../Components/Travel";
// import Booking from "../Components/Booking";
import Sundor from "../Components/Sundor";
import Sree from "../Components/Sree";
import Coxs from "../Components/Coxs";
import Login from "../Pages/Login/Login";
import Register from '../Pages/Register'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main_layout></Main_layout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                children: [
                   
                    {
                        // path: '/booking',
                        // element: <Booking></Booking>,
                    },
                    {
                        path: '/booking/travel',
                        element: <Travel></Travel>
                    },
                    
                    
                    {
                        path: '/booking/calender',
                        element: <Calender></Calender>
                    },
                    {
                        path: '/',
                        element: <Navigate to={'/booking/travel'}></Navigate>
                    },
                    
                   
                    {
                        path: '/srre',
                        element: <Sree></Sree>
                    },
                    {
                        path: '/cox',
                        element: <Coxs></Coxs>
                    },
                    {
                        path: 'sundor',
                        element: <Sundor></Sundor>
                    }
                ]
            },
            {
                path: '/news',
                element: <News></News>
            },
            {
                path: '/destination',
                element: <Destination></Destination>     
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
           
        ]
    }
])

export default router