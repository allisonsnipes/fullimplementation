$(function() { 
    //start first on starter page code when first load
    $(".start").mousemove(function(event) {
        event.preventDefault();
        $(".freedom-class").show();
        $(".substartscreen").hide();
        $(".substartscreenform").hide();
        $(".container").hide();
    });

    //button clicked to start quiz should fade in to one question at a time 
    
    // $(".").on("click", )
    
    console.log('works');
});


    
  
    

    



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