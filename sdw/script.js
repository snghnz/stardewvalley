const questions = [
    {
        question: "How many characters can you marry in Stardew Valley?",
        answers: [
            { text: "12", correct: true},
            { text: "10", correct: false},
            { text: "14", correct: false},
            { text: "None of them", correct: false},
        ]
    },
    {
        question: "szerinted?",
        answers: [
            { text: "igasdsden", correct: true},
            { text: "neasdm", correct: false},
            { text: "talxxán", correct: false},
            { text: "levahet", correct: false},
        ]
    },
    {
        question: "valaasgdaxmi?",
        answers: [
            { text: "iasfgen", correct: true},
            { text: "nvxyem", correct: false},
            { text: "taxylán", correct: false},
            { text: "lehbet", correct: false},
        ]
    },
    {
        question: "valaas hnnbvvvvvvmi?",
        answers: [
            { text: "igsfen", correct: true},
            { text: "nexm", correct: false},
            { text: "taxxlán", correct: false},
            { text: "lehxvet", correct: false},
        ]
    },
    {
        question: "vala igenmi?",
        answers: [
            { text: "igyyen", correct: true},
            { text: "ne m", correct: false},
            { text: "talxcván", correct: false},
            { text: "leh xet", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

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

startQuiz();