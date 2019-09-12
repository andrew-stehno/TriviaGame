$(document).ready(function () {

    // Game Data:
    // ===============================================

    let gameData = {
        counter: 15,
        userAnswer: "",
        correct: 0,
        incorrect: 0,
    };

    let q1 = {
        question: '"Wurst" and "Worst", are examples of what?',
        answer: 'Homonyms',
        wrong1: 'Synonyms',
        wrong2: 'Heteronyms',
        wrong3: 'Cinnamins',
        homonyms: true,
        giphy: undefined,
    };

    // Game Functions:
    // ===============================================

    $("#start").click(function () {
        init();
    });

    function init() {
        hideButton();
        displayAll();
        // countDown();
    }

    function hideButton() {
        document.getElementById("start").style.visibility = "hidden";
    };

    function displayAll() {
        $("#question").html(q1.question);
        $("#choices").append(<input type="radio" name="q1">q1.answer</input>);
    };
// // let timer = setInterval() {}
//     function countDown() {
//         let timer = setInterval(function() {
//             counter--
//             if (q1.homonyms === true) {
//                 rightAnswer();
//             }
//             ele if (counter === 0) {
//                 console.log("oops");
//                 clearInterval(timer);
//                 wrongAnswer();
//             }
//         }, 1000);
//     };

//     function rightAnswer() {

//     };

//     function wrongAnswer() {

//     };

//     function clockReset() {

//     };

    // function displayButton() {
    //     document.getElementById("start").style.display;
    // };

//     function gameResults() {

//     };

//     function gameReset() {

//     };

});