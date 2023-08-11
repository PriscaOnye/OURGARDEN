let menuBox = document.getElementById("menuBox");
let menuIcon = document.getElementById("menuIcon");

menuIcon.onclick = function(){
    menuBox.classList.toggle("open-menu");

    if(menuBox.classList.contains("open-menu")){
        menuIcon.src = "images/close.png";
    }
    else{
        menuIcon.src = "/images/open.png";
    }
}






const questions = [

    {
        question: "Which vegetable is both a root vegetable and a leafy green, with edible parts above and below the ground?",
        answers: [
            {text: "Spinach", correct: false},
            {text: "Bell pepper", correct: false},
            {text: "Cauliflower", correct: false},
            {text: "Radish", correct: true},
        ]
    },

    {
        question: "Which vegetable is characterized by its unique spiral shape and is often used as a low-carb alternative to pasta?",
        answers: [
            {text: "Carrots", correct: false},
            {text: "Zucchini", correct: true},
            {text: "Potatoes", correct: false},
            {text: "Cabbage", correct: false},
        ]
    },

    {
        question: "Which vegetable plant can be grown vertically using supports such as trellises or cages?",
        answers: [
            {text: "Squash", correct: false},
            {text: "Radishes", correct: false},
            {text: "Peas", correct: true},
            {text: "Potatoes", correct: false},
        ]
    },

    {
        question: "What is the process of removing the central stem of a tomato plant to promote better growth called?",
        answers: [
            {text: "Topping", correct: true},
            {text: "Pruning", correct: false},
            {text: "Thinning", correct: false},
            {text: "Transplanting", correct: false},
        ]
    },

    {
        question: "Which vegetable plant produces edible pods and is a member of the legume family?",
        answers: [
            {text: "Pumpkin", correct: false},
            {text: "Green beans", correct: true},
            {text: "Eggplants", correct: false},
            {text: "Lettuce", correct: false},
        ]
    },

    {
        question: "Which vegetable is harvested by cutting off the outer leaves while allowing the inner leaves to continue growing?",
        answers: [
            {text: "Broccoli", correct: false},
            {text: "Lettuce", correct: false},
            {text: "Kale", correct: true},
            {text: "Cabbage", correct: false},
        ]
    },

    {
        question: "Which vegetable is often referred to as a 'superfood' due to its high nutritional value?",
        answers: [
            {text: "Cauliflower", correct: false},
            {text: "Broccoli", correct: true},
            {text: "Radish", correct: false},
            {text: "Pumpkin", correct: false},
        ]
    },

    {
        question: "Which vegetable is known as a 'cool-season crop' and thrives in colder temperatures?",
        answers: [
            {text: "Tomatoes", correct: false},
            {text: "Bell pepper", correct: false},
            {text: "Cucumbers", correct: false},
            {text: "Spinach", correct: true},
        ]
    },

];


const questionTitle = document.getElementById("question");
const answerButtons = document.getElementById("answer_button");
const nextButton = document.getElementById("interact_btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionTitle.innerHTML = questionNo + ". " + currentQuestion.question;


    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btns");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else {
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

function showScore() {
    resetState();
    questionTitle.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();