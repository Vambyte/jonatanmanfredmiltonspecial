import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'

export default function ChapterImage({ chapter, imageName, className }) {

    const [img, setImg] = useState();

    const fetchImage = async function () {
        const requestOptions = {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("JWT-token")
            },
            body: JSON.stringify({
                chapter: chapter,
                image: imageName
            })
        };

        const res = await fetch("http://localhost:3001/main/chapter/get-image", requestOptions);
        const imageBlob = await res.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setImg(imageObjectURL);
    }

    

    useEffect(() => fetchImage(), []);

    return (
        <div>
            <img className={className}src={img}/>
        </div>
    )
}
