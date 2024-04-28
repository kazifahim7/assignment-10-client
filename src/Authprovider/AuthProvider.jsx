import { createContext, useEffect, useState } from "react";

import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword,  signInWithPopup } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const newProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signUp = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogIN=()=>{
        return signInWithPopup(auth, newProvider)
    }

    const githubLogin=()=>{
        return signInWithPopup(auth, gitProvider)
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
            console.log(currentUser)

        })

        return () => {unsubscribe()};

    }, [])







    const authInfo = { user, createUser, signUp, loading, googleLogIN, githubLogin }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};


export default AuthProvider;