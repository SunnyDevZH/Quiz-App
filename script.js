let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berner-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "Wer hat HTML erfunden",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berner-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "Wer hat HTML erfunden",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berner-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "Wer hat HTML erfunden",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berner-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "Wer hat HTML erfunden",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berner-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    
];

let rightQuestions = 0
let currentQuestion = 0;

let audioWin = new Audio('audio/win.mp3'); // Audio einbinden
let audioLoosing = new Audio('audio/loosing.mp3');

//FUNKTION 1
function init () {
    document.getElementById("all-questions").innerHTML = questions.length; // gibt Auskunft über die läneg vom Array

    showQuestion();
}
//FUNKTION 2
function showQuestion() { // ausgelösst durch Funktion 1

    if(currentQuestion >= questions.length) { // Falls die aktuelle Frage gleich gross oder grösser ist als die Aktuelle
        document.getElementById('endScreen').style = ''; // zugriff auf style tag nicht
        document.getElementById('questionBody').style = 'display: none'; // Zugriff auf style display none

        document.getElementById('amountOfQuestion').innerHTML = questions.length; //  gibt Auskunft über die läneg vom Array
        document.getElementById('amountOfRightQuestions').innerHTML = rightQuestions; // gibt Auskunft über die anzahl richtiger fragen
        document.getElementById('header-image').src= 'img/trophy.jpg' // Zugriff auf bild
    }else {

        let percent = (currentQuestion + 1) / questions.length ; // Berechnung Progressbar
        percent = Math.round(percent * 100); // um mit 100% zu rechnen und runden

        document.getElementById('progress-bar').innerHTML = `${percent} %`; // Zugriff auf inhalt von percent
        document.getElementById('progress-bar').style = `width: ${percent}%`; // Zugriff auf style width

        let question  = questions[currentQuestion]; // Questions begint an der Stelle 0

        document.getElementById('question-number').innerHTML = currentQuestion +1; // gibt Auskunft über aktuelle Frage
    
        document.getElementById("questionstext").innerHTML = question["question"]; 
        document.getElementById("answer_1").innerHTML = question["answer_1"]; 
        document.getElementById("answer_2").innerHTML = question["answer_2"]; 
        document.getElementById("answer_3").innerHTML = question["answer_3"]; 
        document.getElementById("answer_4").innerHTML = question["answer_4"]; 
    }
}

//FUNKTION 3
function answer(selection){ // ausgelösst durch onlick
    let question  = questions[currentQuestion]; // Questions begint an der Stelle 0
    let selectedQuestionNumber = selection.slice(-1); // Zugriff auf das letzte Array

    let idOfRightAnswer = `answer_${question['right_answer']}`; // Zugriff aus Array righ_answer

    if(selectedQuestionNumber == question['right_answer']){ // Falls die ausgewählte Frage gleich wie die richtige Frage
        document.getElementById(selection).parentNode.classList.add('bg-success'); // ParentNode = zugriff auf den übergeordneten DIV Classe hinzufügen
        audioWin.play(); // Audio abspielen
        rightQuestions++;
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        audioLoosing.play(); // Audio abspielen
    }

    document.getElementById('next-button').disabled = false; //nicht verfügbar falsch oder wahr
}

function nextQuestion(){ // ausgelösst durch onclick next button
    currentQuestion++; // Es wird zur nächsten Frage gesprungen von 0 auf 1
    showQuestion(); // Fragen werden angeziegt

    document.getElementById('next-button').disabled = true; //nicht verfügbar falsch oder wahr
    resetAnswerButton();
    showQuestion();

}
function resetAnswerButton(){
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function restartGame(){ //Game wieder starten
    document.getElementById('header-image').src = 'img/Fragezeichen.jpg';
    document.getElementById('questionBody').style = ''; // Questionbody anzeigen
    document.getElementById('endScreen').style = 'display: none'; // Endscreen nicht mehr anzeigen

    rightQuestions = 0;
    currentQuestion = 0;

    init();
}