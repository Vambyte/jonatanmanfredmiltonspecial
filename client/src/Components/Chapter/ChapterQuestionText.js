import React from 'react'

import '../../ComponentStyle/ChapterTextArea.css'

export default function ChapterQuestionText({ question }) {
  return (
    <>
      <div className="text-question-container">
        <div className="text-question-input-container">
          <label className="input-label">{question}</label>
          <input type="text"/>
        </div>
        

        <button type="submit" className="question-btn"/>
      </div>
      
    </>
  )
}
