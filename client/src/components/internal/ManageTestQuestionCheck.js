import React, {useState, useEffect, useRef} from 'react'
import Select from 'react-select'
import { v4 as uuidV4 } from 'uuid';

export default function ManageTestQuestionCheck({answers, updateAnswers}) {
  const answersSelectContainerRef = useRef();

  function removeAnswer (value) {
    updateAnswers(answers.filter(option => option.value !== value));
  };

  function addAnswer () {
    let value = prompt("Answer: ");
    if (value !== null) {
      updateAnswers([...answers, { value: value, correct: false, _key: uuidV4()}])
    }
  }

  function onAnswerValueChange(newValue, index) {
    let temp = [...answers];
    temp[index].value = newValue;
    updateAnswers(temp);

  }

  function onAnswerCorrectChange(newCorrect, index) {
    let temp = [...answers];
    temp[index].correct = (newCorrect === "true");
    updateAnswers(temp);
  }

  return (
    <>
      <div className="question-check-container">
        <div className="answers-select-container" ref={answersSelectContainerRef}>
          {answers.map((answer, index) => {
            return (
              <div className="answer-select-container" key={answer._key}>
                <input className="answer-value-select" defaultValue={answer.value} onChange={(e) => { onAnswerValueChange(e.target.value, index) }} />

                <select className="answer-correct-select" defaultValue={answer.correct.toString()} onChange={(e) => { onAnswerCorrectChange(e.target.value, index)}} >
                  <option value="true">True</option>
                  <option value="false">False</option>
                </select>
                <input type="button" style={{"marginLeft": "10px"}} value="Delete" onClick={() => { removeAnswer(answer.value) }}/>
                
              </div>
            )
          })}
        </div>
        
        <div>
          <input type="button" value="Add new" onClick={addAnswer}  />
        </div>
      </div>
    </>
    
  )
}
