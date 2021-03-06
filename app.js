"use strict";

$(document).ready(function() {//document ready function
    $(".quiz").hide();
    $(".feedbackPartSelection").hide();
    $(".finishedQuiz").hide();
    $(".quizLocation").hide();
    startQuiz();
    resetQuiz();
    exitQuiz();
    generateQuestion();
    questionDisplay(); 
    comparingAnswers();
});

let currentQuestion = 0,
    score = 0,
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

function startQuiz() {//start quiz and hide other components of the quiz not needed at the time
    $(".startButton").on("click", function(event) { 
        event.preventDefault();
        $(".wrapper").hide();
        $(".quiz").show();
        $(".feedbackPartSelection").show();
        $(".finishedQuiz").hide();
        $(".quizLocation").html(`You're on question: ${currentQuestion}`).show(); 
        questionDisplay(); 
    });
}

function comparingAnswers() { //code to compare the users answers to the correct answer
    $(".nextButton").on("click", function(event) {
        event.preventDefault();
        const choiceLetter = $(`input[name='quizchoices']:checked`).val();
        const wrongAnswerText = `I'm sorry, that was the incorrect answer. The correct answer is: ${questions[currentQuestion].correctAnswer}`;
        const rightAnswerText = "Good job! Right answer.";

        if ((currentQuestion + 1) === questions.length) { //if the user gets to the last question stop the quiz
            $(".finishedQuiz").show();
            $(".wrapper").hide();
            $(".quiz").hide();

            if (choiceLetter === questions[currentQuestion].correctAnswer) {//code to generate next question if the user provides right answer
                $(".rightFeebackPart").text(rightAnswerText).show(); 
                $(".wrongFeebackPart").hide();
                score++;
            } else{
                $(".wrongFeebackPart").show().text(wrongAnswerText);//code to let the user know they did not get the correct answer, and provide the correct answer
                $(".rightFeebackPart").hide();
            }
            calculatePercentage("You're final score is: ");//informs the user of their final score
            resetQuiz();
            exitQuiz();
        } else { //if else statement for the user to continue the quiz until the reach the last question
            if (choiceLetter === questions[currentQuestion].correctAnswer) {
                $(".rightFeebackPart").text(rightAnswerText).show(); //generate next question if the user gets the question right
                $(".wrongFeebackPart").hide();
                score++;//increase the users' score if the get the question right
                currentQuestion++;//show the next question if the user gets the previous question correct
            } else if ($(`input[name='quizchoices']:checked`).length <= 0) {//prevents the user from skipping the question without providing an answer choice
                alert ("Please make an answer selection.");//displays an error message to let the user know they have to select an answer before moving on
            } else { 
                $(".wrongFeebackPart").show().text(wrongAnswerText);//informs the user that they selected the wrong answer and shows the correct answer instead
                $(".rightFeebackPart").hide();
                currentQuestion++;//moves on to the next question
            }
            calculatePercentage("You're current score is: ");//informs the user of their current score
            $(".quizLocation").html(`You're on question: ${currentQuestion}`);//informs the user of their location in the quiz
            questionDisplay();
            generateQuestion();
        }
    });
}

function resetQuiz() {//resets the quiz on click
    $(".resetButton").on("click", function(event) {
        event.preventDefault();
        score = 0;//resets the current quiz score
        currentQuestion = 0;//sets the quiz to display the 1st quiz question

        $(".wrapper").hide();
        $(".quiz").show();
        $(".calculatePercentage").show();
        $(".wrongFeebackPart").hide();
        $(".rightFeebackPart").hide();
        $(".finishedQuiz").hide();
        generateQuestion();
        questionDisplay();
        calculatePercentage("You're current score is: ");//informs user of their starting score
    });
}

function exitQuiz() {//exits the quiz on click
    $(".exitButton").on("click", function(event) {
        event.preventDefault();
        window.location.href = "https://thinkful.com";
    });
}

function generateQuestion() {//generates the various quiz questions and answer choices
    $(".quizQuestions").html(` 
        <legend>
            ${questions[currentQuestion].question}
        </legend>
        <div>
            <input id="${questions[currentQuestion].answers.a}" type="radio" name="quizchoices" value="${questions[currentQuestion].answers.a}" checked>
            <label for="${questions[currentQuestion].answers.a}"> ${questions[currentQuestion].answers.a}</label>
        </div>
        <div>
            <input id="${questions[currentQuestion].answers.b}" type="radio" name="quizchoices" value="${questions[currentQuestion].answers.b}">
            <label for="${questions[currentQuestion].answers.b}"> ${questions[currentQuestion].answers.b}</label>
        </div>
        <div>
            <input id="${questions[currentQuestion].answers.c}" type="radio" name="quizchoices" value="${questions[currentQuestion].answers.c}">
            <label for="${questions[currentQuestion].answers.c}"> ${questions[currentQuestion].answers.c}</label>
        </div>
        <div>
            <input id="${questions[currentQuestion].answers.d}" type="radio" name="quizchoices" value="${questions[currentQuestion].answers.d}">
            <label for="${questions[currentQuestion].answers.d}"> ${questions[currentQuestion].answers.d}</label>
        </div>
    `);
}

function calculatePercentage(percentageText) { //calculates the user's score
    const percentage = ((score/10) * 100);
    $(".percentPart").text(`${percentageText} ${percentage} %`);
}

function questionDisplay() { //displays location of quiz question
    $(".quizLocation").html(`<p class="textForQuestionDisplay"> You are on question: ${currentQuestion + 1} of 10.</p>`);
}