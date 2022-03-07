import React, { useContext, useState, useEffect } from 'react'
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
      
      
        fetch("/user/set-current-chapter", requestOptions)
        .then((res) => res.json())
        .then(data => {
            if (data.success) {
                let userObj = JSON.parse(localStorage.getItem("user"));

                userObj.current_chapter = data.data.current_chapter;

                localStorage.setItem("user", JSON.stringify(userObj));
            }
        });
    }

    async function setPart(newPart) {
        if (currentUser == null) return;

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
      
      
        await fetch("/user/set-current-part", requestOptions)
        .then((res) => res.json())
        .then(data => {
            if (data.success) {
                let userObj = JSON.parse(localStorage.getItem("user"));

                userObj.current_chapter = data.data.current_chapter;

                localStorage.setItem("user", JSON.stringify(userObj));
            }
        });
    }


    useEffect(() => {
        console.log("currentUser");
        setLoading(true);

        if (currentUser == null) return;

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
      
      
        fetch("/user/get-chapter-info", requestOptions)
        .then((res) => res.json())
        .then(data => {
            if (data.success) {
                setCurrentChapter(data.data.chapter);
                setCurrentPart(data.data.part);
                setLoading(false);
            }
        });

    }, [currentUser]);


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
