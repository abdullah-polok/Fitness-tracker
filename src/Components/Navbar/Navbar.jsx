import { Link, NavLink } from "react-router-dom"
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from 'react'
import emptyImg from '../../assets/images/istockphoto-1210939712-612x612.jpg'
const Navbar = () => {
    const userInfo = useContext(AuthContext)
    const { user, logOut } = userInfo
    // console.log(user?.photoURL
    // )
    const navlinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/gallery'}>Gallery</NavLink></li>
        <li><NavLink to={'/trainer'}>Trainer</NavLink></li>
        <li><NavLink to={'/classes'}>Classes</NavLink></li>
        <li><NavLink to={'/dashboard'}>Dashboard</NavLink></li>
    </>

    const handleUser = () => {
        logOut()
    }
    return (
        <div className="navbar rounded-xl p-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="font-semibold menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                        {
                            navlinks
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl font-extrabold">FitnessTracker</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="font-semibold menu menu-horizontal px-1">
                    {
                        navlinks
                    }
                </ul>
            </div>
            <div className="navbar-end ">
                <ul className="flex gap-5 font-semibold items-center">
                    {
                        user ? <div className="flex ite gap-2">
                            <div className="avatar placeholder">
                                <div className="bg-neutral text-neutral-content rounded-full w-8">
                                    <img className="avatar rou" src={user?.photoURL ? user.photoURL : emptyImg} />
                                </div>
                            </div>
                            <li className="text-white rounded-md p-2 bg-primary text-sm"><Link onClick={handleUser}>Log Out</Link></li>

                        </div>
                            :
                            <>
                                <li><Link to={'/login'}>LOG IN</Link></li>
                                <li className="text-white rounded-md p-2 bg-primary" ><Link to={'/register'}>SIGN UP</Link></li>
                            </>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;