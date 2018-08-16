'use strict';
//Notes:
//only use global variables sparingly throught the life cycle, not all variables should be global
//keep functions seperate from each
//start on hardcode 1st to see it is it the same
//dont nest functions within functions
//review dot and bracket notation --> think about top down console.log(z[0].car) for nested data
// javascript convention **** jquery is easier it is javascript its just a library
// event.preventDefault(); //look at event as a parameter not as a function name
//to do list: check ans., restart quiz function, start quiz function, feedback function

$(document).ready(function() { //needs to be outside for global access of data only in specific places to preventdefault
  console.log('running');
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

//start quiz and hide start page
$(".start").on("click", function(event) { //dont pass function names here because its going to think its a parameter automatically runs when user clicks
    event.preventDefault();
    console.log("runnning start click");
    $(".quiz").show();
    $(".wrapper").hide();
    $(".feedbackwrapper").hide();
    $(".retakewrapper").hide();
});

$('.reset').click(function() {
    event.preventDefault();
    score = 0;
    $(".wrapper").show();
    $(".quiz").hide();
});

$('.exitquiz').click(function() {
    event.preventDefault();
    window.location.replace("http://thinkful.com");
});

//make data store like the shopping app --> see katie's examples
function generateQuestion(questionIndex) { 
    `return
        <fieldset class="quizquestions">
            <legend>
                ${questions[questionIndex].question}
            </legend>
                <div>
                    <input type="radio" id="${questions[questionIndex].answers.a}">
                    <label for="${questions[questionIndex].answers.a}"> ${questions[questionIndex].answers.a}</label>
                </div>
                <div>
                    <input type="radio" id="${questions[questionIndex].answers.b}">
                    <label for="${questions[questionIndex].answers.b}"> ${questions[questionIndex].answers.b}</label>
                </div>
                <div>
                    <input type="radio" id="${questions[questionIndex].answers.c}">
                    <label for="${questions[questionIndex].answers.c}"> ${questions[questionIndex].answers.c}</label>
                </div>
                <div>
                    <input type="radio" id="${questions[questionIndex].answers.d}">
                    <label for="${questions[questionIndex].answers.d}"> ${questions[questionIndex].answers.d}</label>
                </div>
        </fieldset>
        <button class="submitquiz"> Submit Answer </button>
        <button class="reset"> Restart Quiz </button>
        <button class="exitquiz"> Exit Quiz </button>`;
}

//to do: come up with a function that needs to take in a parameter that is the users ans choice,
// and needs to compare the users ans to the correcrt ans in data stories. Remember 
//each question is its own piece

var numCount = questions.length;

$(".submitquiz").on('click', function() {
    var radioButtons = document.getElementsbyId();
    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) return radioButtons[i].value;
    }
    return '';
});

var userAnswerChoice = radioButtons.value();

function compare(userAnswerChoice) {//not a one for one. this is a parameter (not a variable) the comput exspects a paramater
    if (userAnswerChoice == answers[i].correctAnswer[i]) {
        score ++;
    } else {
        score --;
    }
};

function showFeedback() {

}

  compare(questions);



//goal 8.16.2018: work on compares functions, counters, feedback
//study guide
//whiteboarding
//go at the data like back of hand
//each function is its own peice




// for (var k = question.length - 1; k >0; k--) {
//     event.preventDefault();
//     $('#' + k).hide();
// }

// function questionpopup(question) {
//     (var i = 0; i < question.length; i++) {
//}

// function radioButtons(ary, qNum) {
//     var answers = [];
//     for

// console.log(generateQuestion(0).toString());
