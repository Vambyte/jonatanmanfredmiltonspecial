import React, {useEffect, useState } from 'react'
import 'react-jsx-parser'
import JsxParser from 'react-jsx-parser';

import { useSearchParams } from 'react-router-dom';

import ChapterImage from './ChapterImage';
import ChapterQuestions from './ChapterQuestions';
import ChapterQuestionForm from './ChapterQuestionForm';
import ChapterQuestionText from './ChapterQuestionText';
import ChapterQuestionCheckbox from './ChapterQuestionCheckbox';
import ChapterQuestionRadio from './ChapterQuestionRadio';
import { useChapter } from '../../../contexts/ChapterContext';

export default function ChapterTextArea() {

  const [chapterHtml, setChapterHtml] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();

  const { currentChapter, currentPart } = useChapter();


  useEffect(() => {

    console.log("Fetching chapter:", currentChapter, "part:", currentPart);

    if (currentChapter == null || currentPart == null) return;

    const requestOptions = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("JWT-token")
      },
      body: JSON.stringify({
         chapter: currentChapter,
         part: currentPart
      })
    }

    fetch("http://localhost:3001/main/chapter/get-content", requestOptions).then((res) => {
      const reader = res.body.getReader();
      reader.read().then(({done, value}) => {
        setChapterHtml(new TextDecoder().decode(value));
      })
    });

  }, [chapterHtml, currentChapter, currentPart]);

  return (
    <div className="main-container">
      <div className="chapter-container">
        <div className="chapter-content">
            <JsxParser components={{ ChapterImage, ChapterQuestions, ChapterQuestionForm, ChapterQuestionText, ChapterQuestionCheckbox, ChapterQuestionRadio }} jsx={chapterHtml}/>
        </div>
      </div>
    </div>
  )
}
