
import { createContext, useState, useEffect } from "react";
import { app } from "../Firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [checkEmail, setCheckMail] = useState('')
    const googleProvider = new GoogleAuthProvider();
    const [role, setRole] = useState('')

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    }, [])



    // const exactemail = alluser.filter(user => user.role === "admin")

    // if (checkEmail?.email === adminmail) {
    //     console.log(`Email match with admin email,email is`, adminmail)
    // }

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        logOut,
        checkEmail, setCheckMail,
        role, setRole
    }

    // console.log("Role data", role)

    // console.log("CHeck mail is ", checkEmail?.email)
    // console.log("Admin mail is ", adminmail)


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;