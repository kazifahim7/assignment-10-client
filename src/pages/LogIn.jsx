
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

import { FaGithub } from "react-icons/fa";

import { ToastContainer, toast as showToast } from 'react-toastify';


import 'react-toastify/dist/ReactToastify.css';
import { GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const provider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();
    const [display, setDisplay] = useState(false);
    const location = useLocation()
    const navigate = useNavigate()



    const userLogIn = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;






        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                if (!showToast.isActive(13, "friendRequest")) {
                    console.log("first time running")
                    showToast('log in success', {
                        position: "top-right",
                        autoClose: 3000,
                        closeOnClick: true,
                        draggable: false,
                        type: "success",
                        toastId: 13
                    })
                }


                e.target.reset()
                navigate(location?.state ? location.state : '/')

            })
            .catch(() => {
                if (!showToast.isActive(13, "friendRequest")) {
                    console.log("first time running")
                    showToast('please enter a valid information', {
                        position: "top-right",
                        autoClose: 3000,
                        closeOnClick: true,
                        draggable: false,
                        type: "warning",
                        toastId: 13
                    })
                }

            })

    }


    const googleLogIn = () => {
        signInWithPopup(auth, provider)
            .then(() => {
                if (!showToast.isActive(13, "friendRequest")) {
                    console.log("first time running")
                    showToast('Google log in success', {
                        position: "top-right",
                        autoClose: 3000,
                        closeOnClick: true,
                        draggable: false,
                        type: "success",
                        toastId: 13
                    })
                }
                navigate(location?.state ? location.state : '/')

            })
            .catch(() => showToast.warning('invalid information'))

    }

    const gitHubLogIn = () => {
        signInWithPopup(auth, gitProvider)
            .then(() => {
                if (!showToast.isActive(13, "friendRequest")) {
                    console.log("first time running")
                    showToast('git-Hub  log in success', {
                        position: "top-right",
                        autoClose: 3000,
                        closeOnClick: true,
                        draggable: false,
                        type: "success",
                        toastId: 13
                    })
                }
                navigate(location?.state ? location.state : '/')

            })
            .catch(() => showToast.warn('invalid information'))

    }







    return (
        <div>
            

            <div className="hero min-h-screen bg-[#0a2233]">

                <div className="hero-content w-full">

                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-center text-2xl font-bold capitalize pt-2">logIn Now.....!</h1>
                        <form onSubmit={userLogIn} className="card-body w-full">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="flex relative items-center">
                                    <input type={display ? 'text' : 'password'} placeholder="password" name="password" className="input input-bordered w-full" required />
                                    <p onClick={() => setDisplay(!display)} className="absolute left-[90%]">{display ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</p>
                                </div>



                            </div>
                            <div className="form-control mt-6">

                                <button className="btn border-none bg-[#f85359]">Login</button>


                                <p className="text-center pt-2"> New member ? <Link to={'/register'} className="text-red-500">please register</Link> </p>
                            </div>
                            <ToastContainer containerId={"friendRequest"} />
                            <hr />
                        </form>


                        <div className="flex gap-2 flex-col  justify-center p-5 ">

                            <button onClick={googleLogIn} className="btn btn-outline text-green-400">
                                <FaGoogle></FaGoogle> LogIn with Google
                            </button>
                            <button onClick={gitHubLogIn} className="btn btn-outline btn-secondary ">
                                <FaGithub></FaGithub>  LogIn with gitHub
                            </button>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;