import React, {useRef, useEffect} from 'react'

export default function ManageTestQuestionText({answers, updateAnswers}) {
  const answerInputRef = useRef();

  useEffect(() => {
    answerInputRef.current.value = answers[0] != null ? answers[0].value : "";
  }, [answers]);

  function onAnswerChange() {
    updateAnswers([{ value: answerInputRef.current.value, correct: true}]);
  }

  return (
    <div>
      <input type="text" ref={answerInputRef} onChange={onAnswerChange} />
    </div>
  )
}
