import React from 'react'

export default function ChapterQuestionForm({children}) {
  require("../../../ComponentStyle/ChapterTextArea.css");

  return (
    <form className="form-group">
        {children}
    </form>
  )
}
