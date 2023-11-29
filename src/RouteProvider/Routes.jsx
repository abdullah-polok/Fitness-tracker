import {
    createBrowserRouter,
} from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import BeATrainer from "../Pages/BeATrainer/BeATrainer";
import ClassDetails from "../Pages/Classes/ClassDetails";
import Classes from "../Pages/Classes/Classes";
import GallerySection from "../Pages/Gallery/GallerySection.jsx/GallerySection";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Trainer from "../Pages/Trainer/Trainer";
import TrainerDetails from "../Pages/Trainer/TrainerDetails";
import TrainerBook from "../Pages/TrainerBookPage/TrainerBook";
import PrivateRoutes from "./PrivateRoutes";
import AllSubscribers from '../Pages/Dashboard/Admin/AllSubscribers/AllSubscribers'
import AllTrainers from '../Pages/Dashboard/Admin/AllTrainers/AllTrainers'
import AppliedTrainer from '../Pages/Dashboard/Admin/AppliedTrainer/AppliedTrainer'
import Balance from "../Pages/Dashboard/Admin/Balance/Balance";
import AddNewClass from "../Pages/Dashboard/Trainer/Add new Class/AddNewClass";
import AddNewForum from "../Pages/Dashboard/Trainer/Add new Forum/AddNewForum";
import ManageMember from "../Pages/Dashboard/Trainer/Manage Member/ManageMember";
import ManagerSlots from "../Pages/Dashboard/Trainer/ManageSlots/ManagerSlots";
import ActivityLog from "../Pages/Dashboard/Member/Activity Log/ActivityLog";
import ProfileSettings from "../Pages/Dashboard/Member/Profile Settings/ProfileSettings";
import RecommandClass from "../Pages/Dashboard/Member/RecommandClass/RecommandClass";
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
            },
            {
                path: 'balance',
                element: <Balance></Balance>
            }, {
                path: 'addnewclass',
                element: <AddNewClass></AddNewClass>
            }, {
                path: 'addnewforum',
                element: <AddNewForum></AddNewForum>
            },
            {
                path: 'managemember',
                element: <ManageMember></ManageMember>
            }, {
                path: 'manageslots',
                element: <ManagerSlots></ManagerSlots>
            }, {
                path: 'activityLog',
                element: <ActivityLog></ActivityLog>
            },
            {
                path: 'profilesettings',
                element: <ProfileSettings></ProfileSettings>
            }, {
                path: 'recommandedclass',
                element: <RecommandClass></RecommandClass>
            }
        ]

    }
])
