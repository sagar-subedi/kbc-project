
const winAmount = ['5,000', '10,000', '20,000', '40,000', '80,000', '1,60,000', '3,20,000','6,40,000','12,50,000', '25,00,000','50,00,000', '1,00,000'];

const maxLevel = 11;
let currentLevel = 1;
let isQuizActive = false;
const questions = [
    {
        question: "Grand Central Terminal, Park Avenue, New York is the world's",
        option1: "largest railway station",
        option2: "highest railway station",
        option3: "longest railway station",
        option4: "None of the above",
        correctAnswer: "largest railway station",
        explanation: "Grand Central Terminal in New York City, USA: Grand Central Terminal is one of the most iconic and busiest railway stations in the world, serving over 750,000 passengers per day. It is located in midtown Manhattan and has 44 platforms, making it one of the largest railway stations by platform count."
    },
    {
        question: "Entomology is the science that studies",
        option1: "Behavior of human beings",
        option2: "Insects",
        option3: "The origin and history of technical and scientific terms",
        option4: "The formation of rocks",
        correctAnswer: "Insects",
        explanation: "Entomology: The branch of zoology concerned with the study of insects."
    },
    {
        question: "Eritrea, which became the 182nd member of the UN in 1993, is in the continent of",
        option1: "Asia",
        option2: "Africa",
        option3: "Europe",
        option4: "Australia",
        correctAnswer: "Africa",
        explanation: "State of Eritrea, is a country in the Horn of Africa region of Eastern Africa, with its capital and largest city at Asmara."
    },
    {
        question: "Garampani sanctuary is located at",
        option1: "Junagarh, Gujarat",
        option2: "Diphu, Assam",
        option3: "Kohima, Nagaland",
        option4: "Gangtok, Sikkim",
        correctAnswer: "Diphu, Assam",
        explanation: ""
    },
    {
        question: "For which of the following disciplines is Nobel Prize awarded?",
        option1: "Physics and Chemistry",
        option2: "Physiology or Medicine",
        option3: "Literature, Peace and Economics",
        option4: "All of the above",
        correctAnswer: "All of the above",
    },
    {
        question: "What is the capital of France?",
        option1: "London",
        option2: "Berlin",
        option3: "Madrid",
        option4: "Paris",
        correctAnswer: "Paris",
        explanation: "The capital of France is Paris, known for its rich history, culture, and iconic landmarks like the Eiffel Tower and Louvre Museum."
      },
      {
        question: "Which planet is known as the Red Planet?",
        option1: "Earth",
        option2: "Mars",
        option3: "Venus",
        option4: "Jupiter",
        correctAnswer: "Mars",
        explanation: "Mars is often referred to as the Red Planet due to its reddish appearance, caused by iron oxide (rust) on its surface."
      }
      ,
      {
        question: "Who wrote the play 'Romeo and Juliet'?",
        option1: "William Shakespeare",
        option2: "Charles Dickens",
        option3: "Jane Austen",
        option4: "Leo Tolstoy",
        correctAnswer: "William Shakespeare",
        explanation: "The play 'Romeo and Juliet' was written by the famous English playwright William Shakespeare."
      },
      {
        question: "Which gas do plants absorb from the atmosphere?",
        option1: "Oxygen",
        option2: "Carbon dioxide",
        option3: "Nitrogen",
        option4: "Hydrogen",
        correctAnswer: "Carbon dioxide",
        explanation: "Plants absorb carbon dioxide (CO2) from the atmosphere during photosynthesis, a process that helps them produce oxygen and glucose."
      },
      {
        question: "What is the largest mammal in the world?",
        option1: "Giraffe",
        option2: "African elephant",
        option3: "Blue whale",
        option4: "Kangaroo",
        correctAnswer: "Blue whale",
        explanation: "The blue whale is the largest mammal on Earth, and it can grow to be the largest animal to have ever existed."
      },
      {
        question: "Which country is known as the Land of the Rising Sun?",
        option1: "China",
        option2: "Japan",
        option3: "South Korea",
        option4: "Vietnam",
        correctAnswer: "Japan",
        explanation: "Japan is often referred to as the Land of the Rising Sun because of its name's literal translation and its position to the east of the Asian continent."
      },
      {
        question: "What is the chemical symbol for gold?",
        option1: "Ag",
        option2: "Ge",
        option3: "Au",
        option4: "Hg",
        correctAnswer: "Au",
        explanation: "The chemical symbol for gold is 'Au,' which comes from the Latin word 'aurum.'"
      }   
]

let currentQuestion = questions[currentLevel];


let john = {
    email:"john@gmail.com",
    password:"pass"
};
let users = getUsers();
let leaderboard = getLeaderboard();
console.log(users);

if(users.length === 0){
    users = [];
    users.push(john);
    saveUsers(users);
    setCurrentUser(john);
}

if(leaderboard.length === 0){
    const newLeaderboard = '[{"email":"sagar@gmail.com","score":9,"date":"Mon Sep 25 2023 09:11:40 GMT+0545 (Nepal Time)"},{"email":"sagar@gmail.com","score":6,"date":"Mon Sep 25 2023 12:22:03 GMT+0545 (Nepal Time)"},{"email":"sagar@gmail.com","score":4,"date":"2023-09-24T17:24:50.096Z"},{"email":"sagar@gmail.com","score":3,"date":"Sun Sep 24 2023 23:59:13 GMT+0545 (Nepal Time)"},{"email":"sagar@gmail.com","score":2,"date":"Mon Sep 25 2023 08:12:05 GMT+0545 (Nepal Time)"}]';
    localStorage.setItem('leaderboard', newLeaderboard);
}





