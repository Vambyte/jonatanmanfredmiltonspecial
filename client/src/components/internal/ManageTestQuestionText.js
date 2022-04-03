import React, {useRef, useEffect} from 'react'
import { v4 as uuidV4 } from 'uuid';

export default function ManageTestQuestionText({answers, updateAnswers}) {
  
  function onAnswerChange(e) {
    updateAnswers([{ value: e.target.value, correct: true, _key: uuidV4()}]);
  }

  return (
    <div>
      <input type="text" defaultValue={answers[0] != null ? answers[0].value : ""} onChange={onAnswerChange} />
    </div>
  )
}
