import React, {useState, useEffect, useRef} from 'react'

export default function ManageTestQuestionRadio({answers, updateAnswers}) {
  const [currentAnswers, setCurrentAnswers] = useState([]);
  const [hasBeenEditedWithouSave, setHasBeenEditedWithoutSave] = useState(false);
  const answersSelectContainerRef = useRef();


  useEffect(() => {
    setCurrentAnswers(answers);
  }, [answers])

  function removeAnswer (value) {
    setCurrentAnswers(currentAnswers.filter(option => option.value !== value));
  };

  function addAnswer () {
    let value = prompt("Answer: ");
    if (value !== null) {
      setCurrentAnswers([...currentAnswers, { value: value, correct: false}]);
    }
  }

  function onAnswerChange() {
    setHasBeenEditedWithoutSave(true);
  }
  
  function saveAnswers(option, newValue, index) {
    let temp = [];
    
    let answers = answersSelectContainerRef.current.getElementsByClassName("answer-select-container");
    console.log(answers.length);

    let trueAmounts = 0; // kolla så inte flera är korrekta!
    
    for (let i = 0; i < answers.length; i++) {
      let value = answers[i].querySelector(".answer-value-select").value;
      let correct = (answers[i].querySelector(".answer-correct-select").value === "true");
      if (correct) trueAmounts++;

      if (trueAmounts > 1) {
        alert("Flera är korrekta! De ju radio... Fixa det");
        return;
      }
      temp.push({ value: value, correct: correct });
    }

    setCurrentAnswers(temp);
    setHasBeenEditedWithoutSave(false);
    updateAnswers(temp);
  }

  return (
    <>
      {hasBeenEditedWithouSave && <strong style={{color: "red"}}>Har ändrats utan att sparats</strong> }
      <div className="question-check-container">
        <div className="answers-select-container" ref={answersSelectContainerRef}>
          {currentAnswers.map((option, index) => {
            return (
              <div className="answer-select-container" key={option.value}>
                <input className="answer-value-select" defaultValue={option.value} onChange={onAnswerChange} />

                <select className="answer-correct-select" defaultValue={option.correct.toString()} onChange={onAnswerChange} >
                  <option value="true">True</option>
                  <option value="false">False</option>
                </select>
                <input type="button" style={{"marginLeft": "10px"}} value="Delete" onClick={() => { removeAnswer(option.value) }}/>
                
              </div>
            )
          })}
        </div>
        
        <div>
          <input type="button" value="Add new" onClick={addAnswer}  />
          <input type="button" value="Save answers" onClick={saveAnswers}  />
        </div>
      </div>
    </>
  )
}
