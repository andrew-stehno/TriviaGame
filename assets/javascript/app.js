$(document).ready(function () {

    // Game Data:
    // ===============================================

    const q1 = {
        question: '"Wurst" and "Worst", are examples of what?',
        choice1: '<button type="button" class="btn btn-warning border border-dark">Homonyms</button>',
        choice2: '<button type="button" class="btn btn-warning border border-dark">Synonyms</button>',
        choice3: '<button type="button" class="btn btn-warning border border-dark">Heteronyms</button>',
        choice4: '<button type="button" class="btn btn-warning border border-dark">Cinnamins</button>',
        statement1: 'Nice shot Commander!',
        statement2: "Phonics is not your strong suit!",
        answer: 'Homonyms',
        giphy1: '<iframe src="https://giphy.com/embed/J6Nj4TzJWtyWk" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/star-trek-lasers-sausage-J6Nj4TzJWtyWk">via GIPHY</a></p>',
        giphy2: '<iframe src="https://giphy.com/embed/3o7rbRW09ZmTRPeUtW" width="480" height="400" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/justin-g-dance-sausage-party-3o7rbRW09ZmTRPeUtW">via GIPHY</a></p>',
    };

    const q2 = {
        question: 'German sausages are known as?',
        choice1: '<button type="button" class="btn btn-warning border border-dark">Lil Smokies</button>',
        choice2: '<button type="button" class="btn btn-warning border border-dark">Hot Dogs</button>',
        choice3: '<button type="button" class="btn btn-warning border border-dark">Bratwurst</button>',
        choice4: '<button type="button" class="btn btn-warning border border-dark">J-Dawgs</button>',
        answer: 'Bratwurst',
        statement1: 'Prost!',
        statement2: 'Nine Nine Nine Nine Nine!',
        giphy1: '<iframe src="https://giphy.com/embed/mOOuUUIEEgq6A" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/shakeshack-beer-cheers-steins-mOOuUUIEEgq6A">via GIPHY</a></p>',
        giphy2: '<iframe src="https://giphy.com/embed/3oEhn4ZRr2rC2rlKmI" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/art-lol-food-3oEhn4ZRr2rC2rlKmI">via GIPHY</a></p>',
    };

    const q3 = {
        question: 'What foods are Star Fleet computers not capable of replicating?',
        choice1: '<button type="button" class="btn btn-warning border border-dark">Alcohol</button>',
        choice2: '<button type="button" class="btn btn-warning border border-dark">Hot Dogs</button>',
        choice3: '<button type="button" class="btn btn-warning border border-dark">Pretzels</button>',
        choice4: '<button type="button" class="btn btn-warning border border-dark">Nuts</button>',
        answer: 'Hot Dogs',
        statement1: 'Mystery meat is far too complex for even the super computers of tomorrow!',
        statement2: 'Please, bar foods are staples of deep space exploration!',
        giphy1: '<iframe src="https://giphy.com/embed/vp122eOzO0Hxm" width="480" height="333" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/star-trek-wow-vp122eOzO0Hxm">via GIPHY</a></p>',
        giphy2: '<iframe src="https://giphy.com/embed/mFOHqYNbjdsZy" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/kirk-mFOHqYNbjdsZy">via GIPHY</a></p>',
    };

    const q4 = {
        question: 'Hot Dogs contain which of the following items?',
        choice1: '<button type="button" class="btn btn-warning border border-dark">Criminals</button>',
        choice2: '<button type="button" class="btn btn-warning border border-dark">Beef</button>',
        choice3: '<button type="button" class="btn btn-warning border border-dark">Babies</button>',
        choice4: '<button type="button" class="btn btn-warning border border-dark">Children</button>',
        answer: 'Beef',
        statement1: 'That may be true, somewhere in the multi-verse...',
        statement2: 'It pays to be good kids!',
        giphy1: '<iframe src="https://giphy.com/embed/3oEjI5sC6vbNXJhaWA" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/wink-dennys-sausage-3oEjI5sC6vbNXJhaWA">via GIPHY</a></p>',
        giphy2: '<iframe src="https://giphy.com/embed/3o7TKO3AC2o5cOkZfG" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cute-kawaii-hotdog-3o7TKO3AC2o5cOkZfG">via GIPHY</a></p>',
    };

    // const q5 = {
    //     question: "Name Captain Picard's most daunting nemesis:",
    //     choice1: '<button type="button" class="btn btn-success">Dathon</button>',
    //     choice2: '<button type="button" class="btn btn-success">Bjorn Borg</button>',
    //     choice3: '<button type="button" class="btn btn-success">Q</button>',
    //     choice4: '<button type="button" class="btn btn-success">Indegestion</button>',
    //     answer: 'Indigestion',
    //     statement1: 'Take some Immodium and walk it off!',
    //     statement2: "The Wurst Trivia Ever really doesen't make any sense!",
    //     giphy1: '<iframe src="https://giphy.com/embed/SztNh2RqJmXVC" width="480" height="228" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/trek-sausage-SztNh2RqJmXVC">via GIPHY</a></p>',
    //     giphy2: '<iframe src="https://giphy.com/embed/7fLvK10wH1Mpa" width="480" height="359" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/reaction-7fLvK10wH1Mpa">via GIPHY</a></p>',
    // };     neither giphy will load, creates error!

    let questions = [q1, q2, q3, q4];
    let qIndex = 0;
    let counter = 10;
    let correct = 0;
    let incorrect = 0;
    let talley = $('<div>');
    let message = $('<div>');
    let gif = $('<div>');

    talley.addClass('data');
    message.addClass('data');
    gif.addClass('data');

    // Game Functions:
    // ===============================================
    // Main display function:
    function display() {
        talley.empty();
        message.empty();
        gif.empty();
        $('.question').empty().append(questions[qIndex].question);
        $('.choice-1').empty().append(questions[qIndex].choice1);
        $('.choice-2').empty().append(questions[qIndex].choice2);
        $('.choice-3').empty().append(questions[qIndex].choice3);
        $('.choice-4').empty().append(questions[qIndex].choice4);
    };
    var myTimer;
    // Timer function:=================================
    function countDown() {
        myTimer = setInterval(timer, 1000);
    };

    function timer() {
        $('.timer').html(counter);
            if (counter === 0) {
                clearInterval(myTimer);
                counter = 11;
                incorrect++;
                qIndex++;
                console.log("timed out incorrect: " + incorrect);
                setTimeout(function () {
                    question();
                }, 3000);
            
            }
        counter--;
    };

    // Message display if correct answer function:=====

    function msgCorrect() {
        message.append(questions[qIndex].statement1);
        gif.append(questions[qIndex].giphy1);
        $('.main-body').append(message);
        $('.main-body').append(gif);
    };

    // Message display if wrong answer function:=======

    function msgWrong() {
        message.append(questions[qIndex].statement2);
        gif.append(questions[qIndex].giphy2);
        $('.main-body').append(message);
        $('.main-body').append(gif);
    };

    // Anti display function:==========================

    function hideMe() {
        $('.question').empty();
        $('.choice-1').empty();
        $('.choice-2').empty();
        $('.choice-3').empty();
        $('.choice-4').empty();
        $('.timer').empty();
    }

    // Gameover display function:======================

    function gameOver() {
        hideMe();
        talley.append("You got " + correct + " correct, and " + incorrect + " wrong!");
        console.log(talley);
        $('.main-body').append(talley);
        //$('.swal-button').click(resetGame);
        setTimeout(function () {
            swal("Game Over!", "You have to start again!").then(_ => {
                resetGame();
            });
        }, 3000);
    };

    // Reset game without refresh function:==============

    function resetGame() {
        qIndex = 0;
        correct = 0;
        incorrect = 0;
        userGuess = null;
        counter = 10;
        talley.empty();
        document.getElementById("start").style.visibility = "visible";
    }
    //
    // Game Start:====================================
    // 
    $("#start").click(function () {
        document.getElementById("start").style.visibility = "hidden";
        question();
    });

    // Main Process:
    //================================================
    // Prompt questions or end game.

    function question() {
        if (qIndex === questions.length) {
            console.log('game over');
            gameOver()
        }

        else {
            display();
            countDown();
            // Click logs user guess==================
            $('.btn.btn-warning').click(function () {
                clearInterval(myTimer);
                let userGuess = $(this).text();
                console.log("user guess " + userGuess);

                if (userGuess === questions[qIndex].answer) {
                    clearInterval(myTimer);
                    counter = 10;
                    correct++;
                    console.log("Correct guess: " + correct);
                    hideMe();
                    msgCorrect();
                }

                else {
                    clearInterval(myTimer);
                    counter = 10;
                    incorrect++;
                    console.log("Incorrect guess " + incorrect);
                    hideMe();
                    msgWrong();
                }

                qIndex++;
                console.log('array index: ' + qIndex);

                // Timeout after giphy display:=========
                setTimeout(function () {
                    message.empty();
                    gif.empty();
                    question();
                }, 5000);
            })
        }
    }
});