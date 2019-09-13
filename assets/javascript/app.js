$(document).ready(function () {

    // Game Data:
    // ===============================================

    const q1 = {
        question: '"Wurst" and "Worst", are examples of what?',
        choice1: '<button type="button" class="btn btn-success correct">Homonyms</button>',
        choice2: '<button type="button" class="btn btn-success">Synonyms</button>',
        choice3: '<button type="button" class="btn btn-success">Heteronyms</button>',
        choice4: '<button type="button" class="btn btn-success">Cinnamins</button>',
        answer: 'Homonyms',
        giphy: undefined
    };

    const q2 = {
        question: 'German sausages are known as?',
        choice1: '<button type="button" class="btn btn-success">Lil Smokies</button>',
        choice2: '<button type="button" class="btn btn-success">Hot Dogs</button>',
        choice3: '<button type="button" class="btn btn-success correct">Bratwurst</button>',
        choice4: '<button type="button" class="btn btn-success">J-Dawgs</button>',
        answer: 'Bratwurst',
        giphy: undefined
    }

    let questions = [q1, q2];
    let qIndex = 0;
    let counter = 15;
    let correct = 0;
    let incorrect = 0;
    let timer = $('<p>');
    let gif = $('<div>');

    // Game Functions:
    // ===============================================

    $("#start").click(function () {
        hideButton();
        question();
    });

    function hideButton() {
        document.getElementById("start").style.visibility = "hidden";
    };

    function question() {
        if (qIndex === questions.length) {
            gameOver()
        } else {
            counter = 15;
            $('.question').append(questions[qIndex].question);
            $('.choice-1').append(questions[qIndex].choice1);
            $('.choice-2').append(questions[qIndex].choice2);
            $('.choice-3').append(questions[qIndex].choice3);
            $('.choice-4').append(questions[qIndex].choice4);

            // $(".button").click(function () {
            //     // if (){

            //     // }

            // }
    }
    };

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