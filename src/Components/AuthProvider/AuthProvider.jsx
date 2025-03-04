import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Utility/firebase.init";
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const loginUser = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);
            return ()=>{
                unSubscribe();
            }
        })
    },[])
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }
    const authProperty = {
        user,
        createUser,
        loginUser,
        logOut,
        loading
    }
    return (
        <AuthContext.Provider value={authProperty}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;