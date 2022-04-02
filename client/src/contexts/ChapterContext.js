import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './AuthContext';

const ChapterContext = React.createContext();

export function useChapter() {
    return useContext(ChapterContext);
}

export function ChapterProvider({ children }) {

    const [currentChapter, setCurrentChapter] = useState();
    const [currentPart, setCurrentPart] = useState();
    const [loading, setLoading] = useState(true);

    const { currentUser } = useAuth();

    const navigate = useNavigate();

    async function setChapter(newChapter) {
        
        if (currentUser == null) return;

        const requestOptions = {
            method: "post",
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer " + localStorage.getItem("JWT-token")
            },
            body: JSON.stringify({
               email: currentUser.email,
               newChapter: newChapter
               // Add password for internal authentication among users???
            })
          }
      
      
        fetch("http://localhost:3001/user/set-current-chapter", requestOptions)
        .then((res) => res.json())
        .then(data => {

            if (data.success) {
                let userObj = JSON.parse(localStorage.getItem("user"));

                userObj.chapter = data.data.current_chapter;

                setCurrentChapter(data.data.current_chapter);

                localStorage.setItem("user", JSON.stringify(userObj));
            }
        });
    }

    async function setPart(newPart) {
        return new Promise((resolve, reject) => {
            if (currentUser == null) {
                reject();
                return;
            };

            const requestOptions = {
                method: "post",
                headers: {
                  "Content-Type": "application/json",
                  "Authorization": "Bearer " + localStorage.getItem("JWT-token")
                },
                body: JSON.stringify({
                   email: currentUser.email,
                   newChapter: newPart
                   // Add password for internal authentication among users???
                })
              }
          
          
            fetch("http://localhost:3001/user/set-current-part", requestOptions)
            .then((res) => res.json())
            .then(data => {
                if (data.success) {
                    let userObj = JSON.parse(localStorage.getItem("user"));
    
                    userObj.part = data.data.current_part;
    
                    setCurrentPart(data.data.current_part);
    
                    localStorage.setItem("user", JSON.stringify(userObj));

                    resolve();
                }
            });
        });
    }


    useEffect(() => {
        setLoading(true);

        if (currentUser == null) {
            setLoading(false);
            return;
        }


        const requestOptions = {
            method: "post",
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer " + localStorage.getItem("JWT-token")
            },
            body: JSON.stringify({
               email: currentUser.email
               // Add password for internal authentication among users???
            })
        }
      
        
      
        fetch("http://localhost:3001/user/get-chapter-info", requestOptions)
        .then((res) => res.json())
        .then(data => {
            if (data.code === "ERROR_TOKEN") {
                localStorage.removeItem("JWT-token");
                localStorage.removeItem("user");

                navigate("/home");
                return;
            }

            if (data.success) {
                setCurrentChapter(data.data.chapter);
                setCurrentPart(data.data.part);

                let user = JSON.parse(localStorage.getItem("user"));

                user.chapter = data.data.chapter;
                user.part = data.data.part;

                localStorage.setItem("user", JSON.stringify(user));


                setLoading(false);

            }
        });

    }, [currentUser, navigate]);


    const value = {
        currentChapter,
        currentPart,
        setChapter,
        setPart
    }
    
    return (
        <ChapterContext.Provider value={value}>
            {!loading && children}
        </ChapterContext.Provider>
    )
}
