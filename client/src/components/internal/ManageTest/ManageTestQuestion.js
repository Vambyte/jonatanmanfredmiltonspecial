import React, {useEffect, useState, useRef} from 'react'
import ManageTestQuestionCheck from './ManageTestQuestionCheck'
import ManageTestQuestionRadio from './ManageTestQuestionRadio'
import ManageTestQuestionText from './ManageTestQuestionText'

export default function ManageTestQuestion({type, question, answers, updateQuestion, questionIndex}) {

    function onTypeChanged(newType) {
        updateQuestion({ type: newType, question: question, answers: answers }, questionIndex);
    }

    function onQuestionChanged(e) {
        updateQuestion({ type: type, question: e.target.value, answers: answers }, questionIndex);
    }

    function updateAnswers(newAnswers) {
        updateQuestion({ type: type, question: question, answers: newAnswers }, questionIndex);
    }

    function deleteQuestion() {
        updateQuestion({}, questionIndex);
    }

    return (
        <div className="question-container">
            
            <label>Type: </label>
            <div className="question-property-container">
                <select value={type} onChange={(event) => { onTypeChanged(event.target.value) }}>
                    <option value="text">Text</option>
                    <option value="check">Check</option>
                    <option value="radio">Radio</option>
                </select>
            </div>

            <label>Question: </label>
            <div className="question-property-container">
                <input type="text" defaultValue={question} onChange={onQuestionChanged} />
            </div>

            <label>Answer(s):</label>
            <div className="question-property-container">
               
                {type === "text" && <ManageTestQuestionText answers={answers}   updateAnswers={updateAnswers}  />}
                {type === "check" && <ManageTestQuestionCheck answers={answers} updateAnswers={updateAnswers}  />}
                {type === "radio" && <ManageTestQuestionRadio answers={answers} updateAnswers={updateAnswers}  />}
            </div>
            


            <button style={{float: "right"}} onClick={deleteQuestion}>Delete question</button>

        </div>
    )
}
