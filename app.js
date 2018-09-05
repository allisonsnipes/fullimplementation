'use strict';

//needs to be outside for global access of data only in specific places to preventdefault
$(document).ready(function() { 
  console.log("document ready function working"); //event listener methods
  startQuiz();
  resetQuiz();
  exitQuiz();
  comparingAnswers();
  generateQuestion();
  questionDisplay();
  nextIncrementQuestion();
});

let score = 0, //becareful
    percentage = ((score/10)*100),
    currentQuestion = 0,
    questions = [
    {
        question: "Which country ranks number one in press freedom?",
        answers: {
            a: "Norway",
            b: "USA",
            c: "Switzerland",
            d: "England",
            },
            correctAnswer: "Norway",
    },
    {
        question: "In this year alone, what percentage of women journalists receive harassment for the stories they cover?",
        answers: {
            a: "2/3",
            b: "Internationally, we do not have the figures to back up these claims.",
            c: "1/3",
            d: "It happens more or less developed counties, we do not have the data to back up these claims.",
            },
            correctAnswer: "2/3",
    },
    {
        question: "To date, which country has the world’s worst ranking of press freedom?",
        answers: {
            a: "Mexico",
            b: "Russia",
            c: "South Sudan",
            d: "North Korea",
        },
        correctAnswer: "North Korea",
    },
    {
        question: "What is the ranking of the United States on the 2018 World Press Freedom Index?",
        answers: {
            a: "80",
            b: "1",
            c: "30",
            d: "40",
        },
        correctAnswer: "40",
    },
    {
        question: "What is Russia’s ranking on the 2018 World Press Freedom Index?",
        answers: {
            a: "148",
            b: "80",
            c: "100",
            d: "50",
        },
        correctAnswer: "148",
    },
    {
        question: "Cyberbullying and/or online bullying is not an infringement on journalists’ freedom.",
        answers: {
            a: "It is online, no real harm is done.",
            b: "No, journalists are just looking for attention, or to stir up tension for their newsfeed.",
            c: "The right to communicate online freely, without barriers, is a fundamental right to everyone: including the press.",
            d: "We all know trolling is a serious problem, but infringement is a too serious of a label to use.",
        },
        correctAnswer: "The right to communicate online freely, without barriers, is a fundamental right to everyone: including the press.",
    },
    {
        question: "Online harassment is less of a concern than physical attacks on journalists.",
        answers: {
            a: "True, as long as the physical person is not harmed—cyberbullying is not an issue.",
            b: "False, online harassment is as serious of an offense as physical attacks.",
            c: "True, press freedom is largely limited and more of a concern offline.",
            d: "No quantifiable data exist on the subject more resources are needed.",
        },
        correctAnswer: "False, online harassment is as serious of an offense as physical attacks.",
    },
    {
        question: "Which is not an online attack method on journalists that authoritarian regimes in an attempt to silence journalists.",
        answers: {
            a: "Disinformation: journalistic content on social networks is drowned in a flood of fake new and pro-government content.",
            b: "Amplification: the impact of pro-government content is artificially enhanced by commentators who are paid by the government to post messages on social networks or by bots (computer programs that automatically generate posts).",
            c: "Intimidation: journalists are personally targeted, insulted and theatened, in order to discredit them and reduce them to silence.",
            d: "All of the above are forms of attacks on journalists.",
        },
        correctAnswer: "All of the above are forms of attacks on journalists.",
    },
    {
        question: "Press suppression is a third world and/or less developed country’s problem.",
        answers: {
            a: "True, this is largely a less developed country problem.",
            b: "False, it concerns countries from both developed and less developed democracies and governments.",
            c: "True, young governments do not have the resources to enforce press freedom.",
            d: "False, because of fake news and cyberbullying of journalist governments have imposed sanctions on media to stop unintended consequences.",
        },
        correctAnswer: "False, it concerns countries from both developed and less developed democracies and governments.",
    },
    {
        question: "This year alone, what percentage of women journalists were harassed offline?",
        answers: {
            a: "25%",
            b: "No data is available to acurrately discuss tnhis problem.",
            c: "75%",
            d: "30%",
        },
        correctAnswer: "25%",
    },
];

//start quiz and hide start page and other components
function startQuiz() {
    $(".startButton").on("click", function(event) { 
        event.preventDefault();
        console.log("start click functioning");
        
        score = 0;
        currentQuestion = 0;

        $(".wrapper").hide();
        $(".quiz").show();
        $(".quizLocation").show();
        $(".calculatePercentage").show();
        $(".quizLocation").text("Your on question: " + currentQuestion).hide();

        // generateQuestion();
        // questionDisplay();
    });
}

