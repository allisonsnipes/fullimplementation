//Notes:
//only use global variables sparingly throught the life cycle, not all variables should be global
//keep functions seperate from each
//start on hardcode 1st to see it is it the same
//dont nest functions within functions
//review dot and bracket notation --> think about top down console.log(z[0].car) for nested data
//javascript convention **** jquery is easier it is javascript its just a library
//event.preventDefault(); //look at event as a parameter not as a function name
//to do list: check ans., restart quiz function, start quiz function, feedback function
//dont pass function names here, its going to think its a parameter automatically runs when user clicks
//always put function calls inside of the document ready same as preventdefault 
//ok to call functions within a function
//dont build w/in function

'use strict';

//needs to be outside for global access of data only in specific places to preventdefault
$(document).ready(function() { 
  console.log("document ready function working"); //event listener methods
  startQuiz();
  resetQuiz();
  exitQuiz();
  generateQuestion();
  comparingAnswers();
});

var score = 0,
    currentQuestion = 0,
    percentage = ((score/10)*100),
    questions = [
    {
    question: "Which country ranks number one in press freedom?",
    answers: {
        a: "Norway",
        b: "USA",
        c: "Switzerland",
        d: "England"
        },
        correctAnswer: "Norway"
    },

    {
    question: "In this year alone, what percentage of women journalists receive harassment for the stories they cover?",
    answers: {
        a: "2/3",
        b: "Internationally, we do not have the figures to back up these claims.",
        c: "1/3",
        d: "It happens more or less developed counties, we do not have the data to back up these claims."
        },
        correctAnswer: "2/3"
    },

    {
    question: "To date, which country has the world’s worst ranking of press freedom?",
    answers: {
        a: "Mexico",
        b: "Russia",
        c: "South Sudan",
        d: "North Korea"
    },
    correctAnswer: "North Korea"
    },

    {
    question: "What is the ranking of the United States on the 2018 World Press Freedom Index?",
    answers: {
        a: "80",
        b: "1",
        c: "30",
        d: "40"
    },
    correctAnswer: "40"
    },

    {
    question: "What is Russia’s ranking on the 2018 World Press Freedom Index?",
    answers: {
        a: "148",
        b: "80",
        c: "100",
        d: "50"
    },
    correctAnswer: "148"
    },

    {
    question: "Cyberbullying and/or online bullying is not an infringement on journalists’ freedom.",
    answers: {
        a: "It is online, no real harm is done.",
        b: "No, journalists are just looking for attention, or to stir up tension for their newsfeed.",
        c: "The right to communicate online freely, without barriers, is a fundamental right to everyone: including the press.",
        d: "We all know trolling is a serious problem, but infringement is a too serious of a label to use."
    },
    correctAnswer: "The right to communicate online freely, without barriers, is a fundamental right to everyone: including the press."
    },

    {
    question: "Online harassment is less of a concern than physical attacks on journalists.",
    answers: {
        a: "True, as long as the physical person is not harmed—cyberbullying is not an issue.",
        b: "False, online harassment is as serious of an offense as physical attacks.",
        c: "True, press freedom is largely limited and more of a concern offline.",
        d: "No quantifiable data exist on the subject more resources are needed."
    },
    correctAnswer: "False, online harassment is as serious of an offense as physical attacks."
    },

    {
    question: "Which is not an online attack method on journalists that authoritarian regimes in an attempt to silence journalists.",
    answers: {
        a: "Disinformation: journalistic content on social networks is drowned in a flood of fake new and pro-government content.",
        b: "Amplification: the impact of pro-government content is artificially enhanced by commentators who are paid by the government to post messages on social networks or by bots (computer programs that automatically generate posts).",
        c: "Intimidation: journalists are personally targeted, insulted and theatened, in order to discredit them and reduce them to silence.",
        d: "All of the above are forms of attacks on journalists."
    },
    correctAnswer: "All of the above are forms of attacks on journalists."
    },

    {
    question: "Press suppression is a third world and/or less developed country’s problem.",
    answers: {
        a: "True, this is largely a less developed country problem.",
        b: "False, it concerns countries from both developed and less developed democracies and governments.",
        c: "True, young governments do not have the resources to enforce press freedom.",
        d: "False, because of fake news and cyberbullying of journalist governments have imposed sanctions on media to stop unintended consequences."
    },
    correctAnswer: "False, it concerns countries from both developed and less developed democracies and governments."
    },

    {
    question: "This year alone, what percentage of women journalists were harassed offline?",
    answers: {
        a: "25%",
        b: "No data is available to acurrately discuss tnhis problem.",
        c: "75%",
        d: "30%"
    },
    correctAnswer: "25%"
    },
];

//start quiz and hide start page and other components
function startQuiz() {
    $(".startButton").on("click", function(event) { 
        event.preventDefault();
        console.log("start click functioning");
        $(".quiz").show();
        $(".wrapper").hide();
        $(".feedback").hide();
    });
}

