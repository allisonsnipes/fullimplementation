'use strict';


//dont forget document ready function
//to stop javascript from running prematurely from the page loading 
//same as putting the script from loading -->put on bottom
$(function() {
    $(".start-page").on("click", function() {
        event.preventDefault();
        console.log('hello');
    });
});

//show a question and answer set
//hide start page text





// $( "#dataTable tbody tr" ).on( "click", function() {
//     console.log( $( this ).text() );
//   });

// }

//1.break questions and answers into a store so that data is in a way i need it
//dynamically fluid know if its a right or wrong ans.
//2. how to from start text to 1st question/answer for user
//3. final screen different and start back over 
//redundancy