import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext, useEffect } from 'react'
const Dashboard = () => {
    const { user, checkEmail, adminmail, role, setRole } = useContext(AuthContext)

    const emailPrimary = user?.email

    useEffect(() => {
        fetch(`http://localhost:5000/users/${emailPrimary}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setRole(data)
            })
    }, [])
    console.log(role.role)
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
                    {
                        role?.role === "admin" && <>
                            <h3>Admin</h3>
                        </>
                    }
                    {role?.role === "trainer" && <>
                        <h3>Trainer</h3>
                    </>}
                    {
                        role?.role === "member" && <>
                            <h3>Member</h3>
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