import React from 'react'

export default function ChapterQuestionText({ question }) {

  require("../../../ComponentStyle/ChapterTextArea.css");
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