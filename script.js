let questions = [
    {
        "question": "Wer wohnt in einer Ananas ganz tief im Meer?",
        "answer_1": "Towlie das Handtuch",
        "answer_2": "Spongebob Schwammkopf",
        "answer_3": "Rick & Morty",
        "answer_4": "Barney Stinson",
        "right_answer": 2
    },

    {
        "question": "Drah di ned um..",
        "answer_1": "die Mädchen ziehn sich um",
        "answer_2": "das Feuerwerk mach bumm",
        "answer_3": "Jeannie fährt dich sonst um",
        "answer_4": "der Kommisar geht um oh oh oh",
        "right_answer": 4
    },

    {
        "question": "Wer ist der Endgegner eines Devs?",
        "answer_1": "Softwaretester",
        "answer_2": "Chat GPT",
        "answer_3": "Larry Page",
        "answer_4": "Oma's Strickset",
        "right_answer": 1
    },

    {
        "question": "Bubatz bald legal?",
        "answer_1": "Einstiegsdroge! Nein!",
        "answer_2": "Fragen Sie doch mal Herrn Aiwanger",
        "answer_3": "Söder sagt nein!",
        "answer_4": "2023",
        "right_answer": 4
    },

    {
        "question": "Welcher Job ist der beste?",
        "answer_1": "Kellner",
        "answer_2": "CEO",
        "answer_3": "Software Entwickler",
        "answer_4": "Feuerwehrmann",
        "right_answer": 3
    },

    {
        "question": "Wie viel Spaß macht programmieren?",
        "answer_1": "1%",
        "answer_2": "20%",
        "answer_3": "10%",
        "answer_4": "100%",
        "right_answer": 4
    },

    {
        "question": "Wer hat die geilste Community?",
        "answer_1": "AfD",
        "answer_2": "Developer Akademie",
        "answer_3": "Sportschützenvereine",
        "answer_4": "Southside Festival",
        "right_answer": 2
    },
];

let i = 0;
let rightanswers = 0;
let AUDIO_SUCCESS = new Audio('audio/success.mp3');
let AUDIO_FAILURE = new Audio('audio/fail.mp3');
let AUDIO_ENDSCREEN = new Audio('audio/yay.mp3');


//<-------------------------------------------- main functions ----------------------------------------------------------->

function init(){
    showQuestion();
    showAnswers();
    showQuestionCount();
}

function nextQuestion(){
    if(i == questions.length -1){
        showEndscreen();

        document.getElementById('progressbar').innerHTML = `100%`;
        document.getElementById('progressbar').style = `width: 100%`;
    }else {
        let progress = (i +1) / questions.length;
        progress = Math.round(progress * 100);
    
        document.getElementById('progressbar').innerHTML = `${progress}%`;
        document.getElementById('progressbar').style = `width: ${progress}%`;
        i++;
    };

    document.getElementById('nextbutton').disabled = true;
    resetButtons();

    init();
}


function answer(sel){
    let question = questions[i];
    let idOfRightAnswer = question['right_answer'];

    if(sel == idOfRightAnswer){
        document.getElementById(`answer${sel}`).parentNode.classList.add('bg-success');
        AUDIO_SUCCESS.play();
        rightanswers++;
    }else {
        document.getElementById(`answer${sel}`).parentNode.classList.add('bg-danger');
        document.getElementById(`answer${idOfRightAnswer}`).parentNode.classList.add('bg-success');
        AUDIO_FAILURE.play();
    };

    document.getElementById('nextbutton').disabled = false;
}



//<--------------------------------- show content functions --------------------------------------------->

function showQuestion(){
    document.getElementById('questioncontainer').innerHTML = questions[i]['question'];
}

function showAnswers(){
    document.getElementById('answer1').innerHTML = questions[i]['answer_1'];
    document.getElementById('answer2').innerHTML = questions[i]['answer_2'];
    document.getElementById('answer3').innerHTML = questions[i]['answer_3'];
    document.getElementById('answer4').innerHTML = questions[i]['answer_4'];
}

function showQuestionCount(){
    let questioncount = document.getElementById('questioncount');

    questioncount.innerHTML = '';
    questioncount.innerHTML += returnQuestionCountHTML();
}

function showEndscreen(){
    let endscreen = document.getElementById('questionanswercontainer');
    document.getElementById('cardheadimage').src = 'img/endscreen-quiz-card-header.jpg';
    endscreen.classList.add('endscreen-design');
    endscreen.innerHTML = '';

    endscreen.innerHTML += /*html*/`
    <h2>Herzlichen Glückwunsch!</h2>
    <h4>Sie haben das Quiz erfolgreich beendet!</h4>
    <span>Ihr Ergebnis: <b>${rightanswers}</b> von <b>${questions.length}</b> richtig beantwortet!</span>
    <button onclick="reloadGame()" class="btn btn-secondary">Nochmal spielen!</button>
    `;

    AUDIO_ENDSCREEN.play();

}


//<--------------------------------------------------- help and return funtions ----------------------------------------------->

function returnQuestionCountHTML(){
    return `Frage <b>${i+1}</b> von <b>${questions.length}</b>`;
}

function resetButtons(){
    document.getElementById('answer1').parentNode.classList.remove('bg-success');
    document.getElementById('answer1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer2').parentNode.classList.remove('bg-success');
    document.getElementById('answer2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer3').parentNode.classList.remove('bg-success');
    document.getElementById('answer3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer4').parentNode.classList.remove('bg-success');
    document.getElementById('answer4').parentNode.classList.remove('bg-danger');
}

function reloadGame(){
    document.getElementById('cardheadimage').src = 'img/quiz-card-header-image.jpg';
    document.getElementById('questionanswercontainer').classList.remove('endscreen-design');
    document.getElementById('progressbar').innerHTML = `0%`;
    document.getElementById('progressbar').style = `width: 0%`;
    rightanswers = 0;
    i = 0;
    restoreCard();
    init();
}

function restoreCard(){
    let card = document.getElementById('questionanswercontainer');
    card.innerHTML = '';

    card.innerHTML += /*html*/`
    <h5 id="questioncontainer" class="card-title"></h5>

    <div id="answercontainer">
        <div class="card answer-card mb-2" onclick="answer(1)">
            <div id="answer1" class="card-body">
                 Antwort
            </div>
        </div>

        <div class="card answer-card mb-2" onclick="answer(2)">
            <div id="answer2" class="card-body">
                 Antwort
            </div>
        </div>

        <div class="card answer-card mb-2" onclick="answer(3)">
            <div id="answer3" class="card-body">
                Antwort
            </div>
        </div>

        <div class="card answer-card mb-2" onclick="answer(4)">
            <div id="answer4" class="card-body">
                Antwort
            </div>
        </div>
    </div>

    <div class="quiz-card-footer">
        <span id="questioncount">

        </span>

        <button id="nextbutton" onclick="nextQuestion()" type="button" class="btn btn-secondary" disabled>Nächste Frage</button>
        </div>
    `;
}