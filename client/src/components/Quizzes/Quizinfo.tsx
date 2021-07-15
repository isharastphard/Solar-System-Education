import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import "./../../assets/QuizInfo.css";

function QuizInfo(props: any) {
  const [questions, setquestions] = useState("");
  useEffect(() => {
    const fetchQuiz = async () => {
      //await fetch(`/planets/${props.name}`)
      setquestions("");
    };
    fetchQuiz();
  }, []);

  const [data, setData] = useState<any[]>([])

  const getData = () => {
    fetch('quiz.json'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(function (response) {
        console.log(response)
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        const filtered = myJson.filter(function (n: any) {
          console.log('\"' + n.subject + '\" ');
          console.log('\"' + props.quizName.toLowerCase() + '\"')
          return n.subject === props.quizName.toLowerCase()
        })
        console.log(filtered);
        setData(filtered);
      });
  }
  useEffect(() => {
    getData()
  }, [])


  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [showTotalScore, setShowTotalScore] = useState(false);
  const [score, setScore] = useState(0);
  let next = false;

  const answerOptionClicked = (isCorrect: any) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    next = true;
  };

  const confirmNextQuestion = () => {
    if ((next = true)) {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < data.length) {
        setcurrentQuestion(nextQuestion);
      } else {
        setShowTotalScore(true);
      }
    }
    next = false;
  };

  console.log(data[currentQuestion])
  if(data.length === 0){
    return null
  }else{
  return (
    <div style={{ color: "Navy", justifyContent: "center" }}>
      {" "}
      This is the {props.quizName} Quiz
      <div>
        {showTotalScore ? (
          <div className="Score">
            You scored {score} out of {data.length}
          </div>
        ) : (
          <>
            <div className="Questions">
              <div className="Counter">
                <span>Question {currentQuestion + 1}</span>/{data.length}
              </div>
              <h4 className="Choices">
                {data[currentQuestion].question}
              </h4>
              <div style={{ color: "red" }}>
                Select one of the answers by clicking on it and then confirm your
                answer with pressing confirm
              </div>
            </div>
            <div className="AnswerOptions">
              {data[currentQuestion].answerOptions.map((answerOptions: any) => (
                <Button
                  className="buttonAnswer"
                  size="small"
                  variant="outlined"
                  onClick={() => {
                    answerOptionClicked(answerOptions.isCorrect);
                  }}
                  style={{ left: "10px" }}
                >
                  {" "}
                  {answerOptions.choice}{" "}
                </Button>
              ))}
            </div>
            <div className="buttons">
              <Button
                variant="contained"
                onClick={() => confirmNextQuestion()}
                style={{
                  background: "black",
                  color: "white",
                  left: "80px",
                  top: "10px",
                }}
              >
                Confirm
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
  }
}
export default QuizInfo;

