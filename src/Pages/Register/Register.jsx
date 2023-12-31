import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from 'react'
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";
const Register = () => {

    const [registerError, setRegisterError] = useState('')
    const userInfo = useContext(AuthContext)
    const { createUser, googleSignIn, checkEmail, setCheckMail } = userInfo
    const navigate = useNavigate()


    const handlePopUp = () => {
        googleSignIn()
            .then(user => {
                console.log(user.user)
                const userpop = { name: user.user.displayName, email: user.user.email, role: "memeber" }
                // console.log(userpop)
                ////post user data into mongodb database
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
                        setCheckMail(userpop)
                    })

                navigate('/')
            })
            .catch(err => {
                console.log(err.message)
            })
    }


    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value
        const password = form.password.value
        const photoURL = form.photoURL.value
        const wantToBe = form.wantToBe.value
        console.log(email, password, wantToBe)

        ///Check password length
        if (password.length < 6) {
            setRegisterError(() => {
                toast('Password should be at least six character or longer')
                return 'Password should be at least six character or longer'
            })
            return;
        }
        // ///check password have any capital letter or not
        if (!/[A-Z]/.test(password)) {
            setRegisterError(() => {
                toast('Password should have at least one upper case letter')
                return 'Password should have at least one upper case letter'
            })

            return;
        }
        // ///check password have any special character or not
        if (!/[$&+,:;=?@#|'<>.^*()%!-]/.test(password)) {
            setRegisterError(() => {
                toast("Password should have at least one special character")
                return "Password should have at least one special character"
            })

            return;
        }
        const user = { name: name, email: email, role: wantToBe }
        createUser(email, password)
            .then(res => {
                console.log(res.user)
                toast("Create user successfully")

                //Reset login form
                e.target.reset();

                ////post user data into mongodb database
                fetch(`https://assignment-12-server-one-psi.vercel.app/users`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        setCheckMail(user)
                    })


                ///Navigate to Home 
                navigate('/')
            })
            .catch(err => {
                console.log(err.message)
                setRegisterError(err.message)
                toast(err.message)
            })
    }
    return (
        <div>
            <Helmet>
                <title>FitnessTraker | Register</title>
            </Helmet>
            <div className="flex items-center justify-center mt-5 mb-5">
                <div className="hero w-full ">
                    <div className="hero-content flex-col ">
                        <div className="card flex-shrink-0 w-full  shadow-xl shadow-gray-300">
                            <form onSubmit={handleRegister} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="name" className="input w-full " required />
                                </div>
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
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Want to be </span>
                                    </label>
                                    <select name="wantToBe" className="select select-info w-full max-w-xs">
                                        <option disabled selected>Select your choice</option>
                                        <option>trainer</option>
                                        <option>member</option>
                                    </select>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image URL</span>
                                    </label>
                                    <input type="text" name="photoURL" placeholder="image link" className="input w-full " required />
                                </div>
                                <div className="form-control mt-6 text-center">
                                    <button className="btn btn-primary w-full">Register</button>
                                    <ToastContainer></ToastContainer>
                                </div>
                            </form>
                            <button className="btn bg-red-400 mx-4" onClick={handlePopUp}><span className="text-white">Register via Google</span></button>
                            <p className="p-5">Have a account?<Link to={'/login'} className="text-blue-500">Login</Link></p>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block lg:block">

                </div>
            </div>
        </div>
    );
};

export default Register;