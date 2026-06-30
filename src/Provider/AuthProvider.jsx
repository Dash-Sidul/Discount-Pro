import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../../firebase.config";
import { AuthContext } from "../Context/AuthContext";
import { useEffect, useState } from "react";



const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const provider = new GoogleAuthProvider()

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (displayName, photoURL) =>{
       
        return updateProfile(auth.currentUser,{
            displayName, 
            photoURL
        })
    }
    const signInWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect ( () =>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser =>{
            setUser(currentUser)
            setLoading(false)
        }))
        return () => unsubscribe()
    },[])
    console.log(user);

    const authInfo = {
        loading,
        setLoading,
        createUser,
        updateUser,
        user,
        logOut,
        signInUser,
        signInWithGoogle
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;