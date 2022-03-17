function showAns(number) {
    let track;
    let answer = document.getElementById('answer'+number);
    let arrowicon = document.getElementById('arrowicon'+number);
    let question = document.getElementById('question'+number);
    if (answer.classList.contains('hide')) {
        answer.classList.remove('hide');
        arrowicon.classList.add('arrowicon');
        question.classList.add('questionclickedcolor');
        let track = true;
    }else{
        answer.classList.add('hide');
        arrowicon.classList.remove('arrowicon');
        question.classList.remove('questionclickedcolor');
        let track = false;
    }
    hideOthers(track, number);
}
function hideOthers(track, number){
    for(let i=0 ; i<5 ; i++){
        let answers = document.querySelectorAll('[data-target="answer"]');
        let arrowicons = document.getElementsByClassName('arrowicons');
        let questions = document.getElementsByClassName('questions');
        if (track = true && i !== number){
            answers[i].classList.add('hide');
            arrowicons[i].classList.remove('arrowicon');
            questions[i].classList.remove('questionclickedcolor');
        }
    }
}

// function showAns(number) {
//     let answers = document.getElementById('answer'+number);
//     let arrowicons = document.getElementById('arrowicon'+number);
//     let questions = document.getElementById('question'+number);
//     answers.classList.toggle('hide');
//     arrowicons.classList.toggle('arrowicon');
//     questions.classList.toggle('questionclickedcolor');
// }