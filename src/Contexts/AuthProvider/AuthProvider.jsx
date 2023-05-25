import React, {createContext, useState} from "react";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth";
import app from "../../Firebase/firebase.config";

export const authContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }


    const signIn = (email, password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }


    const authInfo = {
        user,
        loading,
        createUser,
        signIn
    };

    return <authContext.Provider value={authInfo}>
        {children}
    </authContext.Provider>;
};

export default AuthProvider;
