let gameseq = [];
let userSeq = [];
let btns = ["yellow", "red", "purple", "green"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if (!started) {
        console.log("game is started");
        started = true;
        levelup();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

function levelup() {
    level++;
    userSeq = [];
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random() * btns.length);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    console.log(gameseq);
    gameFlash(randBtn);
}

function checkAns(idx) {
    if (userSeq[idx] === gameseq[idx]) {
        if (userSeq.length === gameseq.length) {
            setTimeout(levelup, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start again.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnPress() {
    let btn = this;
    btnFlash(btn);  // Call the btnFlash function here
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
allBtns.forEach(function(btn) {
    btn.addEventListener("click", btnPress);
});

function reset() {
    started = false;
    gameseq = [];
    userSeq = [];
    level = 0;
}