//reseting quiz on reset button click
function resetQuiz() {
    $(".resetButton").on("click", function(event) {
        event.preventDefault();
        console.log("reset button working");
       
        score = 0;
        currentQuestion = 0;

        $(".wrapper").show();
        $(".quiz").hide();
        $(".percentPart").hide();
        $(".quizLocation").text("Your on question: " + currentQuestion).hide();
        $(".finishedQuiz").hide();

        // startQuiz();
        // generateQuestion();
        
    });
}

//exiting the quiz on button click
function exitQuiz() {
    $(".exitButton").on("click", function(event) {
        event.preventDefault();
        console.log("exit button working");
        window.location.href = 'https://thinkful.com';
    });
}

//make data store like the shopping app
function generateQuestion() {
        $(".quizQuestions").html(`
            <legend>
                ${questions[currentQuestion].question}
            </legend>
            <div>
                <input type="radio" name="quizchoices" value="${questions[currentQuestion].answers.a}">
                <label for="${questions[currentQuestion].answers.a}"> ${questions[currentQuestion].answers.a}</label>
            </div>
            <div>
                <input type="radio" name="quizchoices" value="${questions[currentQuestion].answers.b}">
                <label for="${questions[currentQuestion].answers.b}"> ${questions[currentQuestion].answers.b}</label>
            </div>
            <div>
                <input type="radio" name="quizchoices" value="${questions[currentQuestion].answers.c}">
                <label for="${questions[currentQuestion].answers.c}"> ${questions[currentQuestion].answers.c}</label>
            </div>
            <div>
                <input type="radio" name="quizchoices" value="${questions[currentQuestion].answers.d}">
                <label for="${questions[currentQuestion].answers.d}"> ${questions[currentQuestion].answers.d}</label>
            </div>
        `);
}

function nextIncrementQuestion() {
    const incremental = currentQuestion++;
}

function calculatePercentage() { //to calc user's score
    console.log("score = " + score);
    let percentage = ((score/10)*100);
    $(".percentPart").text("Your score so far is " + percentage + "%").removeClass("hide");
}

function questionDisplay() {
    $(".quizLocation").html(`
        <p class="quizLocation"> You are on question: ${currentQuestion}</p>
    `);
    console.log("question number = " + currentQuestion);
}

function comparingAnswers() { //print message here saying if right if get correct answer and alert if not submit here then html right/wrong
    $(".nextButton").on("click", function(event) {
        event.preventDefault();
       
        console.log("currentquestion is: " + currentQuestion); //watch clickevent here dont take out ANY code console.log out everything here
        currentQuestion++;
        const choiceLetter = $(`input[name='quizchoices']:checked`).val();
        
        // console.log("quiz progression function working");
        // console.log('choiceLetter:', choiceLetter); //its a function
        // console.log('currentQuestion:', currentQuestion);
        // console.log('question', questions[currentQuestion].question);
        // console.log('correctAnswer:', questions[currentQuestion].correctAnswer);

        //if else for checking right answer
        if (currentQuestion === questions.length) {
                console.log("end quiz function works");
                $(".finishedQuiz").show();
 
                $(".wrapper").hide();
                $(".quiz").hide();

                calculatePercentage();
                $(".percentPart").removeClass("hide");
                // console.log("end function percentage function working", percentage);
                $(".quizLocation").text("Your on question: " + currentQuestion).show();
                resetQuiz();
                exitQuiz();    
        } else {
            if (choiceLetter === questions[currentQuestion].correctAnswer) {
                console.log("this what correctAnswer displays: " + correctAnswer);
                console.log("this is what choice answers displays: " + choiceLetter);

                // console.log("the choice ans is the correct choice");
                $(".rightFeebackPart").show(); //generate next question if right
                $(".wrongFeebackPart").hide();
                score++;
                calculatePercentage();
                $(".listPercentage").show();
                // console.log("correct choice works");
                // console.log("current question line 230 ", currentQuestion);
                currentQuestion++;
                generateQuestion(); 
                // console.log("generating new choice works");
                console.log("question location");
                $(".quizLocation").text("Your on question: " + currentQuestion).show();
                questionDisplay();
                // console.log("question number = " + currentQuestion);
                //put incremental here think about what is condition based or notquizProgression();
            } else {
                // console.log("the else choice ans is the incorrect choice");
                $(".rightFeebackPart").hide();
                $(".wrongFeebackPart").show(); //generate current question again if wrong
                score;
                calculatePercentage();
                $(".listPercentage").show();
                // console.log("incorrect choice works");
                // console.log("staying put to select correct answer");
                console.log("question location");
                $(".quizLocation").text("Your on question: " + currentQuestion).show();
                questionDisplay();
                generateQuestion();
                // console.log("question number = " + currentQuestion);
            }
        }
    });
}