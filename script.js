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

let audioWin = new Audio('audio/win.mp3'); 
let audioLoosing = new Audio('audio/loosing.mp3');


/**
 * Initialisiert das Quiz, setzt die Gesamtanzahl der Fragen
 * und zeigt die erste Frage an.
 */
function init () {
    document.getElementById("all-questions").innerHTML = questions.length; 
    showQuestion();
}

/**
 * Zeigt die aktuelle Frage und die Antwortmöglichkeiten an.
 * Aktualisiert die Fortschrittsanzeige.
 * Wenn alle Fragen beantwortet sind, wird der Endbildschirm angezeigt.
 */
function showQuestion() { 
    if(currentQuestion >= questions.length) { 
        document.getElementById('endScreen').style = ''; 
        document.getElementById('questionBody').style = 'display: none'; 
        document.getElementById('amountOfQuestion').innerHTML = questions.length; 
        document.getElementById('amountOfRightQuestions').innerHTML = rightQuestions; 
        document.getElementById('header-image').src= 'img/trophy.jpg' 
    } else {
        let percent = (currentQuestion + 1) / questions.length ; 
        percent = Math.round(percent * 100); 
        document.getElementById('progress-bar').innerHTML = `${percent} %`; 
        document.getElementById('progress-bar').style = `width: ${percent}%`; 
        let question  = questions[currentQuestion]; 
        document.getElementById('question-number').innerHTML = currentQuestion +1; 
        document.getElementById("questionstext").innerHTML = question["question"]; 
        document.getElementById("answer_1").innerHTML = question["answer_1"]; 
        document.getElementById("answer_2").innerHTML = question["answer_2"]; 
        document.getElementById("answer_3").innerHTML = question["answer_3"]; 
        document.getElementById("answer_4").innerHTML = question["answer_4"]; 
    }
}

/**
 * Wird aufgerufen, wenn eine Antwort ausgewählt wurde.
 * Prüft, ob die Antwort richtig ist, gibt Feedback (Farbe & Sound)
 * und aktiviert den "Nächste Frage"-Button.
 * @param {string} selection - Die ID des ausgewählten Antwort-Elements
 */
function answer(selection){ 
    let question  = questions[currentQuestion]; 
    let selectedQuestionNumber = selection.slice(-1); 
    let idOfRightAnswer = `answer_${question['right_answer']}`; 

    if(selectedQuestionNumber == question['right_answer']){ 
        document.getElementById(selection).parentNode.classList.add('bg-success'); 
        audioWin.play(); 
        rightQuestions++;
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        audioLoosing.play(); 
    }
    document.getElementById('next-button').disabled = false;
}

/**
 * Lädt die nächste Frage und setzt die Antwort-Buttons zurück.
 */
function nextQuestion(){ 
    currentQuestion++; 
    showQuestion();
    document.getElementById('next-button').disabled = true; 
    resetAnswerButton();
    showQuestion();
}

/**
 * Entfernt die farbliche Markierung (richtig/falsch) von allen Antwort-Buttons.
 */
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

/**
 * Startet das Quiz neu, setzt alle Variablen zurück und zeigt die erste Frage an.
 */
function restartGame(){ 
    document.getElementById('header-image').src = 'img/Fragezeichen.jpg';
    document.getElementById('questionBody').style = ''; 
    document.getElementById('endScreen').style = 'display: none'; 
    rightQuestions = 0;
    currentQuestion = 0;
    init();
}