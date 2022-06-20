import React from 'react';
import useAuth from "../../../hooks/useAuth";
import {useLocation, useNavigate} from "react-router-dom";

const Login = () => {

    const {googleSign, setUser, setIsLoading} = useAuth()

    const location = useLocation()
    const history = useNavigate()
    const url = location.state?.from || '/'

    const handleLogin = () => {
        googleSign()
            .then(result => {
                history(url)
                setUser(result.user)
            })
            .catch(error => {
                setUser({})
            })
            .finally(() => {setIsLoading(false)})
    }
    return (
        <div id='login'>
            <h2>login now</h2>
            <button onClick={handleLogin} className="btn btn-warning">Google Sign In</button>
        </div>
    );
};

export default Login;