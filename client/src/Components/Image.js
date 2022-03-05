import React, { useState, useEffect } from 'react'

export default function Image({ name, className }) {

    const [img, setImg] = useState();

    const fetchImage = async function () {
        const requestOptions = {
            method: "post",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({image: name})
        };

        const res = await fetch("/main/chapter/get-image", requestOptions);
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
