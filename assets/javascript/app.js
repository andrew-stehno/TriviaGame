$(document).ready(function () {

    // Game Data:
    // ===============================================

    const q1 = {
        question: '"Wurst" and "Worst", are examples of what?',
        choice1: '<button type="button" class="btn btn-success">Homonyms</button>',
        choice2: '<button type="button" class="btn btn-success">Synonyms</button>',
        choice3: '<button type="button" class="btn btn-success">Heteronyms</button>',
        choice4: '<button type="button" class="btn btn-success">Cinnamins</button>',
        statement1: 'Nice shot Commander!',
        statement2: "Huk'd on fonix wurkd 4me, itcan wurk 4 u 2!",
        answer: 'Homonyms',
        giphy1: '<iframe src="https://giphy.com/embed/J6Nj4TzJWtyWk" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/star-trek-lasers-sausage-J6Nj4TzJWtyWk">via GIPHY</a></p>',
        giphy2: '<iframe src="https://giphy.com/embed/3o7rbRW09ZmTRPeUtW" width="480" height="400" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/justin-g-dance-sausage-party-3o7rbRW09ZmTRPeUtW">via GIPHY</a></p>',
    };

    const q2 = {
        question: 'German sausages are known as?',
        choice1: '<button type="button" class="btn btn-success">Lil Smokies</button>',
        choice2: '<button type="button" class="btn btn-success">Hot Dogs</button>',
        choice3: '<button type="button" class="btn btn-success">Bratwurst</button>',
        choice4: '<button type="button" class="btn btn-success">J-Dawgs</button>',
        answer: 'Bratwurst',
        statement1: 'Prost!',
        statement2: 'Nine Nine Nine Nine Nine!',
        giphy1: '<iframe src="https://giphy.com/embed/xT5LMxXP4S6DmInKOA" width="480" height="366" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/season-8-the-simpsons-8x13-xT5LMxXP4S6DmInKOA">via GIPHY</a></p>',
        giphy2: '<iframe src="https://giphy.com/embed/3oEhn4ZRr2rC2rlKmI" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/art-lol-food-3oEhn4ZRr2rC2rlKmI">via GIPHY</a></p>',
    };

    const q3 = {
        question: 'What food are Star Fleet computers not capable of replicating?',
        choice1: '<button type="button" class="btn btn-success">Alcohal</button>',
        choice2: '<button type="button" class="btn btn-success">Hot Dogs</button>',
        choice3: '<button type="button" class="btn btn-success">Pretzels</button>',
        choice4: '<button type="button" class="btn btn-success">Nuts</button>',
        answer: 'Hot Dogs',
        statement1: 'Mystery meat is far too complex for even the super computers of tomorrow!',
        statement2: 'Please, bar foods are staples of deep space exploration!',
        giphy1: '<iframe src="https://giphy.com/embed/vp122eOzO0Hxm" width="480" height="333" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/star-trek-wow-vp122eOzO0Hxm">via GIPHY</a></p>',
        giphy2: '<iframe src="https://giphy.com/embed/mFOHqYNbjdsZy" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/kirk-mFOHqYNbjdsZy">via GIPHY</a></p>',
    };

    // const q4 = {
    //     question: '?',
    //     choice1: '<button type="button" class="btn btn-success"></button>',
    //     choice2: '<button type="button" class="btn btn-success"></button>',
    //     choice3: '<button type="button" class="btn btn-success"></button>',
    //     choice4: '<button type="button" class="btn btn-success"></button>',
    //     answer: '',
    //     statement1: '',
    //     statement2: '',
    //     giphy1: '',
    //     giphy2: '',
    // };

    // const q5 = {
    //     question: '?',
    //     choice1: '<button type="button" class="btn btn-success"></button>',
    //     choice2: '<button type="button" class="btn btn-success"></button>',
    //     choice3: '<button type="button" class="btn btn-success"></button>',
    //     choice4: '<button type="button" class="btn btn-success"></button>',
    //     answer: '',
    //     statement1: '',
    //     statement2: '',
    //     giphy1: '',
    //     giphy2: '',
    // };

    // const q6 = {
    //     question: '?',
    //     choice1: '<button type="button" class="btn btn-success"></button>',
    //     choice2: '<button type="button" class="btn btn-success"></button>',
    //     choice3: '<button type="button" class="btn btn-success"></button>',
    //     choice4: '<button type="button" class="btn btn-success"></button>',
    //     answer: '',
    //     statement1: '',
    //     statement2: '',
    //     giphy1: '',
    //     giphy2: '',
    // };

    // const q7 = {
    //     question: '?',
    //     choice1: '<button type="button" class="btn btn-success"></button>',
    //     choice2: '<button type="button" class="btn btn-success"></button>',
    //     choice3: '<button type="button" class="btn btn-success"></button>',
    //     choice4: '<button type="button" class="btn btn-success"></button>',
    //     answer: '',
    //     statement1: '',
    //     statement2: '',
    //     giphy1: '',
    //     giphy2: '',
    // };

    // const q8 = {
    //     question: '?',
    //     choice1: '<button type="button" class="btn btn-success"></button>',
    //     choice2: '<button type="button" class="btn btn-success"></button>',
    //     choice3: '<button type="button" class="btn btn-success"></button>',
    //     choice4: '<button type="button" class="btn btn-success"></button>',
    //     answer: '',
    //     statement1: '',
    //     statement2: '',
    //     giphy1: '',
    //     giphy2: '',
    // };

    // const q9 = {
    //     question: '?',
    //     choice1: '<button type="button" class="btn btn-success"></button>',
    //     choice2: '<button type="button" class="btn btn-success"></button>',
    //     choice3: '<button type="button" class="btn btn-success"></button>',
    //     choice4: '<button type="button" class="btn btn-success"></button>',
    //     answer: '',
    //     statement1: '',
    //     statement2: '',
    //     giphy1: '',
    //     giphy2: '',
    // };

    // const q10 = {
    //     question: '?',
    //     choice1: '<button type="button" class="btn btn-success"></button>',
    //     choice2: '<button type="button" class="btn btn-success"></button>',
    //     choice3: '<button type="button" class="btn btn-success"></button>',
    //     choice4: '<button type="button" class="btn btn-success"></button>',
    //     answer: '',
    //     statement1: '',
    //     statement2: '',
    //     giphy1: '',
    //     giphy2: '',
    // };

    let questions = [q1, q2, q3];
    let qIndex = 0;
    let counter = 11;
    let correct = 0;
    let incorrect = 0;
    let intervalId;
    let talley = $('<div>');
    let message = $('<div>');
    let gif = $('<div>');

    // Game Functions:
    // ===============================================
    // Game Start:

    $("#start").click(function () {
        document.getElementById("start").style.visibility = "hidden";
        question();
    });

    // Prompt questions or end game.
    //================================================

    function question() {
        if (qIndex === questions.length) {
            console.log('game over');
            gameOver()
        } else {
            talley.empty();
            message.empty();
            gif.empty();
            $('.question').empty().append(questions[qIndex].question);
            $('.choice-1').empty().append(questions[qIndex].choice1);
            $('.choice-2').empty().append(questions[qIndex].choice2);
            $('.choice-3').empty().append(questions[qIndex].choice3);
            $('.choice-4').empty().append(questions[qIndex].choice4);
            countDown();

            $('button').click(function () {
                let userGuess = $(this).text();
                console.log("user guess " + userGuess);

                if (userGuess === questions[qIndex].answer) {
                    correct++;
                    console.log("correct: " + correct);
                    clearInterval(intervalId);
                    hideMe();
                    message.append(questions[qIndex].statement1);
                    gif.append(questions[qIndex].giphy1);
                    $('.main-body').append(message);
                    $('.main-body').append(gif);
                } else {
                    incorrect++;
                    console.log(incorrect);
                    clearInterval(intervalId);
                    hideMe();
                    message.append(questions[qIndex].statement2);
                    gif.append(questions[qIndex].giphy2);
                    $('.main-body').append(message);
                    $('.main-body').append(gif);
                }
                qIndex++;
                console.log('array index: ' + qIndex);

                setTimeout(function () {
                    message.empty();
                    gif.empty();
                    nextQuestion();
                }, 5000);
            })
        }
    };

    // Timer functions:
    // ==============================================

    function countDown() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    };

    function decrement() {
        counter--
        $('.timer').html(counter);
        if (counter === 0) {
            incorrect++;
            qIndex++;
            clearInterval(intervalId);
            console.log("incorrect: " + incorrect);
            swal("Whoa!", "You ran out of time!");
            nextQuestion();
        }
    };

    // Supportive functions:
    // ================================================

    function hideMe() {
        $('.question').empty();
        $('.choice-1').empty();
        $('.choice-2').empty();
        $('.choice-3').empty();
        $('.choice-4').empty();
        $('.timer').empty();
    }

    function nextQuestion() {
        question();
    }

    function gameOver() {
        clearInterval(intervalId);
        hideMe();;
        talley.append("You got " + correct + " correct, and " + incorrect + " wrong!");
        console.log(talley);
        $('.main-body').append(talley);

        setTimeout(function () {
            swal("Game Over!", "You have to start again!");   
        }, 5000);
    }; 
    
    function resetGame() {
        qIndex = 0
        talley.empty();
        // document.getElementById("start")
    }
    resetGame();

});