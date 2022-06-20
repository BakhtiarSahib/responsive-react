import React, {createContext, useMemo} from 'react';
import useFirebase from "../hooks/useFirebase";

export const AuthContext = createContext(null)

const AuthProvider = (props) => {

    const allContext = useFirebase()
    const memoizedValue = useMemo(() => (allContext), [allContext])
    return (
        <AuthContext.Provider value={memoizedValue}>
            {props.children} 
        </AuthContext.Provider>
    );
};

export default AuthProvider;