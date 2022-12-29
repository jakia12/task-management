import React, { createContext, useContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, sendPasswordResetEmail, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {


    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //google auth provider

    const provider = new GoogleAuthProvider();

    //sign in with google pop up
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    //email and password sign up
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //email and password  login
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    //sign out
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    //display User
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    //get the user from onAuthState
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unSubscribe();
    }, []);


    const getInfo = { createUser, login, logOut, updateUserProfile, user, loading, googleSignIn, setLoading };

    return (
        <AuthContext.Provider value={getInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export const AuthState = () => {
    return useContext(AuthContext);
}
export default AuthProvider


