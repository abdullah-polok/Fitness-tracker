import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from 'react'
const Dashboard = () => {
    const { checkEmail, adminmail } = useContext(AuthContext)
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
                    {
                        (checkEmail?.email === adminmail) ? <>
                            <h3>Admin </h3>
                        </>
                            :

                            <>
                                <h3>Memeber</h3>
                            </>
                    }

                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;