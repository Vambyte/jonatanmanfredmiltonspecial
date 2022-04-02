import React, {useState, useEffect, useRef} from 'react'
import { v4 as uuidV4 } from 'uuid';
import ManageTestQuestion from '../../components/internal/ManageTestQuestion';
import "../../styles/Pages.scss";

export default function ManageTest() {

  const [selectedChapter, setSelectedChapter] = useState(1);
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [allChapterQuestions, setAllChapterQuestions] = useState([]);

  const chapterSelectRef = useRef();

  useEffect(() => {
    const requestOptions = {
      method: "get",
      headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("JWT-token")
      }
    }

    fetch("http://localhost:3001/main/chapter/get-questions", requestOptions)
    .then((res) => res.json())
    .then(data => {
        if (data.success === true) {
          setAllChapterQuestions(data.data.chapters);
        } else {
          alert("Could not load data");
        }
    });
  }, []);

  function addNewQuestion() {
    setCurrentQuestions([...currentQuestions, {
      type: "text",
      question: "",
      answers: []
    }])
  }

  function updateQuestion(newQuestion, index) {
    let temp = [...currentQuestions];
    let oldQuestion = temp[index];

    if (oldQuestion == null) return;

    if (newQuestion.type != oldQuestion.type) {
      newQuestion.answers = [];
    }
    temp[index] = newQuestion;

    setCurrentQuestions(temp);
  }

  function onSaveQuestions() {

    const requestOptions = {
      method: "post",
      headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("JWT-token")
      },
      body: JSON.stringify({
        chapter: (parseInt(chapterSelectRef.current.value)+1).toString(),
        questions: currentQuestions
      })
    }

    fetch("http://localhost:3001/main/chapter/set-questions", requestOptions)
    .then((res) => res.json())
    .then(data => {
        if (data.success === true) {
          alert("OK");
        } else {
          alert("Error trying to save");
        }
    });
  }

  function addChapter() {
    console.log({
      chapter: allChapterQuestions.length+1,
      questions: []
    });
    const requestOptions = {
      method: "post",
      headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("JWT-token")
      },
      body: JSON.stringify({
        chapter: (allChapterQuestions.length+1).toString()
      })
    }

    fetch("http://localhost:3001/main/chapter/add-chapter-test", requestOptions)
    .then((res) => res.json())
    .then(data => {
        if (data.success === true) {
          setAllChapterQuestions([...allChapterQuestions, { chapter: (allChapterQuestions.length+1).toString(), questions: []}]);
        } else {
          alert("Error");
        }
    });
  }

  function removeChapter() {

    const requestOptions = {
      method: "post",
      headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("JWT-token")
      },
      body: JSON.stringify({
        chapter: chapterSelectRef.current.length.toString()
      })
    }

    fetch("http://localhost:3001/main/chapter/remove-chapter-test", requestOptions)
    .then((res) => res.json())
    .then(data => {
        if (data.success === true) {
          setAllChapterQuestions(allChapterQuestions.filter((_, i) => i !== parseInt(chapterSelectRef.current.value)));
        } else {
          alert("Error");
        }
    });

    
  }

  function onChapterChange(newChapter) {
    console.log(newChapter);
    setCurrentQuestions(allChapterQuestions[parseInt(newChapter)].questions);
  }

  return (
    <div className="ManageTest">
      <button style={{ "marginTop": "10px"}} onClick={addChapter}>Add chapter</button>
      <button style={{ "marginTop": "10px"}} onClick={removeChapter}>Remove last chapter</button>

      <div>
        <label>Chapter: </label>

        <select ref={chapterSelectRef} onChange={(event) => { onChapterChange(event.target.value) }}>
          {allChapterQuestions.map((questions, i) => {
            return <option key={i} value={i}>{(i+1).toString()}</option>
          })}
        </select>

        <div>
          <div className="questions-container">
            {currentQuestions.map((question, index) => {
              return( 
                <ManageTestQuestion type={question.type} question={question.question} answers={question.answers} key={question.question} updateQuestion={updateQuestion} questionIndex={index} />
                )
            })}
          </div>
          <button style={{ "marginTop": "10px"}} onClick={addNewQuestion}>Add question</button>
          <button style={{ "marginLeft": "10px"}} onClick={onSaveQuestions}>Save current chapter questions</button>
        </div>
        <p><strong>Kom ihåg att klicka på 'Save Answers' först om checkboxes eller radio används, annars sparas inte de :D !!</strong></p>
      </div>
      
    </div>
  )
}
