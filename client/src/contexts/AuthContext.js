import React, { useContext, useState, useEffect } from 'react'
import { useNavigate, matchPath, useLocation } from 'react-router-dom';

const AuthContext = React.createContext();


export function useAuth() {
    return useContext(AuthContext);
}


export function AuthProvider({children}) {

    const [currentUser, setCurrentUser] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { pathname } = useLocation();




    function signup(email, password) {
        return new Promise((resolve, reject) => {
            const requestOptions = {
                method: "post",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({ email: email, password: password})
            }
    
            fetch("http://localhost:3001/user/signup", requestOptions)
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
    
            fetch("http://localhost:3001/user/login", requestOptions)
            .then((res) => res.json())
            .then(data => {
                if (data.success) {
                    localStorage.setItem("JWT-token", data.data.token);
                    localStorage.setItem("user", JSON.stringify(data.data.user));
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
        localStorage.removeItem("user");
        setCurrentUser(null);
    }

    useEffect(() => {


        let isInternal = matchPath( { path: "/i/*", exact: true, strict: true }, pathname ) != null;

        if (!isInternal) {
            setCurrentUser(null);
            setLoading(false);
            return;
        }

        const requestOptions = {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("JWT-token")
            },
        }

        fetch("http://localhost:3001/user/check-token-status", requestOptions)
        .then((res) => res.json())
        .then(data => {
            if (data.success === false) {
                logout();

                navigate("/home");

                setCurrentUser(null);

                setLoading(false);

                return;
            }

            setCurrentUser(JSON.parse(localStorage.getItem("user")));

            setLoading(false);
        });
    }, [navigate]) 

    const value = {
        currentUser,
        login,
        logout,
        signup
    }
        

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
    
}
