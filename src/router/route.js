import { createBrowserRouter } from "react-router-dom";
import Home from "../screens/Home";
import RegisterDeceased from "../screens/RegisterDeceased";
import IssueCertificate from "../screens/IssueCertificate";
import SearchRecords from "../screens/SearchRecords";
import Payment from "../screens/Payment";
import Login from "../screens/Login";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    },{
        path:"/register_deceased",
        element:<RegisterDeceased/>
    },
    {
        path:"/issue_certificate/:Id",
        element:<IssueCertificate/>
    },{
        path:"/search_records",
        element:<SearchRecords/>
    },
    {
        path:"/payment",
        element:<Payment/>
    },
    {
        path:"/login",
        element:<Login/>
    }
])