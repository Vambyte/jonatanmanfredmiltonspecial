import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase'

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    function signup(email, password) {

        return new Promise((resolve, reject) => {
            const requestOptions = {
                method: "post",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({ email: email, password: password})
            }
    
            fetch("/user/signup", requestOptions)
            .then((res) => res.json())
            .then(data => {
                if (data.success) {
                    resolve(data.msg)
                } else {
                    reject(data.msg);
                }
            });
        });

    }

    function login(email, password) {
        return new Promise((resolve, reject) => {
            const requestOptions = {
                method: "post",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({ email: email, password: password})
            }
    
            fetch("/user/login", requestOptions)
            .then((res) => res.json())
            .then(data => {
                if (data.success) {
                    localStorage.setItem("JWT-token", data.data.token);
                    setCurrentUser(data.data.user);
                    resolve();
                } else {
                    reject(data.msg);
                }
            });
        })
    }

    function logout() {
        localStorage.removeItem("JWT-token");
    }

    useEffect(() => {
        setLoading(false);
    }, [])

    

    const value = {
        currentUser,
        signup,
        login,
        logout
    }
    
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
