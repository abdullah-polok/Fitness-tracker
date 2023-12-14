import { FaBuyNLarge } from "react-icons/fa";
import { NavLink as Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext, useEffect } from 'react'
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { Helmet } from "react-helmet-async";
const Dashboard = () => {
    const { user, checkEmail, adminmail, role, setRole } = useContext(AuthContext)

    const emailPrimary = user?.email

    useEffect(() => {
        fetch(`https://assignment-12-server-one-psi.vercel.app/users/${emailPrimary}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setRole(data)
            })
    }, [])
    console.log(role.role)
    return (
        <div>
            <Helmet>
                FitnessTraker | Dashboard
            </Helmet>
            <div className="flex">
                {/* dashboard side bar */}
                <div className="w-64 min-h-screen bg-primary text-white">
                    <ul className="menu p-4">
                        {
                            role?.role === "admin" && <>
                                <li className="shadow-md shadow-black"><Link to='/dashboard/allSubscribers'>All Subscribers</Link></li>
                                <li className="shadow-md shadow-black"><Link to='/dashboard/allTrainers'>AllT rainers</Link></li>
                                <li className="shadow-md shadow-black"><Link to='/dashboard/appliedTrainer'>Applied Trainer</Link></li>
                                <li className="shadow-md shadow-black"><Link to='/dashboard/allSubscribers'>All Subscribers</Link></li>
                                <li className="shadow-md shadow-black"><Link to='/dashboard/balance'>Balance</Link></li>
                            </>
                        }
                        {role?.role === "trainer" && <>
                            <li className="shadow-md shadow-black"><Link to='/dashboard/addnewclass'>Add new class</Link></li>
                            <li className="shadow-md shadow-black"><Link to='/dashboard/addnewforum'>Add new forum</Link></li>
                            <li className="shadow-md shadow-black"><Link to='/dashboard/managemember'>Manage member</Link></li>
                            <li className="shadow-md shadow-black"><Link to='/dashboard/manageslots'>Manage slots</Link></li>
                        </>}
                        {
                            role?.role === "member" && <>
                                <li className="shadow-md shadow-black"><Link to='/dashboard/activityLog'>Activity log</Link></li>
                                <li className="shadow-md shadow-black"><Link to='/dashboard/profilesettings'>Profile settings</Link></li>
                                <li className="shadow-md shadow-black"><Link to='/dashboard/recommandedclass'>Recommanded class</Link></li>
                            </>
                        }

                    </ul>
                </div>
                {/* dashboard content */}
                <div className="flex-1 p-8">
                    <Navbar></Navbar>
                    <Outlet></Outlet>
                    <Footer></Footer>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;