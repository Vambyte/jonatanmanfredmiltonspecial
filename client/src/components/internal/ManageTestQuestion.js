import React, {useEffect, useState, useRef} from 'react'
import ManageTestQuestionCheck from './ManageTestQuestionCheck'
import ManageTestQuestionRadio from './ManageTestQuestionRadio'
import ManageTestQuestionText from './ManageTestQuestionText'

export default function ManageTestQuestion({type, question, answers, updateQuestion, questionIndex}) {

    const [questionType, setQuestionType] = useState();
    const [questionValue, setQuestionValue] = useState();
    const [questionAnswers, setQuestionAnswers] = useState();

    function onTypeChanged(newType) {
        setQuestionType(newType);
        updateQuestion({ type: newType, question: questionValue, answers: questionAnswers }, questionIndex);
    }

    function onQuestionChanged(newQuestion) {
        setQuestionValue(newQuestion);
        updateQuestion({ type: questionType, question: newQuestion, answers: questionAnswers }, questionIndex);
    }

    useEffect(() => {
        setQuestionType(type);
        setQuestionValue(question);
        setQuestionAnswers(answers);
    }, [])

    function updateAnswers(newAnswers) {
        setQuestionAnswers(newAnswers);
        updateQuestion({ type: questionType, question: questionValue, answers: newAnswers }, questionIndex);
    }

    return (
        <div className="question-container">
            
            <label>Type: </label>
            <div className="question-property-container">
                <select defaultValue={type} onChange={(event) => { onTypeChanged(event.target.value) }}>
                    <option value="text">Text</option>
                    <option value="check">Check</option>
                    <option value="radio">Radio</option>
                </select>
            </div>

            <label>Question: </label>
            <div className="question-property-container">
                <input type="text" defaultValue={question} onChange={(event) => {onQuestionChanged(event.target.value)}} />
            </div>

            <label>Answer(s):</label>
            <div className="question-property-container">
               
                {questionType == "text" && <ManageTestQuestionText answers={answers}   updateAnswers={updateAnswers}  />}
                {questionType == "check" && <ManageTestQuestionCheck answers={answers} updateAnswers={updateAnswers}  />}
                {questionType == "radio" && <ManageTestQuestionRadio answers={answers} updateAnswers={updateAnswers}  />}
            </div>
            


            <button style={{float: "right"}}>Delete question</button>

        </div>
    )
}
