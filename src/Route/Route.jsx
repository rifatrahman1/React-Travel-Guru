import { createBrowserRouter } from "react-router-dom";
import Main_layout from "./Main_layout";
import Home from "../Pages/Home";
import News from "../Pages/News";
import Destination from "../Pages/Destination";
import Error from "../Components/Error";

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
                        path: '/news',
                        element: <News></News>
                    },
                    {
                        path: '/destination',
                        element: <Destination></Destination>
                    }
                ]
            },
           
        ]
    }
])

export default router;