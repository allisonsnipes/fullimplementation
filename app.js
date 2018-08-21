//Notes:
//only use global variables sparingly throught the life cycle, not all variables should be global
//keep functions seperate from each
//start on hardcode 1st to see it is it the same
//dont nest functions within functions
//review dot and bracket notation --> think about top down console.log(z[0].car) for nested data
//javascript convention **** jquery is easier it is javascript its just a library
//event.preventDefault(); //look at event as a parameter not as a function name
//to do list: check ans., restart quiz function, start quiz function, feedback function

//always put function calls inside of the document ready same as preventdefault 
//ok to call functions within a function
//dont build w/in function

'use strict';

$(document).ready(function() { //needs to be outside for global access of data only in specific places to preventdefault
  console.log("document ready function working");
  startQuiz();
  resetQuiz();
  exitQuiz();
  generateQuestion();
  quizProgression();
  comparingAnswers();
});

var score = 0,
    currentQuestion = 0,
    questions = [
    {
    question: "Which country ranks number one in press freedom?",
    answers: {
        a: "Norway",
        b: "USA",
        c: "Switzerland",
        d: "England"
        },
        correctAnswer: "a"
    },
    {
    question: "In this year alone, what percentage of women journalists receive harassment for the stories they cover?",
    answers: {
        a: "2/3",
        b: "Internationally, we do not have the figures to back up these claims.",
        c: "1/3",
        d: "It happens more or less developed counties, we do not have the data to back up these claims."
        },
        correctAnswer: "a"
    },
    {
    question: "To date, which country has the world’s worst ranking of press freedom?",
    answers: {
        a: "Mexico",
        b: "Russia",
        c: "South Sudan",
        d: "North Korea"
    },
    correctAnswer: "d"
    },
    {
    question: "What is the ranking of the United States on the 2018 World Press Freedom Index?",
    answers: {
        a: "80",
        b: "1",
        c: "30",
        d: "40"
    },
    correctAnswer: "d"
    },
    {
    question: "What is Russia’s ranking on the 2018 World Press Freedom Index?",
    answers: {
        a: "148",
        b: "80",
        c: "100",
        d: "50"
    },
    correctAnswer: "a"
    },
    {
    question: "Cyberbullying and/or online bullying is not an infringement on journalists’ freedom.",
    answers: {
        a: "It is online, no real harm is done.",
        b: "No, journalists are just looking for attention, or to stir up tension for their newsfeed.",
        c: "The right to communicate online freely, without barriers, is a fundamental right to everyone: including the press.",
        d: "We all know trolling is a serious problem, but infringement is a too serious of a label to use."
    },
    correctAnswer: "c"
    },
    {
    question: "Online harassment is less of a concern than physical attacks on journalists.",
    answers: {
        a: "True, as long as the physical person is not harmed—cyberbullying is not an issue.",
        b: "False, online harassment is as serious of an offense as physical attacks.",
        c: "True, press freedom is largely limited and more of a concern offline.",
        d: "No quantifiable data exist on the subject more resources are needed."
    },
    correctAnswer: "b"
    },
    {
    question: "Which is not an online attack method on journalists that authoritarian regimes in an attempt to silence journalists.",
    answers: {
        a: "Disinformation: journalistic content on social networks is drowned in a flood of fake new and pro-government content.",
        b: "Amplification: the impact of pro-government content is artificially enhanced by commentators who are paid by the government to post messages on social networks or by bots (computer programs that automatically generate posts).",
        c: "Intimidation: journalists are personally targeted, insulted and theatened, in order to discredit them and reduce them to silence.",
        d: "All of the above are forms of attacks on journalists."
    },
    correctAnswer: "d"
    },
    {
    question: "Press suppression is a third world and/or less developed country’s problem.",
    answers: {
        a: "True, this is largely a less developed country problem.",
        b: "False, it concerns countries from both developed and less developed democracies and governments.",
        c: "True, young governments do not have the resources to enforce press freedom.",
        d: "False, because of fake news and cyberbullying of journalist governments have imposed sanctions on media to stop unintended consequences."
    },
    correctAnswer: "b"
    },
    {
    question: "This year alone, what percentage of women journalists were harassed offline?",
    answers: {
        a: "25%",
        b: "No data is available to acurrately discuss tnhis problem.",
        c: "75%",
        d: "30%"
    },
    correctAnswer: "a"
    },
];

