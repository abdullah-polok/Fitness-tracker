import {
    createBrowserRouter,
} from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import BeATrainer from "../Pages/BeATrainer/BeATrainer";
import ClassDetails from "../Pages/Classes/ClassDetails";
import Classes from "../Pages/Classes/Classes";
import AllSubscribers from "../Pages/Dashboard/AllSubscribers/AllSubscribers";
import AllTrainers from "../Pages/Dashboard/AllTrainers/AllTrainers";
import AppliedTrainer from "../Pages/Dashboard/AppliedTrainer/AppliedTrainer";
import GallerySection from "../Pages/Gallery/GallerySection.jsx/GallerySection";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Trainer from "../Pages/Trainer/Trainer";
import TrainerDetails from "../Pages/Trainer/TrainerDetails";
import TrainerBook from "../Pages/TrainerBookPage/TrainerBook";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }, {
                path: '/gallery',
                element: <GallerySection></GallerySection>
            },
            {
                path: '/trainer',
                element: <Trainer></Trainer>
            },
            {
                path: '/trainerdetails/:id',
                element: <PrivateRoutes><TrainerDetails></TrainerDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/trainers/${params.id}`)
            },
            {
                path: '/becometrainer',
                element: <PrivateRoutes><BeATrainer></BeATrainer></PrivateRoutes>
            },
            {
                path: '/trainerbook',
                element: <PrivateRoutes><TrainerBook></TrainerBook></PrivateRoutes>
            },
            {
                path: '/classes',
                element: <Classes></Classes>
            },
            {
                path: '/classdetails/:id',
                element: <PrivateRoutes><ClassDetails></ClassDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/classes/${params.id}`)
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children: [
            {
                path: 'allSubscribers',
                element: <AllSubscribers></AllSubscribers>
            },
            {
                path: 'allTrainers',
                element: <AllTrainers></AllTrainers>
            },
            {
                path: 'appliedTrainer',
                element: <AppliedTrainer></AppliedTrainer>
            }
        ]

    }
])
