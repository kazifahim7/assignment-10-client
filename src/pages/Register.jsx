import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../Authprovider/AuthProvider";


const Register = () => {
    const [display, setDisplay] = useState(false)
    const { createUser } = useContext(AuthContext)

    const location = useLocation()
    const navigated = useNavigate()


    const userRegister = e => {
        e.preventDefault();

        const name = e.target.name.value;
        const photoUrl = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (!name) {
            return toast.warning('please Enter a name')
        }
        else if (!email) {
            return toast.warning('please Enter a EMail')
        }
        else if (!password) {
            return toast.warning('please Enter a password')
        }
        else if (!photoUrl) {
            return toast.warning('please Enter a photoUrl')
        }






        else if (password.length < 6) {
            return toast.warning('Length must be at least 6 character')
        }
        else if (!/^(?=.*[A-Z])/.test(password)) {
            return toast.warning('Must have an Uppercase letter in the password')
        }
        else if (!/^(?=.*[a-z]).+$/.test(password)) {
            return toast.warning('Must have a Lowercase letter in the password')
        }
        console.log(name, photoUrl, email, password)

        createUser(email, password)
            .then((result) => {
                const currentUser = result.user
                console.log(currentUser)


                // update profile:
                updateProfile(currentUser, {
                    displayName: name, photoURL: photoUrl
                })
                    .then(() => {

                        if (!toast.isActive(13, "friendRequest")) {
                            console.log("first time running")
                            toast('Register success', {
                                position: "top-right",
                                autoClose: 3000,
                                closeOnClick: true,
                                draggable: false,
                                type: "success",
                                toastId: 13
                            })
                        }

                        e.target.reset()

                        setTimeout(() => {
                            navigated(location?.state ? location.state : '/')
                        }, 2000)





                    })
                    .catch()












            })
            .catch(() => toast.warn('already register'))





    }






    return (
        <div>
            
            <div className="hero min-h-screen bg-[#0a2233]">

                <div className="hero-content w-full">

                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-center text-2xl font-bold capitalize pt-2">Register Now.....!</h1>
                        <form onSubmit={userRegister} className="card-body w-full">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoUrl</span>
                                </label>
                                <input type="text" name="photo" placeholder="photoUrl" className="input input-bordered" />
                            </div>
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
                                <button className="btn border-none bg-[#f85359]">Register</button>
                                <ToastContainer></ToastContainer>

                                <p>already a account ? <Link to={'/login'} className="text-red-500">please LogIn</Link> </p>
                            </div>
                            <hr />

                        </form>






                    </div>
                </div>
            </div>


        </div>
    );
};

export default Register;
