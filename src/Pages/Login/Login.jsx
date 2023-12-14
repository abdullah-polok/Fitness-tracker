import { useState, useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet-async';

const Login = () => {
    const [loginMes, setLoginMes] = useState('')
    const userInfo = useContext(AuthContext)
    const { user, signIn, googleSignIn, checkEmail, setCheckMail } = userInfo

    const navigate = useNavigate()
    const handlePopUp = () => {
        googleSignIn()
            .then(user => {
                // console.log(user.user)
                const userpop = { name: user.user.displayName, email: user.user.email, role: "memeber" }
                // console.log(userpop)
                ////post user data into mongodb database

                fetch(`https://assignment-12-server-one-psi.vercel.app/users/${user.user.email}`)
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)
                        setCheckMail(data)
                    })

                ///check email not availble in data base
                ///if not availble then post into database
                if (checkEmail?.email === userpop?.email) {
                    console.log("User already exist")
                    toast("User already exist")
                }

                else {
                    fetch(`https://assignment-12-server-one-psi.vercel.app/users`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(userpop)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                        })
                }
                navigate('/')
            })
            .catch(err => {
                console.log(err.message)
                setLoginMes(() => {
                    toast(err.message)
                    return err.message
                })
            })
    }
    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value
        const password = form.password.value

        signIn(email, password)
            .then(res => {
                // console.log(res.user)
                const userlog = { name: res?.user?.displayName, email: res?.user?.email }
                setCheckMail(userlog)
                // console.log(userlog)
                e.target.reset()
                navigate('/')

            })
            .catch(err => {
                console.log(err.message)
            })

    }
    return (
        <div>
            <Helmet>
                <title>FitnessTraker | Login</title>
            </Helmet>
            <div className="hero">
                <div className="hero-content flex-col ">
                    <div className="card flex-shrink-0 w-full shadow-xl shadow-gray-300">
                        <form onSubmit={handleSignIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input w-full " required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input w-full " required />
                            </div>
                            <div className="form-control mt-6 text-center">
                                <button className="btn btn-primary w-full ">Login</button>
                            </div>
                        </form>
                        <button className="btn bg-red-400 mx-4" onClick={handlePopUp}><span className="text-white">Login via Google</span></button>
                        <p className="p-5">Do not have a account?<Link to={'/register'} className="text-blue-500">Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;