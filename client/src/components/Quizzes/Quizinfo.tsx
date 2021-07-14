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

  const [data , setData]=useState<string[]>([])

  const getData=()=>{
    fetch('quiz.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        const filtered= myJson.filter(function(n:any){
            console.log('\"'+n.subject+'\" ');
            console.log('\"' + props.quizName.toLowerCase()+'\"')
            return n.subject === props.quizName.toLowerCase()
        })
        console.log(filtered);
        setData(filtered);
      });
  }
  useEffect(()=>{
    getData()
  },[])

  const question: any = [data];
  console.log(question.subject);
 
  
//     const question: any = [
//     {
//       questionText: "What is Earth's acceleration due to gravity?",
//       answerOptions: [
//         { answerText: "0.0", isCorrect: false },
//         { answerText: "5.44", isCorrect: false },
//         { answerText: "9.8", isCorrect: true },
//         { answerText: "16.4", isCorrect: false },
//       ],
//     },
//     {
//       questionText: "Earth is how many planets from the Sun?",
//       answerOptions: [
//         { answerText: "Earth is 3rd", isCorrect: true },
//         { answerText: "Earth is 1st", isCorrect: false },
//         { answerText: "Earth is 5th", isCorrect: false },
//         { answerText: "Earth is 4th", isCorrect: false },
//       ],
//     },
//     {
//       questionText: "How many moons does Earth have?",
//       answerOptions: [
//         { answerText: "6", isCorrect: false },
//         { answerText: "1", isCorrect: true },
//         { answerText: "4", isCorrect: false },
//         { answerText: "12", isCorrect: false },
//       ],
//     },
//     {
//       questionText: "How long is a day on Earth?",
//       answerOptions: [
//         { answerText: "23 hours", isCorrect: false },
//         { answerText: "15 hours", isCorrect: false },
//         { answerText: "24 hours", isCorrect: true },
//         { answerText: "33 hours", isCorrect: false },
//       ],
//     },
//     {
//       questionText: "What percent of Earth's atmosphere is Nitrogen?",
//       answerOptions: [
//         { answerText: "21", isCorrect: false },
//         { answerText: "78", isCorrect: true },
//         { answerText: "1", isCorrect: false },
//         { answerText: "44", isCorrect: false },
//       ],
//     },
//   ];



//   const [onQuestion, setOnQuestion] = useState(0);
//   const [showTotalScore, setShowTotalScore] = useState(false);
//   const [score, setScore] = useState(0);
//   let next = false;
//   const [active, setActive] = useState(false);

//   const answerOptionClicked = (isCorrect: any) => {
//     if (isCorrect) {
//       setScore(score + 1);
//     }
//     next = true;
//   };

//   const confirmNextQuestion = () => {
//     if ((next = true)) {
//       const nextQuestion = onQuestion + 1;
//       if (nextQuestion < question.length) {
//         setOnQuestion(nextQuestion);
//       } else {
//         setShowTotalScore(true);
//       }
//     }
//     next = false;
//   };

return (
        <div style={{ color: "Navy", justifyContent: "center" }}>
          {" "}
          This is the {props.quizName} Quiz
          <div> {questions}</div>
          <div> {data.map((item:any) =>  <>
                    <h4>{item.subject}</h4>
                    <h5>{item.Question}</h5>
                    <p>{item.WrongAnswer[0]} {" "} {item.WrongAnswer[1]} {" "} {item.RightAnswer} {item.WrongAnswer[2]} </p>
                  </>
           )} </div>
        </div>
      );
    
}
export default QuizInfo;

