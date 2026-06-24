import { createBrowserRouter } from "react-router";
import HomeLayout from "../Pages/HomeLayout/HomeLayout";
import Home from "../Pages/Home/Home";
import Brands from "../Components/Brands/Brands";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import NabBanner from "../Pages/NavBanner/NabBanner";
import Loader from "../Components/Loader/Loader";
import BrandDetails from "../Pages/BrandDetails/BrandDetails";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <HomeLayout></HomeLayout>,
        children:[
            {
                path: '/',
                loader: () => fetch('./AllBrands.json'),
                // HydrateFallback: <Loader></Loader> ,
                element: <NabBanner></NabBanner>
            },
            {
                path: "/brands",
                loader: () => fetch('./AllBrands.json'),
                element: <Brands></Brands>
            },
            {
                path: "/brand/:id",
                loader: () => fetch('/AllBrands.json'),
                element: <BrandDetails></BrandDetails>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'*',
                element: <ErrorPage></ErrorPage>
            }
        ]
    }
])