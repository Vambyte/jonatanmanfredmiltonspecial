import React from 'react'

import '../../../ComponentStyle/ChapterTextArea.css'

export default function ChapterQuestionText({ question }) {
  return (
    <>
    <div className="question-container"> 
      
      <div style={{flex: 1}}>
        <label className="question-text">{question}</label>
        <input type="text" name={question} className="form-control"/>
      </div>

        
    
      <button type="submit" className="question-btn">OK</button>
    </div>
    </>
  )
}