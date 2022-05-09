//global declearations
const question = [];
//questions will be in an array
let questionIndex = 0;

let timerValue = 10 * questions.lenght;
//10 sec per question

let quizComplete = false;


const onLoad = () => {
    //initialize local storage
    // check if highscore exists in LS
   // if false then set highscore to empty array in LS
};

const removeStartSection = () => {};

const startTimer = () => {
     // declare function to every 1 sec
     const countDown = () => {
         //decreament timerValue
         //if quizComplete is true, then stop timer
         //check if timer reaches 0
         //if true render game over
     };
    //setInterval of 1000ms(1s)
   
};

const validateAnswer = () => {
    //get answer click from user
    //get the correct answer for question
    //compare the 2 answers
    //if incorrect, subtract 5 sec from timerValue
    // if question is not last question, increment question index and render next question
    //if question is last question set quizComplete to true and then render form
    
}


const handleFormSubmit = () => {
    //get value from input
    //check if empty then ***render alert with message and status
    //id not empty, then createthe score object
    //{
    //    full name: "Shola Pablo" (input)
      //  score: 25 (timer remaining)       will both be in an array in LS
   // }
   //push score objectto LS
   //render quizCompleteSection
}

const renderTimerSection = () => {
    //use HTML as quide and build in JS
    //append section to main
};

const renderQuestionSection = () => {
    //use HTML as quide and build in JS
    //append section to main
    //add click eventlistener on #question-section
};

const renderGameOver = () => {
    //use HTML as quide and build in JS
    //append section to main
    //if else...for -2 score
};

const renderForm = () => {
     //use HTML as quide and build in JS
    //append section to main

    //add submit event handler to form
    // when form is rendered, then quiz is complete*****
}

const startQuiz = () => {
    //remove start section

    //start timer

    //render timer section

    //render question section
};
//add two event listeners
//add document on load event listener 
//add start button click event listener