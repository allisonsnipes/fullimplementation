'use strict';

//needs to be outside for global access of data only in specific places to preventdefault
$(document).ready(function() { 
  console.log("document ready function working"); //event listener methods
  startQuiz();
  resetQuiz();
  exitQuiz();
  generateQuestion();
  questionDisplay(); 
  comparingAnswers();
});

let score = 0, 
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

    {
        question: "Social media is the best approach for journalist and activists to reach their audience, without having to worry about censorship.",
        answers: {
            a: "Yes, social media by far is the best way for journalist and activists to reach their audience",
            b: "No, drawing too much publicity to their cause could be detrimental--thus they shy away from their use.",
            c: "Possibly, but what other choice do they have to spread their views.",
            d: "No, social media platforms often use imbalanced moderation policies via artificial intelligence that do not allow activists and journals to appeal of removal of their content",
        },
        correctAnswer: "No, social media platforms often use imbalanced moderation policies via artificial intelligence that do not allow activists and journals to appeal of removal of their content",
    },
];

//start quiz and hide start page and other components
function startQuiz() {
    $(".startButton").on("click", function(event) { 
        event.preventDefault();
        console.log("start click functioning");

        $(".wrapper").hide();
        $(".quiz").show();

        questionDisplay(); 
    });
}

//pull out same steps to make own function to call repeatedly in other functions like katie said

function quizProgression() {
}

function comparingAnswers() { //if else statements to set scenerios of when the quiz should end, and if the user provides the right/wrong ans choice
    $(".nextButton").on("click", function(event) {
        event.preventDefault();
        const choiceLetter = $(`input[name='quizchoices']:checked`).val();
        console.log("length is ", questions.length); 

        if ((currentQuestion + 1) === questions.length) { //if get to the last question stop the quiz
            console.log("end quiz function works");
            $(".finishedQuiz").show();
            $(".wrapper").hide();
            $(".quiz").hide();
            resetQuiz();
            exitQuiz();
        } else { //if else for checking right answer
            console.log("line 244 choiceLetter", choiceLetter);
            console.log("questions[currentQuestion].correctAnswer", questions[currentQuestion].correctAnswer);
            if (choiceLetter === questions[currentQuestion].correctAnswer) {// console.log("the choice ans is the correct choice");
                console.log("this what correctAnswer displays: " + questions[currentQuestion].correctAnswer);
                console.log("this is what choice answers displays: " + choiceLetter);
                $(".rightFeebackPart").show(); //generate next question if right
                $(".wrongFeebackPart").hide();
                
                console.log("score = " + score);
                score++;
            } else { // console.log("the else choice ans is the incorrect choice");
                console.log("incorrect choice works");
                $(".wrongFeebackPart").show(); //inform user if wrong but progress to next question
                $(".rightFeebackPart").hide();
                console.log("score = " + score);
            }
            console.log("currentquestion is: " + currentQuestion); //watch clickevent here... dont take out ANY code... console.log out everything here
            console.log("end function percentage function working", percentage);
            calculatePercentage();
            $(".percentPart").removeClass("hide");
            $(".listPercentage").show();
            console.log("question location");
            $(".quizLocation").text("Your on question: " + currentQuestion).show(); 
            currentQuestion++;
            questionDisplay();
            generateQuestion();
        }
    });
}

        // score = 0;
        // currentQuestion = 0;
        // $(".quizLocation").hide();
        // $(".calculatePercentage").show();
        // $(".percentPart").text("Your score so far is " + percentage + "%").removeClass("hide");

        // generateQuestion();
        // questionDisplay();
        // calculatePercentage();


//reseting quiz on reset button click
function resetQuiz() {
    $(".resetButton").on("click", function(event) {
        event.preventDefault();
        console.log("reset button working");
       
        score = 0;
        currentQuestion = 0;

        $(".wrapper").hide();
        $(".quiz").show();
        $(".calculatePercentage").show();
        $(".wrongFeebackPart").hide();
        $(".rightFeebackPart").hide();
        $(".finishedQuiz").hide();
        //should i put quiz here?
        generateQuestion();
        questionDisplay();
        calculatePercentage();
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

function calculatePercentage() { //to calc user's score
    console.log("score = " + score);
    let percentage = ((score/10)*100);
    $(".percentPart").text("Your score so far is " + percentage + "%").removeClass("hide");
}

function questionDisplay() { //displays location of quiz question
    $(".quizLocation").html(`<p class="textForQuestionDisplay"> You are on question: ${currentQuestion + 1} of 10.</p>`);
    // console.log("question number for line number 210 = " + currentQuestion);
}

