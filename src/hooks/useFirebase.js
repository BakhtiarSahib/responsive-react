import {getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged} from "firebase/auth";
import {useEffect, useState} from "react";
import initializeAuthentication from "../components/Login/Firbase/Firebase.init";


initializeAuthentication()


const useFirebase = () => {

    const [user, setUser] = useState({})

    const [isLoading, setIsLoading] = useState(true)

    const auth = getAuth();

    const googleSign = () => {

        setIsLoading(true);
        const GoogleProvider = new GoogleAuthProvider()

        return signInWithPopup(auth, GoogleProvider)

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        });

        return () => unsubscribe

    }, [auth])

    const logout = () => {
        setIsLoading(true)

        signOut(auth).then(() => {
            // Sign-out successful.


        }).catch((error) => {
            // An error happened.
        })
            .finally(() => {
                setIsLoading(false)
            })
    }

    return {
        user,
        setUser,
        googleSign,
        logout,
        setIsLoading,
        isLoading
    }
}

export default useFirebase