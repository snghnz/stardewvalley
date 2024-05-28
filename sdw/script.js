const questions = [
    {
        question: "Who do you inherit the farm from?",
        answers: [
            { text: "Grandpa", correct: true},
            { text: "Cousin", correct: false},
            { text: "Father", correct: false},
            { text: "Uncle", correct: false},
        ]
    },
    {
        question: "What is the town called?",
        answers: [
            { text: "Eagle town", correct: false},
            { text: "Seagull town", correct: false},
            { text: "Pelican town", correct: true},
            { text: "Flamingo town", correct: false},
        ]
    },
    {
        question: "How many characters can you see on our website?",
        answers: [
            { text: "32", correct: false},
            { text: "38", correct: false},
            { text: "43", correct: true},
            { text: "49", correct: false},
        ]
    },
    {
        question: "How many marriable characters are there?",
        answers: [
            { text: "0, you can't marry anyone", correct: false},
            { text: "6", correct: false},
            { text: "12", correct: true},
            { text: "18", correct: false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNO = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNO + "." + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button); 
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.
        length}!`;
        nextButton.innerHTML = "Restart";
        nextButton.style.display = "block";
    }



function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})


startQuiz();