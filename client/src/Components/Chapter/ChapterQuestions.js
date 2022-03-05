import React from 'react'

export default function ChapterQuestions({ children }) {
  return (
    <>
      <hr/>
      <h1 className="questions-h1">Kontrollfrågor</h1>
      <div className="main-questions-container">
        <div className="forms-questions-container">
          {children}
        </div>
      </div>
    </>

  )
}
