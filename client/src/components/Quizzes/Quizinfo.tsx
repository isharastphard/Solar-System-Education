import React, { useEffect, useState } from "react";
import {Button} from "@material-ui/core";
import "./../../assets/QuizInfo.css";
function QuizInfo(props: any) {
    const [questions, setquestions] = useState('')
  useEffect( () => {
    const fetchPlanets = async() =>{
        //await fetch(`/planets/${props.name}`)
        setquestions('')
    };
    fetchPlanets();
  }, []);

  
  const question:any = [
      {
      questionText:'What is Earth\'s acceleration due to gravity?',
      answerOptions: [
        { answerText: '0.0', isCorrect: false },
        { answerText: '5.44', isCorrect: false },
        { answerText: '9.8', isCorrect: true },
        { answerText: '16.4', isCorrect: false },
        ],
     },
     {
         questionText: 'Earth is how many planets from the Sun?',
         answerOptions: [
             {answerText: 'Earth is 3rd', isCorrect: true},
             { answerText: 'Earth is 1st', isCorrect: false },
             { answerText: 'Earth is 5th', isCorrect: false },
             { answerText: 'Earth is 4th', isCorrect: false },
         ]
     },
     {
        questionText: 'How many moons does Earth have?',
        answerOptions: [
            {answerText: '6', isCorrect: false},
            { answerText: '1', isCorrect: true },
            { answerText: '4', isCorrect: false },
            { answerText: '12', isCorrect: false },
        ]
     },
     {
        questionText: 'How long is a day on Earth?',
        answerOptions: [
            { answerText: '23 hours', isCorrect: false},
            { answerText: '15 hours', isCorrect: false },
            { answerText: '24 hours', isCorrect: true },
            { answerText: '33 hours', isCorrect: false },
        ]
     },
     {
        questionText: 'What percent of Earth\'s atmosphere is Nitrogen?',
        answerOptions: [
            {answerText: '21', isCorrect: false},
            { answerText: '78', isCorrect: true },
            { answerText: '1', isCorrect: false },
            { answerText: '44', isCorrect: false },
        ]
     },
    ]
    const [onQuestion, setOnQuestion] = useState(0);
	const [showTotalScore, setShowTotalScore] = useState(false);
	const [score, setScore] = useState(0);
    let next = false;

    const answerOptionClicked = (isCorrect:any) => {
		if (isCorrect) {
			setScore(score + 1);
		}
        next = true;
	};

    const confirmNextQuestion = () =>{
        if(next = true){
            const nextQuestion = onQuestion + 1;
		    if (nextQuestion < question.length) {
		    	setOnQuestion(nextQuestion);
		    } else {
			    setShowTotalScore(true);
		    }
        }
        next =false;
    }

  return (
    <div style={{ color: "Navy", justifyContent:"center" }}> This is the {props.quizName} Quiz
        <div> {questions}</div>
            {showTotalScore ? (
				<div className='score-section'>
					You scored {score} out of {question.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {onQuestion + 1}</span>/{question.length}
						</div>
						<h4 className='question-text'>{question[onQuestion].questionText}</h4>
                        <div style={{color:'red'}}>Select one of the answers by click on it and then confirm your answer with pressing confirm</div>
					</div>
					<div className='answer-section'>
						{question[onQuestion].answerOptions.map((answerOption:any) => (
							<Button size="small" variant='outlined' onClick={() => answerOptionClicked(answerOption.isCorrect)} style={{background: "silver"}}>{answerOption.answerText}</Button>
						))}
					</div>
				</>
			)}
            <div className= 'buttons'>
            <Button variant='contained' style={{background: "black", color:'white', right:'2em' }}>Previous</Button>
            <Button variant='contained' onClick= {()=>confirmNextQuestion()} style={{background: "black", color:'white'}}>Confirm</Button>
            <Button variant='contained' style={{background: "black", color:'white', left:'2em'}}>Next</Button>
            </div>

    </div>
  )
}

export default QuizInfo;