//start quiz and hide start page and other components
function startQuiz() {
    $(".start").on("click", function(event) { //dont pass function names here, its going to think its a parameter automatically runs when user clicks
        event.preventDefault();
        console.log("start click functioning");
        $(".quiz").show();
        $(".wrapper").hide();
        $(".feedbackwrapper").hide();
        $(".retakewrapper").hide();
    });
}

//reseting quiz on reset button click
function resetQuiz() {
    $("#resetbutton").on("click", function(event) {
        event.preventDefault();
        console.log("reset button working");
        score = 0;
        $(".wrapper").show();
        $(".quiz").hide();
    });
}

//exiting the quiz on button click --not working
function exitQuiz() {
    $("#exitbutton").on("click", function(event) {
        event.preventDefault();
        console.log("exit button working")
        window.location.href = 'https://thinkful.com'
    });
}

//make data store like the shopping app --> see katie's examples
function generateQuestion() {
        $(".showQuiz").html(`<fieldset class="quizquestions">
        <legend>
            ${questions[currentQuestion].question}
        </legend>
            <div>
                <input type="radio" id="${questions[currentQuestion].answers.a}">
                <label for="${questions[currentQuestion].answers.a}"> ${questions[currentQuestion].answers.a}</label>
            </div>
            <div>
                <input type="radio" id="${questions[currentQuestion].answers.b}">
                <label for="${questions[currentQuestion].answers.b}"> ${questions[currentQuestion].answers.b}</label>
            </div>
            <div>
                <input type="radio" id="${questions[currentQuestion].answers.c}">
                <label for="${questions[currentQuestion].answers.c}"> ${questions[currentQuestion].answers.c}</label>
            </div>
            <div>
                <input type="radio" id="${questions[currentQuestion].answers.d}">
                <label for="${questions[currentQuestion].answers.d}"> ${questions[currentQuestion].answers.d}</label>
            </div>
    </fieldset>
    <button class="submitquiz" id="sumbutbutton" type="button">Submit</button>
    <button class="reset" id="resetbutton" type="button"> Restart Quiz </button>
    <button class="exitquiz" id="exitbutton" type="button"> Exit Quiz </button>`);
}

//progress the quiz
function quizProgression() {
    $(".submitquiz").on("click", function(event){
        event.preventDefault();
        currentQuestion++;
        $(".quizquestions").text(currentQuestion+1);
    });
}

//to do: come up with a function that needs to take in a parameter that is the users ans choice,
// and needs to compare the users ans to the correct ans in data stories. Remember 
//each question is its own piece

var choiceLetter;
if (document.getElementById("r1").checked) {
    choiceLetter = document.getElementById("r1").value;
} else if (document.getElementById("r2").checked) {
    choiceLetter = document.getElementById("r2").value;
} else if (document.getElementById("r3").checked) {
    choiceLetter = document.getElementById("r3").value;
} else if (document.getElementById("r4").checked) {
    choiceLetter = document.getElementById("r4").value;
}

function comparingAnswers() {
    $(".submitQuiz").on("click", function(event) {
        event.preventDefault();
        if (choiceLetter === correctAnswer) {
            score++;    
        } else if (choiceLetter !== correctAnswer) {
            alert("I am sorry, but that is the incorrect answer!");
        }
        currentQuestion++;
        generateQuestion++;
    });
}



// function showFeedback() {
//    percentage = score + 'out of' + numCount;
// }

// showFeedback();




//************
//goal 8.16.2018: work on compares functions, counters, feedback
//study guide
//whiteboarding
//go at the data like back of hand
//each function is its own peice

//goal 8.20.2018: fix code, compares functions, counters, feedback
//study guide
//each piece is doable break it down to simple functions and parts => will move faster most popular approach 
//add incrementally then you can debug
//avoid getting multiple bugs only do new stuff when working properly
//be deliberate and methodic


// for (var k = question.length - 1; k >0; k--) {
//     event.preventDefault();
//     $('#' + k).hide();
// }

// function questionpopup(question) {
//     (var i = 0; i < question.length; i++) {
//}