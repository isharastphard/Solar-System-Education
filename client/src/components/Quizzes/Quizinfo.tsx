import React, { useEffect, useState } from "react";
import { Button, Grid } from "@material-ui/core";
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

  const [data, setData] = useState<any[]>([]);
  const getData = async () => {
    await fetch("/Quiz", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        const filtered = myJson.filter(function (n: any) {
          console.log('"' + n.subject + '" ');
          console.log('"' + props.quizName.toLowerCase() + '"');
          return n.subject === props.quizName.toLowerCase();
        });
        console.log(filtered);
        setData(filtered);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  const [chosenAnswer, setChosenAnswer] = useState(null);
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

  console.log(data[currentQuestion]);
  if (data.length === 0) {
    return null;
  } else {
    return (
      <div style={{ color: "#fec604" }}>
        {" "}
        <span className="planetTitle">
          <header className="heading">
            This is the {props.quizName} Quiz{" "}
          </header>
        </span>
        <div>
          {showTotalScore ? (
            <h2 className="Score">
              You scored {score} out of {data.length}
            </h2>
          ) : (
            <>
              <div className="Questions">
                <div className="counter">
                  <span>Question {currentQuestion + 1}</span>/{data.length}
                </div>
                <h4 className="choices">{data[currentQuestion].Question}</h4>
                <p className="warning">
                  Select one of the answers by clicking on it and then confirm
                  your answer with pressing confirm
                </p>
              </div>
              <Grid
                className="answerOptions"
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                {data[currentQuestion].answerOptions.map(
                  (answerOptions: any) => (
                    <Button
                      className="buttonAnswer"
                      size="small"
                      variant="outlined"
                      onClick={() => {
                        answerOptionClicked(answerOptions.isCorrect);
                        setChosenAnswer(answerOptions.choice);
                      }}
                      style={{
                        width: "10em",
                        backgroundColor:
                          answerOptions.choice === chosenAnswer
                            ? "whitesmoke"
                            : "silver",
                          margin: "10px"
                      }}
                    >
                      {" "}
                      {answerOptions.choice}{" "}
                    </Button>
                  )
                )}
              </Grid>
              <Grid
                className="acceptButtons"
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Button
                  className="confirm"
                  variant="contained"
                  onClick={() => {
                    confirmNextQuestion();
                    setChosenAnswer(null);
                  }}
                  style={{ background: "#2E3B55", color: "white" }}
                >
                  Confirm
                </Button>
              </Grid>
            </>
          )}
        </div>
      </div>
    );
  }
}
export default QuizInfo;
