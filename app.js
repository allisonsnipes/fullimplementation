'use strict';

$(function() { 
    //to do list: check ans., restart quiz function, start quiz function, feedback function
    // . used for classes # used for id 
   
    //start quiz and hide start page
    $(".submitbutton").on("click", function(event) {
        event.preventDefault();
        $(".showquiz").show();
        $(".wrapper").hide();
        $(".retakewrapper").hide();
    });

    const quizContainer = document.getElementById('.quizwrapper');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('.submitquiz');

    //display quiz questions
    const questions = [
        {
            Question: "In this year alone, what percentage of women journalists receive harassment for the stories they cover?",
            answers: {
                a: "2/3",
                b: "Internationally, we do not have the figures to back up these claims.",
                c: "1/3",
                d: "It happens more or less developed counties, we do not have the data to back up these claims."
                },
                correctAnswer: "a"
        },

        {
            Question: "To date, which country has the world’s worst ranking of press freedom?",
            answers: {
                a: "Mexico",
                b: "Russia",
                c: "South Sudan",
                d: "North Korea"
            },
            correctAnswer: "d"
        },

        {
            Question: "What is the ranking of the United States on the 2018 World Press Freedom Index?",
            answers: {
                a: "80",
                b: "1",
                c: "30",
                d: "40"
            },
            correctAnswer: "d"
        },
                        
        {
            Question: "What is Russia’s ranking on the 2018 World Press Freedom Index?",
            answers: {
                a: "148",
                b: "80",
                c: "100",
                d: "50"
            },
            correctAnswer: "a"
        },
                        
        {
            Question: "Cyberbullying and/or online bullying is not an infringement on journalists’ freedom.",
            answers: {
                a: "It is online, no real harm is done.",
                b: "No, journalists are just looking for attention, or to stir up tension for their newsfeed.",
                c: "The right to communicate online freely, without barriers, is a fundamental right to everyone: including the press.",
                d: "We all know trolling is a serious problem, but infringement is a too serious of a label to use."
            },
            correctAnswer: "c"
        },
                    
        {
            Question: "Online harassment is less of a concern than physical attacks on journalists.",
            answers: {
                a: "True, as long as the physical person is not harmed—cyberbullying is not an issue.",
                b: "False, online harassment is as serious of an offense as physical attacks.",
                c: "True, press freedom is largely limited and more of a concern offline.",
                d: "No quantifiable data exist on the subject more resources are needed."
            },
            correctAnswer: "b"
        },
                    
        {
            Question: "Which is not an online attack method on journalists that authoritarian regimes in an attempt to silence journalists.",
            answers: {
                a: "Disinformation: journalistic content on social networks is drowned in a flood of fake new and pro-government content.",
                b: "Amplification: the impact of pro-government content is artificially enhanced by commentators who are paid by the government to post messages on social networks or by bots (computer programs that automatically generate posts).",
                c: "Intimidation: journalists are personally targeted, insulted and theatened, in order to discredit them and reduce them to silence.",
                d: "All of the above are forms of attacks on journalists."
            },
            correctAnswer: "d"
        },
                    
        {
            Question: "Press suppression is a third world and/or less developed country’s problem.",
            answers: {
                a: "True, this is largely a less developed country problem.",
                b: "False, it concerns countries from both developed and less developed democracies and governments.",
                c: "True, young governments do not have the resources to enforce press freedom.",
                d: "False, because of fake news and cyberbullying of journalist governments have imposed sanctions on media to stop unintended consequences."
            },
            correctAnswer: "b"
        },

        {
            Question: "This year alone, what percentage of women journalists were harassed offline?",
            answers: {
                a: "25%",
                b: "No data is available to acurrately discuss tnhis problem.",
                c: "75%",
                d: "30%"
            },
            correctAnswer: "a"
        },
    ]

    //make data store like the shopping app
    $(".quizquestions").append(
       `<fieldset class="quizquestions">
						<legend>
							Which country ranks number one in press freedom?
						</legend>
								<div>
									<input type="radio" name="countries" id="Norway">
									<label for="Norway"> Norway</label>
								</div>

								<div>
									<input type="radio" name="countries" id="USA">
									<label for="USA">USA</label>
								</div>

								<div>
									<input type="radio" name="countries" id="Switzerland">
									<label for="Switzerland">Switzerland</label>
								</div>	

								<div>
									<input type="radio" name="countries" id="England">
									<label for="England">England</label>
                                </div>
                    </fieldset>
            <button class=".submitquiz">Submit Quiz</button>
		</form>`
    );

    //for feedback page show and hide quiz page
    $(".submitquiz").on("click", function() {
        event.preventDefault();
        $(".feedbackwrapper").show();
        $(".quizwrapper").hide();
        $(".yesorno").hide();

    });

    //write a question that restart quiz
    $(".ques11").click(function() {
        event.preventDefault();
        location.reload();
    });

    $(".ques12").click(function(){
        event.preventDefault();
        window.location.replace("http://github.com/allisonsnipes");
    });

    
    console.log('works');

});
  
// { <script>
// var count = 0;
// $( "body" ).on( "click", "p", function() {
//   $( this ).after( "<p>Another paragraph! " + (++count) + "</p>" );
// });
// </script> 