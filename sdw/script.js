const questions = [
    {
        question: "Hány éves Arnold Schwarzenegger?",
        answers: [
            { text: "65", correct: false},
            { text: "76", correct: true},
            { text: "79", correct: false},
            { text: "74", correct: false},
        ]
    },
    {
        question: "Melyik Amerikai államnak volt a kormányzója?",
        answers: [
            { text: "Texas", correct: false},
            { text: "New Jersey", correct: false},
            { text: "Florida", correct: false},
            { text: "Kalifornia", correct: true},
        ]
    },
    {
        question: "Hány gyermeke született?",
        answers: [
            { text: "5", correct: true},
            { text: "4", correct: false},
            { text: "0", correct: false},
            { text: "6", correct: false},
        ]
    },
    {
        question: "Hány filmje van körülbelül?",
        answers: [
            { text: "kb.75", correct: false},
            { text: "kb.100", correct: false},
            { text: "kb.30", correct: false},
            { text: "kb.50", correct: true},
        ]
    },
    {
        question: "Hol született?",
        answers: [
            { text: "Berlin-ben", correct: false},
            { text: "Köln-ben", correct: false},
            { text: "Thal-ban", correct: true},
            { text: "Bécs-ben", correct: false},
        ]
    },
    {
        question: "Hányszor nyerte el a Mr.Olympia címet?",
        answers: [
            { text: "8", correct: false},
            { text: "7", correct: true},
            { text: "6", correct: false},
            { text: "5", correct: false},
        ]
    },
    {
        question: "Mi volt a legelső sportja?",
        answers: [
            { text: "Úszás", correct: false},
            { text: "Foci", correct: true},
            { text: "Súlyemelés", correct: false},
            { text: "Atlétika", correct: false},
        ]
    },
    {
        question: "Hány évesen kezdte meg hivatalosan versenykarrierét a súlyemelésben?",
        answers: [
            { text: "14", correct: false},
            { text: "18", correct: false},
            { text: "22", correct: false},
            { text: "17", correct: true},
        ]
    },
    {
        question: "Hány forint volt a híres 'Hasta la vista baby' mondata?",
        answers: [
            { text: "1 millió", correct: false},
            { text: "30 millió", correct: true},
            { text: "0.5 millió", correct: false},
            { text: "100 millió", correct: false},
        ]
    },
    {
        question: "Mennyivel nyomott fekve?",
        answers: [
            { text: "130kg", correct: false},
            { text: "510kg", correct: false},
            { text: "220kg", correct: true},
            { text: "50kg", correct: false},
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