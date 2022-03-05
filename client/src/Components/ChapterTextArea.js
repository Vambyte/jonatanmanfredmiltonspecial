import React, {useEffect, useState} from 'react'
import '../ComponentStyle/ChapterTextArea.css'
import 'react-jsx-parser'
import JsxParser from 'react-jsx-parser';
import Image from './Image';


export default function ChapterTextArea() {

  const [chapterHtml, setChapterHtml] = useState("");

  useEffect(() => {

    const requestOptions = {
      method: "post",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ chapter: "Chapter_example.html"})
    }


    fetch("/main/chapter/get-content", requestOptions).then((res) => {
      const reader = res.body.getReader();
      reader.read().then(({done, value}) => {
        setChapterHtml(new TextDecoder().decode(value));
      })
    });

  }, []);

  function arr() {
    
  }

  return (
    <div className="main-container">
      <div className="chapter-container">
        <div className="chapter-content">
            <JsxParser components={{ Image }}jsx={chapterHtml}/>
        </div>
      </div>
    </div>
  )
}
