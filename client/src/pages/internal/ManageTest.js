import React, {useState, useEffect, useRef} from 'react'
import { v4 as uuidV4 } from 'uuid';
import ManageTestQuestion from '../../components/internal/ManageTestQuestion';
import "../../styles/Pages.scss";

export default function ManageTest() {

  const [selectedChapter, setSelectedChapter] = useState(1);
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [allChapterQuestions, setAllChapterQuestions] = useState([]);

  const [questionsIdKey, setQuestionsIdKey] = useState(0);

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

          for (let i = 0; i < data.data.chapters.length; i++) {
            if (data.data.chapters[i].questions.length === 0) continue;
            for (let y = 0; y < data.data.chapters[i].questions.length; y++) {
              data.data.chapters[i].questions[y]._key = uuidV4();

              if (data.data.chapters[i].questions[y].answers.length > 0) {
                for (let x = 0; x < data.data.chapters[i].questions[y].answers.length; x++) {
                  data.data.chapters[i].questions[y].answers[x]._key = uuidV4();
                }
              }
            }
          }

          setAllChapterQuestions(data.data.chapters);
          setCurrentQuestions(data.data.chapters[0] != null ? data.data.chapters[0].questions : []);
        } else {
          alert("Could not load data");
        }
    });
  }, []);

  function addNewQuestion() {
    let temp = [...currentQuestions, {
      type: "text",
      question: "",
      answers: [],
      _key: uuidV4()
    }];
    setCurrentQuestions(temp)
  }

  function updateQuestion(newQuestion, index) {
    let temp = [...currentQuestions];
    let oldQuestion = temp[index];

    if (oldQuestion == null) return;

    if (newQuestion && Object.keys(newQuestion).length === 0 && Object.getPrototypeOf(newQuestion) === Object.prototype) {
      temp.splice(index, 1);
    }
    else {
      if (newQuestion.type != oldQuestion.type) {
        newQuestion.answers = [];
      }
      newQuestion._key = temp[index]._key;

      temp[index] = newQuestion;
    }

    setCurrentQuestions(temp);
  }

  function onSaveQuestions() {
    var tempCurrentQuestions = [...currentQuestions];

    // _key only used in map
    for (let i = 0; i < tempCurrentQuestions.length; i++) {
      delete tempCurrentQuestions[i]._key;
      
      for (let y = 0; y < tempCurrentQuestions[i].answers.length; y++) {
        if (tempCurrentQuestions[i].answers[y].value === "") {
          alert("Finns ett 'Answer(s)' fält som är tomt någonstans");
          return;
        }
        delete tempCurrentQuestions[i].answers[y]._key;
      }
    }

    const requestOptions = {
      method: "post",
      headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("JWT-token")
      },
      body: JSON.stringify({
        chapter: (parseInt(chapterSelectRef.current.value)+1).toString(),
        questions: tempCurrentQuestions
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
                <ManageTestQuestion type={question.type} question={question.question} answers={question.answers} key={question._key} updateQuestion={updateQuestion} questionIndex={index} />
                )
            })}
          </div>
          <button style={{ "marginTop": "10px"}} onClick={addNewQuestion}>Add question</button>
          <button style={{ "marginLeft": "10px"}} onClick={onSaveQuestions}>Save current chapter questions</button>
        </div>
      </div>
      
    </div>
  )
}
