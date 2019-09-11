$(document).ready(function () {

    // Game Data:
    // ===============================================

    let gameData = {
        startButton: document.getElementById("#start").innerHTML,
        counter: 15,
        userAnswer: "",
        correct: 0,
        incorrect: 0,
    }

    let q1 = {
        question: '"Wurst" and "Worst", are examples of what?',
        answer: 'Homonyms',
        wrong1: 'Synonyms',
        wrong2: 'Heteronyms',
        wrong3: 'Cinnamins',
        homonyms: true,
        giphy: undefined,
    }

    // Game Functions:
    // ===============================================

    $("#start").click(function () {
        init();
    });

    function init() {
        hideButton();
        displayAll();
        countDown();
    }

    function hideButton() {
        gameData.startButton.style.dislay = "none";
    };

    function displayAll() {

    };
// let timer = setInterval() {}
    function countDown() {
        let timer = setInterval(function() {
            counter--
            if (q1.homonyms === true) {
                rightAnswer();
            }
            ele if (counter === 0) {
                console.log("oops");
                clearInterval(timer);
                wrongAnswer();
            }
        }, 1000);
    };

    function rightAnswer() {

    };

    function wrongAnswer() {

    };

    function clockReset() {

    };

    function displayButton(); {

    };

    function gameResults() {

    };

    function gameReset() {

    };

});