//reseting quiz on reset button click
function resetQuiz() {
    $(".resetButton").on("click", function(event) {
        event.preventDefault();
        console.log("reset button working");
        score = 0;
        $(".wrapper").show();
        $(".quiz").hide();
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
    var percentage = ((score/10)*100);
    $(".percentageScore").text(percentage).removeClass("hide");
}

function comparingAnswers() { //print message here saying if right if get correct answer and alert if not submit here then html right/wrong
    $(".nextButton").on("click", function(event) {
        event.preventDefault();
        var choiceLetter1 = $(`input[type='radio'][name='quizchoices'][value='${questions[currentQuestion].answers.a}']:checked`).val();
        var choiceLetter2 = $(`input[type='radio'][name='quizchoices'][value='${questions[currentQuestion].answers.b}']:checked`).val();
        var choiceLetter3 = $(`input[type='radio'][name='quizchoices'][value='${questions[currentQuestion].answers.c}']:checked`).val();
        var choiceLetter4 = $(`input[type='radio'][name='quizchoices'][value='${questions[currentQuestion].answers.d}']:checked`).val();

        console.log('choiceLetter1:', choiceLetter1); //its a function
        console.log('choiceLetter2:', choiceLetter2);
        console.log('choiceLetter3:', choiceLetter3);
        console.log('choiceLetter4:', choiceLetter4);

        console.log('correctAnswer:', questions[currentQuestion].correctAnswer)
        console.log(choiceLetter1 === questions[currentQuestion].answers[ questions[currentQuestion].correctAnswer]);
        
        if (choiceLetter1 === questions[currentQuestion].correctAnswer) {
            $(".rightFeebackPart").show(); //generate next question if right
            $(".wrongFeebackPart").hide();
            score++;
            calculatePercentage();
            $(".listPercentage").show();
            currentQuestion++;
            generateQuestion();
            console.log("choice1 works");
        } else if (choiceLetter1 !== questions[currentQuestion].correctAnswer) {
            $(".rightFeebackPart").hide();
            $(".wrongFeebackPart").show(); //generate current question again if wrong
            calculatePercentage();
            $(".listPercentage").show();
            generateQuestion();
            currentQuestion;
            console.log("not choice1 works");
        } else if (choiceLetter2 === questions[currentQuestion].correctAnswer) {
            $(".wrongFeebackPart").hide();
            $(".rightFeebackPart").show(); 
            score++;
            calculatePercentage();
            $(".listPercentage").show();
            currentQuestion++;
            generateQuestion();
            console.log("choice2 works");
        } else if (choiceLetter2 !== questions[currentQuestion].correctAnswer) {
            $(".rightFeebackPart").hide();
            $(".wrongFeebackPart").show();
            calculatePercentage();
            $(".listPercentage").show();
            generateQuestion();
            currentQuestion;
            console.log("not choice2 works");
        } else if (choiceLetter3 === questions[currentQuestion].correctAnswer) {
            $(".wrongFeebackPart").hide();
            $(".rightFeebackPart").show(); 
            score++;
            calculatePercentage();
            $(".listPercentage").show();
            currentQuestion++;
            generateQuestion();
            console.log("choice3 works");
        } else if (choiceLetter3 !== questions[currentQuestion].correctAnswer) {
            $(".rightFeebackPart").hide();
            $(".wrongFeebackPart").show();
            calculatePercentage();
            $(".listPercentage").show();
            generateQuestion();
            currentQuestion;
            console.log("not choice3 works");
        } else if (choiceLetter4 === questions[currentQuestion].correctAnswer) {
            $(".wrongFeebackPart").hide();
            $(".rightFeebackPart").show(); 
            score++;
            calculatePercentage();
            $(".listPercentage").show();
            currentQuestion++;
            generateQuestion();
            console.log("choice4 works");
        } else if (choiceLetter4 !== questions[currentQuestion].correctAnswer) {
            $(".rightFeebackPart").hide();
            $(".wrongFeebackPart").show();
            calculatePercentage();
            $(".listPercentage").show();
            generateQuestion();
            currentQuestion;
            console.log("not choice4 works");
        } else if (currentQuestion === questions.length) {
            $(".finishedQuizOptions").show();
            console.log("end quiz funcction works");
            calculatePercentage();
            $(".listPercentage").show();
            console.log("percentage function working", percentage);
        } else if (currentQuestion !== questions.length) {
            generateQuestion();
            currentQuestion++;
            console.log("not end quiz works");
        }
    });
}

//goal monday 08.27.2018
//1. generate feedback page--done
//2. get user scores --done
//3. show location of quiz on each page

//************
//goal 8.16.2018: counters, feedback
//study guide
//whiteboarding

//goal 8.20.2018: fix code, compares functions, counters, feedback
//study guide
//each piece is doable break it down to simple functions and parts => will move faster most popular approach 
//add incrementally then you can debug
//avoid getting multiple bugs only do new stuff when working properly
//be deliberate and methodic

//goal thurs 08.23.2018
//1. generate questions only choose one radio button html validation --done
//2. add value attributes to the inputs abcd ==> for comparisons --done
//then questions should start workiung and scores will work