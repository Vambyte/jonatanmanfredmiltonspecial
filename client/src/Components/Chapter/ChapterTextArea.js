import React, {useEffect, useState } from 'react'
import '../../ComponentStyle/ChapterTextArea.css'
import 'react-jsx-parser'
import JsxParser from 'react-jsx-parser';

import { useSearchParams } from 'react-router-dom';

import ChapterImage from './ChapterImage';
import ChapterQuestions from './ChapterQuestions';
import ChapterQuestionForm from './ChapterQuestionForm';
import ChapterQuestionText from './ChapterQuestionText';
import ChapterQuestionCheckbox from './ChapterQuestionCheckbox';
import ChapterQuestionRadio from './ChapterQuestionRadio';

export default function ChapterTextArea() {

  const [chapterHtml, setChapterHtml] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {

    const chapter = searchParams.get("chapter");
    const part = searchParams.get("part");

    console.log(part);
    console.log("hoha");

    const requestOptions = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("JWT-token")
      },
      body: JSON.stringify({
         chapter: chapter,
         part: part
      })
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
            <JsxParser components={{ ChapterImage, ChapterQuestions, ChapterQuestionForm, ChapterQuestionText, ChapterQuestionCheckbox, ChapterQuestionRadio }}jsx={chapterHtml}/>
        </div>
      </div>
    </div>
  )
}
