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
];

let i = 0;




function init(){
    showQuestion();
    showAnswers();
    showQuestionCount();
}

function nextQuestion(){
    if(i == questions.length){
        i = 0;
    }else {
        i++;
    };
    init();
}

function showQuestion(){
    let questioncontainer = document.getElementById('questioncontainer');
    let question = questions[i]['question'];


    questioncontainer.innerHTML = '';
    questioncontainer.innerHTML += returnQuestionHTML(question);
}

function showAnswers(){
    let answers = document.getElementById('answercontainer');
    let answer_1 = questions[i]['answer_1'];
    let answer_2 = questions[i]['answer_2'];
    let answer_3 = questions[i]['answer_3'];
    let answer_4 = questions[i]['answer_4'];

    answers.innerHTML = '';
    answers.innerHTML += returnAnswerHTML(answer_1, answer_2, answer_3, answer_4);


}

function showQuestionCount(){
    let questioncount = document.getElementById('questioncount');

    questioncount.innerHTML = '';
    questioncount.innerHTML += returnQuestionCountHTML();
}

function returnQuestionHTML(question){
    return /*html*/`
    Frage: ${question}
    `;
}

function returnAnswerHTML(answer_1, answer_2, answer_3, answer_4){
    return /*html*/`
        <div class="card question-card mb-2">
                        <div class="card-body">
                            ${answer_1}
                        </div>
                    </div>

                    <div class="card question-card mb-2">
                        <div class="card-body">
                            ${answer_2}
                        </div>
                    </div>

                    <div class="card question-card mb-2">
                        <div class="card-body">
                            ${answer_3}
                        </div>
                    </div>

                    <div class="card question-card mb-2">
                        <div class="card-body">
                            ${answer_4}
                        </div>
                    </div>
    `;
}

function returnQuestionCountHTML(){
    return `Frage <b>${i+1}</b> von <b>${questions.length}</b>`;
}