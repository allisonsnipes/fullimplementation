'use strict';

$(function() { 
    //start first on starter page code when first load
    $(".start").mousemove(function(event) {
        event.preventDefault();
        $(".freedom-class")
            .stop()
            .show()
            .fadeIn(1000)
            .fadeOut(1000)
        $(".substartscreen").hide();
        $(".substartscreenform").hide();
        $(".container").hide();
    });
    
    //button clicked to start quiz should fade in to one question at a time 
    $(".substartscreen").click(function() {
        $(".substartscreen").show()
            .fadeIn(75);
        $(".start").hide();
        $(".substartscreenform").show()
            .fadeIn(100);
    });

    //button clicked to start quiz should fade in to one question at a time
    $(".submitbutton").click(function() {
        $(".start").hide();
        $(".substartscreen").hide();
        $(".substartscreenform").hide();
        $(".start").show();
    });

    //write a function that takes question one by one or whole screen? and quiz location question number

    //write a function that takes the username and gives feedback

    //write a question that restart quiz

    console.log('works');
});


    
  
{/* <script>
var count = 0;
$( "body" ).on( "click", "p", function() {
  $( this ).after( "<p>Another paragraph! " + (++count) + "</p>" );
});
</script> */}

    



    // ************************************
    
    // $(".container").mousemove(function(event){
    //     $("#quiz").hide();
    //     $(".freedom-class").fadeIn("slow");
        
    //  $(".start").mousemove(function() {
    //     $("#js-form-welcome-screen").show();
    // });

    //     console.log('works');
    // });
    




// const quizContainer = document.getElementById('quiz');
// const resultsContainer = document.getElementById('results');
// const submitButton = document.getElementById('submit');

//display quiz questions

//unsure if i should do this method
// const quizQuestions = [
//     {
//         question: "Which country ranks number one in press freedom?"
//         answers: {
//             b: "USA"
//             c: "Switzerland"
//             d: "Great Britian"
//         },
//         correctAnswer: "a"
//     }

// ]

//or this method





// function buildQuiz(){}

// function showResults(){}

//call function for quiz immediately
// buildQuiz();

// //show results when submit button is clicked
// submitButton.addEventListener('click', showResults);

//dont forget event.preventDefault(); possible to do only once.....
//focus on SIMPLE action 