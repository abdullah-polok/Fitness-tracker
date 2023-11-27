import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import GallerySection from "../Pages/Gallery/GallerySection.jsx/GallerySection";
import Home from "../Pages/Home/Home/Home";
import Trainer from "../Pages/Trainer/Trainer";
import TrainerDetails from "../Pages/Trainer/TrainerDetails";

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
                element: <TrainerDetails></TrainerDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/trainers/${params.id}`)
            }
        ]
    }
])