let currentUser = getCurrentUser();
document.getElementById("current-user").innerText = currentUser.email;
let userLoggedin = currentLevel !== null;
const homeUrl = 'https://illustrious-cascaron-2979a1.netlify.app/'; 
const loginPageUrl = 'https://illustrious-cascaron-2979a1.netlify.app/login';
const leaderboardPageUrl = 'https://illustrious-cascaron-2979a1.netlify.app/leaderboard';



initializeQuizPage();


function handleLogout(){
    localStorage.setItem('currentUser', "");
    window.location.href = loginPageUrl; 
}

function onStartQuiz(){
    //todo: later add fetch 10 question from the pool of questions
    resetQuiz();
    toggleQuizDisplay();
    if(isQuizActive) setInfoDiv();

}

function setInfoDiv(){
    const infoDivElement = document.getElementById('info-div');
    infoDivElement.innerHTML = `The question for <span> \u20B9${winAmount[currentLevel]}  </span> is:`;
}


function onNextQuestion() {
    resetCorrectElement();
    currentLevel++;
    loadCurrentQuestion();
    setInfoDiv();
    toggleNextButton();
}

function toggleNextButton(){
    const nextButtonElement = document.getElementById("next-question-btn");
    let currentDisplayStatus = nextButtonElement.style.display;
    nextButtonElement.style.display = currentDisplayStatus === 'none'?'block':'none'
}

//responds to user selecting an answer
function onSelectOption(event){
    const selectedOption = event.target.innerText;
    const optionElements = Array.from(document.getElementsByClassName("option"));
    const correctElement = optionElements.filter((optionElement)=> optionElement.innerText === currentQuestion.correctAnswer)[0];
    const isAnswerCorrect =  selectedOption === currentQuestion.correctAnswer;
    correctElement.style.backgroundColor = '#00ff6a';
    correctElement.style.color = 'black';
    if(isAnswerCorrect){
        correctElement.innerHTML = 'Correct';
        if(currentLevel === maxLevel){
            console.log(`Game completed, you completed ${currentLevel} levels redirecting to the leaderboard`);
            insertToLeaderboard(currentUser.email, currentLevel);
            setTimeout(gotoLeaderBoard, 3000);
           
        }
    }
    else{
        
        event.target.style.backgroundColor = 'red';
        event.target.style.color = 'white';
        console.log("Incorrect Answer");
        event.target.innerText = "Incorrect Answer";
        insertToLeaderboard(currentUser.email, currentLevel);
        setTimeout(gotoLeaderBoard, 3000);
    }
    
    toggleNextButton();
}

//loads the question content to question element
function loadCurrentQuestion(){
    const questionElement = document.getElementById('question');
    const option1Element = document.getElementById('option1');
    const option2Element = document.getElementById('option2');
    const option3Element = document.getElementById('option3');
    const option4Element = document.getElementById('option4');
    
    currentQuestion = questions[currentLevel];
    questionElement.innerText = currentQuestion.question;
    option1Element.innerText = currentQuestion.option1;
    option2Element.innerText = currentQuestion.option2;
    option3Element.innerText = currentQuestion.option3;
    option4Element.innerText = currentQuestion.option4;

}

function resetQuiz(){
    //makes the quiz div invisible, sets currentlevel to zero
    document.getElementById("info-div").innerHTML = "Welcome to KBC. Press START to play";
    document.getElementById("next-question-btn").style.display='none';
    //below code subject to change
    currentLevel = 0;
    loadCurrentQuestion();
}

//takes to leaderboard page
function gotoLeaderBoard(){
    window.location.href = leaderboardPageUrl; 
}

function toggleQuizDisplay() {
    isQuizActive = !isQuizActive;
    const quizElement = document.getElementById("quiz");
    const startStopButtonElement = document.getElementById("start-stop-btn");
    const instructionElement = document.getElementById("instruction");
    quizElement.style.display = isQuizActive?'flex':'none';
    instructionElement.style.display = isQuizActive?'none':'flex'; 
    startStopButtonElement.innerText = isQuizActive?'Quit':'Start';  
}

function initializeQuizPage(){

    if(currentUser == null && window.location.href === homeUrl ){
        window.location.href = loginPageUrl; 
    }
   
    const quizElement = document.getElementById("quiz");
    quizElement.style.display = 'none';
}

function getCorrectElement(){
    const optionElements = Array.from(document.getElementsByClassName("option"));
    const correctElement =  optionElements.filter((optionElement)=> optionElement.innerText === currentQuestion.correctAnswer ||  optionElement.innerText === 'Correct')[0];
    console.log(correctElement);
    return correctElement;
}

function resetCorrectElement(){
    const correctElement = getCorrectElement();
    // correctElement.style.backgroundColor = "#2a133d";
    // correctElement.style.color = "goldenrod";
    correctElement.style = {};
}


