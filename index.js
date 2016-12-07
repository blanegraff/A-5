var questionNum = 0;
// first question
var question = '<h1>what is your name?</h1>';
// store id="output" in output variable & output
var output = document.getElementById('output');
output.innerHTML = question;

function bot() { 
    var input = document.getElementById("input").value;
    console.log(input);

    if (questionNum == 0) {
    output.innerHTML = '<h1>hello ' + input + '</h1>';
    document.getElementById("input").value = "";
    question = '<h1>how old are you?</h1>';
    setTimeout(timedQuestion, 2000);
    }

    else if (questionNum == 1) {
    output.innerHTML = '<h1>You where born in ' + (2016 - input) + '</h1>';
    document.getElementById("input").value = "";   
    question = '<h1>where are you from?</h1>';					      	
    setTimeout(timedQuestion, 2000);
    }   
}

function timedQuestion() {
    output.innerHTML = question;
}

//push enter key (using jquery), to run bot function.
$(document).keypress(function(e) {
  if (e.which == 13) {
    bot();
    questionNum++;
  }
});
