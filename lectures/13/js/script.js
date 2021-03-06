var questions = [{
    question : "When a user views a page containing a JavaScript program, which machine actually executes the script?",
    choices : [ "The User's machine running a Web browser",
        "The Web server",
        "A central machine deep within Netscape's corporate offices",
        "None of the above"],
    correctAnswer : 0
},{
    question : "Which of the following can't be done with client-side JavaScript?",
    choices : [ "Validating a form",
        "Sending a form's contents by email",
        "Storing the form's contents to a database file on the server",
        "None of the above"],
    correctAnswer : 2
},{
    question : "Using _______ statement is how you test for a specific condition",
    choices : [ "select",
        "if",
        "for",
        "none of the above"],
    correctAnswer : 1
},{
    question : "What is the capital of China?",
    choices : [ "Hong Kong",
        "Seoul",
        "Tokyo",
        "Beijing"],
    correctAnswer : 3
},{
    question : "What is the national animal of Pakistan?",
    choices : [ "Chukar",
        "Markhor",
        "Lion",
        "Tiger"],
    correctAnswer : 1
}];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;
displayCurrentQuestion();
document.getElementById("quiz-message").style.display = 'none';


function displayNext() {
    var element = document.querySelector('input[name="answer"]:checked'); 
    if (element == null)
    {
        document.getElementById("quiz-message").style.display = 'block';
        document.getElementById("quiz-message").innerText = 'Please Select an answer';
        return;
    }
    document.getElementById("quiz-message").style.display = 'none';
    if (element.value == questions[currentQuestion].correctAnswer){
        correctAnswers++;
    }
    if (currentQuestion == questions.length - 1)
    {
        displayScore();
        document.getElementById("next-btn").innerHTML = "Start Again";
        currentQuestion=0;
        quizOver = true;
        return;
    }
    currentQuestion++;
    if (quizOver)
    {
        quizOver = false;
        resetQuiz();
        document.getElementById("next-btn").innerHTML = "Next Question";
    }
    displayCurrentQuestion();
}

function displayCurrentQuestion() {
    document.getElementById("question").innerHTML = "";
    var ul = document.getElementById("choice-list").innerHTML = "";
    document.getElementById("question").innerText = questions[currentQuestion].question;
    var ul = document.getElementById("choice-list");
    for (var i = 0; i < questions[currentQuestion].choices.length; i++){
        var li = document.createElement("li");
        li.innerHTML = "<input type='radio' id=radio-"+i+" name='answer' value='"+i+"'>"+questions[currentQuestion].choices[i]+"</input>";
        ul.appendChild(li);
    }
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}
function displayScore() {
    document.getElementById("result").innerHTML = "you scored: " + correctAnswers + " out of: " + questions.length;
    document.getElementById("result").style.display = 'block';
}
function hideScore() {
    document.getElementById("result").style.display = 'none';
}