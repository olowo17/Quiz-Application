
const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];



const quiz=document.getElementById('container');
const displayQuestion =document.getElementById('question');
const answers=document.querySelectorAll('.choice');
const optionA = document.getElementById('text_A');
const optionB = document.getElementById('text_B');
const optionC = document.getElementById('text_C');
const optionD = document.getElementById('text_D');
const submitBtn=document.getElementById('submitButton');

let quizIndex=0;
let score = 0;

// Questions to be displayed 

questionToDisplay()

function questionToDisplay() {

    deSelectOption ()
    const currentQuizData=quizData[quizIndex];
    displayQuestion.innerText=currentQuizData.question;

    optionA.innerText=currentQuizData.a;
    optionB.innerText=currentQuizData.b;
    optionC.innerText=currentQuizData.c;
    optionD.innerText=currentQuizData.d;


}

// To deselct an option after clicking

function deSelectOption() {
    answers.forEach(answer => answer.checked=false)
}

// Setting the user answer to the Id of the options available
function userAnswer() {
    let userChoice 
    
    answers.forEach(answer => {
        if (answer.checked) {
            userChoice=answer.id;
        }
    });
    return userChoice
}


submitBtn.addEventListener('click',()=>{
    const userChoice = userAnswer()

    // console.log(userChoice) to check the user's choice
    if (userChoice) {
        if (userChoice === quizData[quizIndex].correct.toUpperCase()) {
            score ++
        }
        quizIndex ++

        if (quizIndex < quizData.length) {
             questionToDisplay()
        }else{
            quiz.innerHTML=`<h2>You scored ${score}/${quizData.length}</h2>
            
            <button onclick = "location.reload()">Reload`
        }
    }
})


