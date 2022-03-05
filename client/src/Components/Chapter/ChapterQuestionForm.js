import React from 'react'

import '../../ComponentStyle/ChapterTextArea.css'

export default function ChapterQuestionForm({children}) {
  return (
    <form className="question-form">
        {children}
    </form>
  )
}
