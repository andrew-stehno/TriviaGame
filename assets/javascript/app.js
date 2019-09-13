$(document).ready(function () {

    // Game Data:
    // ===============================================

    let gameData = {
        counter: 15,
        userAnswer: "",
        correct: 0,
        incorrect: 0
    };

    let q1 = {
        question: '"Wurst" and "Worst", are examples of what?',
        choices: ['Homonyms', 'Synonyms', 'Heteronyms', 'Cinnamins'],
        correct: q1.choices[0],
        giphy: undefined
    };

    let q2 = {
        question: 'German sausages are known as?',
        choices: ['Lil Smokies', 'Hot Dogs', 'Bratwurst', 'J-Dawgs'],
        correct: q2.choices[2],
        giphy: undefined
    }

    // Game Functions:
    // ===============================================

    $("#start").click(function () {
        init();
    });

    function init() {
        hideButton();
        display();
        // countDown();
    }

    function hideButton() {
        document.getElementById("start").style.visibility = "hidden";
    };

    function display(q1) {
        $("#question").html(globalThis.question);
        let userGuess = "";
        for (let i = 0; i < 4; i++) {
            let userChoice = $('<div>');
            let choice1 = globalThis.choice1[i];
            let choice2 = globalThis.choice1[i];
            let choice3 = globalThis.choice1[i];
            let choice4 = globalThis.choice1[i];

        }console.log(choice1);

    }display(q1);

    // function displayAll() {
    //     $("#question").html(q1.question);
    //     function mulChoic() {
    //         let radioBtn = $('<input type="radio" name="q1"/>');
    //         $('#choices').append(q1.answer);
    //         $('#choices').append(q1.wrong1);
    //         $('#choices').append(q1.wrong2);
    //         $('#choices').append(q1.wrong3);
    //         radioBtn.prependTo('#choices');
    //     }
    //     mulChoic();
    // };

    // let timer = setInterval(){}
    // function countDown() {
    //     let timer = setInterval(function () {
    //         counter--
    //         if (q1.homonyms === true) {
    //             rightAnswer();
    //         }
    //         else if (counter === 0) {
    //             console.log("oops");
    //             clearInterval(timer);
    //             wrongAnswer();
    //         }
    //     }, 1000);
    // }


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