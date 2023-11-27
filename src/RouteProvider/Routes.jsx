import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import GallerySection from "../Pages/Gallery/GallerySection.jsx/GallerySection";
import Home from "../Pages/Home/Home/Home";

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
            }
        ]
    }
])
