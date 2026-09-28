/* =========================================
   ELEMENTS
========================================= */

const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const restartBtn = document.getElementById("restartBtn");

const status = document.getElementById("status");

const attemptsText = document.getElementById("attempts");
const scoreText = document.getElementById("score");
const streakText = document.getElementById("streak");

const rangeText = document.getElementById("range");
const timerText = document.getElementById("timer");

const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");

const historyList = document.getElementById("historyList");
const historyCount = document.getElementById("historyCount");

const soundBtn = document.getElementById("soundBtn");
const themeBtn = document.getElementById("themeBtn");
const languageSelect = document.getElementById("languageSelect");

const difficultyButtons =
    document.querySelectorAll(".difficulty__btn");


/* Modals */

const winModal = document.getElementById("winModal");
const loseModal = document.getElementById("loseModal");

const playAgainBtn =
    document.getElementById("playAgainBtn");

const losePlayAgainBtn =
    document.getElementById("losePlayAgainBtn");

const winningNumber =
    document.getElementById("winningNumber");

const lostNumber =
    document.getElementById("lostNumber");

const finalScore =
    document.getElementById("finalScore");

const finalAttempts =
    document.getElementById("finalAttempts");

const newBest =
    document.getElementById("newBest");


/* Statistics */

const gamesPlayed =
    document.getElementById("gamesPlayed");

const gamesWon =
    document.getElementById("gamesWon");

const winRate =
    document.getElementById("winRate");

const bestScore =
    document.getElementById("bestScore");


/* =========================================
   TRANSLATIONS
========================================= */

const translations = {

    uz: {

        badge: "SONLI O‘YIN",

        titleFirst: "SONNI",
        titleSecond: "TOP",

        description:
            "Men tanlagan sonni toping.<br>Qancha tez topsangiz, shuncha ko‘p ball olasiz.",

        easy: "OSON",
        medium: "O‘RTA",
        hard: "QIYIN",
        extreme: "JUDA QIYIN",

        range: "DIAPAZON",
        time: "VAQT",

        enterNumber: "Soningizni kiriting",

        guess: "TOPISH",

        attempts: "URINISHLAR",
        score: "BALL",
        streak: "SERIYA",

        gameProgress: "O‘YIN PROGRESS",

        history: "OLDINGI URINISHLAR",
        emptyHistory: "Hali urinishlar yo‘q",

        statistics: "STATISTIKA",
        local: "LOCAL",

        games: "O‘YINLAR",
        wins: "G‘ALABALAR",
        winRate: "G‘ALABA %",
        bestScore: "ENG YUQORI BALL",

        restart: "↻ QAYTA BOSHLASH",

        congratulations: "TABRIKLAYMIZ",
        you: "SIZ",
        gotIt: "TOPDINGIZ!",

        winDescription:
            "Siz yashirin sonni topdingiz.",

        attempt: "URINISH",

        newBest: "★ YANGI REKORD",

        playAgain: "YANA O‘YNASH",

        gameOver: "O‘YIN TUGADI",

        over: "TUGADI",

        secretNumber: "Yashirin son:",

        bigger: "📈 Kattaroq son kiriting",
        smaller: "📉 Kichikroq son kiriting",

        invalid:
            "{min} dan {max} gacha son kiriting!",

        timeOver:
            "⏰ Vaqt tugadi!",

        correct:
            "🎉 TOPDINGIZ!"
    },


    en: {

        badge: "NUMBER GAME",

        titleFirst: "GUESS",
        titleSecond: "IT",

        description:
            "Guess the number I chose.<br>The faster you guess, the more points you get.",

        easy: "EASY",
        medium: "MEDIUM",
        hard: "HARD",
        extreme: "VERY HARD",

        range: "RANGE",
        time: "TIME",

        enterNumber: "Enter a number",

        guess: "GUESS",

        attempts: "ATTEMPTS",
        score: "SCORE",
        streak: "STREAK",

        gameProgress: "GAME PROGRESS",

        history: "GUESS HISTORY",
        emptyHistory: "No guesses yet",

        statistics: "STATISTICS",
        local: "LOCAL",

        games: "GAMES",
        wins: "WINS",
        winRate: "WIN RATE",
        bestScore: "BEST SCORE",

        restart: "↻ RESTART",

        congratulations: "CONGRATULATIONS",
        you: "YOU",
        gotIt: "GOT IT!",

        winDescription:
            "You found the secret number.",

        attempt: "ATTEMPT",

        newBest: "★ NEW BEST SCORE",

        playAgain: "PLAY AGAIN",

        gameOver: "GAME OVER",

        over: "OVER",

        secretNumber: "Secret number:",

        bigger: "📈 Try a bigger number",
        smaller: "📉 Try a smaller number",

        invalid:
            "Enter a number from {min} to {max}!",

        timeOver:
            "⏰ Time is up!",

        correct:
            "🎉 YOU GOT IT!"
    },


    ru: {

        badge: "ЧИСЛОВАЯ ИГРА",

        titleFirst: "УГАДАЙ",
        titleSecond: "ЧИСЛО",

        description:
            "Угадайте число, которое я загадал.<br>Чем быстрее угадаете, тем больше очков получите.",

        easy: "ЛЕГКО",
        medium: "СРЕДНЕ",
        hard: "СЛОЖНО",
        extreme: "ОЧЕНЬ СЛОЖНО",

        range: "ДИАПАЗОН",
        time: "ВРЕМЯ",

        enterNumber: "Введите число",

        guess: "УГАДАТЬ",

        attempts: "ПОПЫТКИ",
        score: "ОЧКИ",
        streak: "СЕРИЯ",

        gameProgress: "ПРОГРЕСС ИГРЫ",

        history: "ИСТОРИЯ ПОПЫТОК",
        emptyHistory: "Попыток пока нет",

        statistics: "СТАТИСТИКА",
        local: "ЛОКАЛЬНО",

        games: "ИГРЫ",
        wins: "ПОБЕДЫ",
        winRate: "ПОБЕДЫ %",
        bestScore: "ЛУЧШИЙ РЕЗУЛЬТАТ",

        restart: "↻ НАЧАТЬ ЗАНОВО",

        congratulations: "ПОЗДРАВЛЯЕМ",
        you: "ВЫ",
        gotIt: "УГАДАЛИ!",

        winDescription:
            "Вы нашли загаданное число.",

        attempt: "ПОПЫТКА",

        newBest: "★ НОВЫЙ РЕКОРД",

        playAgain: "ИГРАТЬ СНОВА",

        gameOver: "ИГРА ОКОНЧЕНА",

        over: "ВЫШЛО",

        secretNumber: "Загаданное число:",

        bigger: "📈 Введите число больше",
        smaller: "📉 Введите число меньше",

        invalid:
            "Введите число от {min} до {max}!",

        timeOver:
            "⏰ Время вышло!",

        correct:
            "🎉 ВЫ УГАДАЛИ!"
    }

};


let currentLanguage =
    localStorage.getItem("sonniTopLanguage") || "uz";


function t(key, values = {}) {

    let text =
        translations[currentLanguage][key] ||
        translations.uz[key] ||
        key;

    Object.keys(values).forEach(key => {

        text = text.replace(
            `{${key}}`,
            values[key]
        );

    });

    return text;
}


/* =========================================
   APPLY LANGUAGE
========================================= */

function applyLanguage() {

    document.documentElement.lang =
        currentLanguage;

    document
        .querySelectorAll("[data-i18n]")
        .forEach(element => {

            const key =
                element.dataset.i18n;

            element.innerHTML =
                t(key);

        });


    document.querySelector(".title-first")
        .textContent =
        t("titleFirst");

    document.querySelector(".title-second")
        .textContent =
        t("titleSecond");


    languageSelect.value =
        currentLanguage;


    updateDynamicTexts();

}


function updateDynamicTexts() {

    const settings =
        levels[currentLevel];


    if (!gameOver) {

        if (
            status.classList.contains("hint")
        ) {

            const last =
                guessHistory[
                    guessHistory.length - 1
                ];

            if (last) {

                status.textContent =
                    last.direction === "up"
                        ? t("bigger")
                        : t("smaller");

            }

        } else if (
            status.classList.contains("error")
        ) {

            status.textContent =
                t("invalid", {
                    min: settings.min,
                    max: settings.max
                });

        } else {

            status.textContent =
                t("enterNumber");

        }

    }


    renderHistory();

}


languageSelect.addEventListener(
    "change",
    () => {

        currentLanguage =
            languageSelect.value;

        localStorage.setItem(
            "sonniTopLanguage",
            currentLanguage
        );

        applyLanguage();

    }
);


/* =========================================
   GAME SETTINGS
========================================= */

const levels = {

    easy: {
        min: 1,
        max: 50,
        time: 60,
        multiplier: 1
    },

    medium: {
        min: 1,
        max: 100,
        time: 50,
        multiplier: 1.5
    },

    hard: {
        min: 1,
        max: 500,
        time: 40,
        multiplier: 2
    },

    extreme: {
        min: 1,
        max: 1000,
        time: 25,
        multiplier: 3
    }

};


let currentLevel = "easy";

let secretNumber = 0;

let attempts = 0;

let score = 0;

let streak = 0;

let gameOver = false;

let timeLeft = 45;

let timerInterval = null;

let guessHistory = [];


/* =========================================
   LOCAL STORAGE STATISTICS
========================================= */

let stats = JSON.parse(
    localStorage.getItem("sonniTopStats")
) || {

    gamesPlayed: 0,
    gamesWon: 0,
    bestScore: 0,
    streak: 0

};


/* =========================================
   SOUND
========================================= */

let soundEnabled =
    localStorage.getItem("sonniTopSound") !== "off";

let audioContext = null;


function getAudioContext() {

    if (!audioContext) {

        audioContext =
            new (
                window.AudioContext ||
                window.webkitAudioContext
            )();

    }

    return audioContext;

}


function playSound(type) {

    if (!soundEnabled) return;

    const audio = getAudioContext();

    if (audio.state === "suspended") {
        audio.resume();
    }


    const oscillator =
        audio.createOscillator();

    const gain =
        audio.createGain();


    oscillator.connect(gain);
    gain.connect(audio.destination);


    let frequency = 440;
    let duration = .08;


    if (type === "click") {
        frequency = 420;
        duration = .05;
    }


    if (type === "wrong") {
        frequency = 180;
        duration = .12;
    }


    if (type === "correct") {
        frequency = 660;
        duration = .15;
    }


    if (type === "win") {
        frequency = 520;
        duration = .35;
    }


    if (type === "lose") {
        frequency = 130;
        duration = .3;
    }


    oscillator.frequency.value =
        frequency;

    oscillator.type =
        type === "win"
            ? "sine"
            : "triangle";


    gain.gain.setValueAtTime(
        .0001,
        audio.currentTime
    );

    gain.gain.exponentialRampToValueAtTime(
        .12,
        audio.currentTime + .01
    );

    gain.gain.exponentialRampToValueAtTime(
        .0001,
        audio.currentTime + duration
    );


    oscillator.start();

    oscillator.stop(
        audio.currentTime + duration
    );


    if (type === "win") {

        setTimeout(() => {
            playTone(780, .18);
        }, 120);

        setTimeout(() => {
            playTone(980, .25);
        }, 250);

    }

}


function playTone(frequency, duration) {

    if (!soundEnabled) return;

    const audio = getAudioContext();

    const oscillator =
        audio.createOscillator();

    const gain =
        audio.createGain();


    oscillator.connect(gain);
    gain.connect(audio.destination);


    oscillator.frequency.value =
        frequency;

    oscillator.type = "sine";


    gain.gain.setValueAtTime(
        .0001,
        audio.currentTime
    );

    gain.gain.exponentialRampToValueAtTime(
        .1,
        audio.currentTime + .01
    );

    gain.gain.exponentialRampToValueAtTime(
        .0001,
        audio.currentTime + duration
    );


    oscillator.start();

    oscillator.stop(
        audio.currentTime + duration
    );

}


/* =========================================
   SOUND BUTTON
========================================= */

soundBtn.addEventListener(
    "click",
    () => {

        soundEnabled =
            !soundEnabled;

        localStorage.setItem(
            "sonniTopSound",
            soundEnabled
                ? "on"
                : "off"
        );


        soundBtn.textContent =
            soundEnabled
                ? "🔊"
                : "🔇";


        if (soundEnabled) {
            playSound("click");
        }

    }
);


soundBtn.textContent =
    soundEnabled
        ? "🔊"
        : "🔇";


/* =========================================
   THEME
========================================= */

let lightTheme =
    localStorage.getItem("sonniTopTheme")
        === "light";


function updateTheme() {

    document.body.classList.toggle(
        "light",
        lightTheme
    );

    themeBtn.textContent =
        lightTheme
            ? "🌙"
            : "☀";

}


themeBtn.addEventListener(
    "click",
    () => {

        lightTheme =
            !lightTheme;

        localStorage.setItem(
            "sonniTopTheme",
            lightTheme
                ? "light"
                : "dark"
        );

        updateTheme();

        playSound("click");

    }
);


updateTheme();


/* =========================================
   DIFFICULTY
========================================= */

difficultyButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                const level =
                    button.dataset.level;

                currentLevel =
                    level;


                difficultyButtons
                    .forEach(btn => {

                        btn.classList.remove(
                            "active"
                        );

                    });


                button.classList.add(
                    "active"
                );


                playSound("click");

                startGame();

            }
        );

    }
);


/* =========================================
   FORMAT TIME
========================================= */

function formatTime(seconds) {

    const minutes =
        Math.floor(seconds / 60);

    const secs =
        seconds % 60;


    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;

}


/* =========================================
   TIMER
========================================= */

function startTimer() {

    clearInterval(timerInterval);


    timerInterval =
        setInterval(
            () => {

                if (gameOver) return;


                timeLeft--;

                timerText.textContent =
                    formatTime(timeLeft);


                if (timeLeft <= 10) {

                    timerText
                        .parentElement
                        .classList
                        .add("warning");

                }


                if (timeLeft <= 0) {

                    clearInterval(
                        timerInterval
                    );

                    endGameByTime();

                }

            },
            1000
        );

}


/* =========================================
   START GAME
========================================= */

function startGame() {

    const settings =
        levels[currentLevel];


    clearInterval(
        timerInterval
    );


    secretNumber =
        Math.floor(
            Math.random() *
            (
                settings.max -
                settings.min +
                1
            )
        ) + settings.min;


    attempts = 0;

    score = 0;

    timeLeft =
        settings.time;

    gameOver = false;

    guessHistory = [];


    rangeText.textContent =
        `${settings.min}—${settings.max}`;


    guessInput.min =
        settings.min;

    guessInput.max =
        settings.max;

    guessInput.placeholder =
        "00";


    attemptsText.textContent =
        "0";

    scoreText.textContent =
        "0";

    streakText.textContent =
        streak;


    timerText.textContent =
        formatTime(timeLeft);


    timerText.parentElement
        .classList
        .remove("warning");


    status.textContent =
        t("enterNumber");

    status.className =
        "game__status";


    guessInput.disabled = false;

    guessBtn.disabled = false;

    guessInput.value = "";


    updateProgress();

    renderHistory();

    guessInput.focus();

}


/* =========================================
   CHECK GUESS
========================================= */

function checkGuess() {

    if (gameOver) return;


    const settings =
        levels[currentLevel];


    const guess =
        Number(guessInput.value);


    /* Invalid */

    if (
        !guess ||
        guess < settings.min ||
        guess > settings.max
    ) {

        status.textContent =
            t("invalid", {
                min: settings.min,
                max: settings.max
            });


        status.className =
            "game__status error";


        shakeInput();

        playSound("wrong");

        return;

    }


    /* Infinite attempts */

    attempts++;

    attemptsText.textContent =
        attempts;


    /* Timer starts after first valid guess */

    if (attempts === 1) {
        startTimer();
    }


    /* Correct */

    if (guess === secretNumber) {

        handleWin();

        return;

    }


    /* Wrong */

    const direction =
        guess < secretNumber
            ? "up"
            : "down";


    guessHistory.push({
        number: guess,
        direction: direction
    });


    renderHistory();


    if (direction === "up") {

        status.textContent =
            t("bigger");

    } else {

        status.textContent =
            t("smaller");

    }


    status.className =
        "game__status hint";


    shakeInput();

    playSound("wrong");


    score =
        Math.max(
            0,
            score - 5
        );


    scoreText.textContent =
        score;


    updateProgress();


    guessInput.value = "";

    guessInput.focus();

}


/* =========================================
   WIN
========================================= */

function handleWin() {

    gameOver = true;

    clearInterval(
        timerInterval
    );


    const settings =
        levels[currentLevel];


    const timeBonus =
        timeLeft * 5;


    const attemptBonus =
        Math.max(
            0,
            (
                100 -
                attempts
            ) * 2
        );


    const baseScore = 100;


    score =
        Math.round(
            (
                baseScore +
                timeBonus +
                attemptBonus
            ) *
            settings.multiplier
        );


    scoreText.textContent =
        score;


    streak++;

    streakText.textContent =
        streak;


    stats.gamesPlayed++;

    stats.gamesWon++;

    stats.streak =
        streak;


    let isNewBest = false;


    if (
        score >
        stats.bestScore
    ) {

        stats.bestScore =
            score;

        isNewBest = true;

    }


    saveStats();

    updateStatistics();


    status.textContent =
        `${t("correct")} ${secretNumber}`;


    status.className =
        "game__status success";


    guessInput.disabled = true;

    guessBtn.disabled = true;


    progressFill.style.width =
        "100%";


    progressText.textContent =
        attempts;


    document
        .querySelector(".game__card")
        .classList
        .add("win-effect");


    playSound("win");


    winningNumber.textContent =
        secretNumber;

    finalScore.textContent =
        score;

    finalAttempts.textContent =
        attempts;


    newBest.classList.toggle(
        "show",
        isNewBest
    );


    setTimeout(
        () => {

            winModal.classList.add(
                "show"
            );

        },
        500
    );

}


/* =========================================
   TIME OVER
========================================= */

function endGameByTime() {

    if (gameOver) return;


    gameOver = true;


    guessInput.disabled = true;

    guessBtn.disabled = true;


    stats.gamesPlayed++;

    stats.streak = 0;

    streak = 0;


    streakText.textContent =
        "0";


    saveStats();

    updateStatistics();


    status.textContent =
        t("timeOver");


    status.className =
        "game__status error";


    lostNumber.textContent =
        secretNumber;


    loseModal.classList.add(
        "show"
    );


    playSound("lose");

}


/* =========================================
   PROGRESS
========================================= */

function updateProgress() {

    /*
        Urinishlar cheksiz bo‘lgani uchun
        progress endi faqat urinish sonini
        ko‘rsatadi.
    */

    progressFill.style.width =
        "100%";

    progressText.textContent =
        attempts;

}


/* =========================================
   HISTORY
========================================= */

function renderHistory() {

    historyCount.textContent =
        guessHistory.length;


    if (!guessHistory.length) {

        historyList.innerHTML = `
            <div class="history-empty">
                ${t("emptyHistory")}
            </div>
        `;

        return;

    }


    historyList.innerHTML =
        guessHistory
            .map(item => {

                const icon =
                    item.direction === "up"
                        ? "↑"
                        : "↓";


                return `
                    <div class="history-item ${item.direction}">
                        <strong>${item.number}</strong>
                        <span>${icon}</span>
                    </div>
                `;

            })
            .join("");

}


/* =========================================
   SHAKE
========================================= */

function shakeInput() {

    guessInput.classList.remove(
        "shake"
    );


    void guessInput.offsetWidth;


    guessInput.classList.add(
        "shake"
    );


    setTimeout(
        () => {

            guessInput.classList.remove(
                "shake"
            );

        },
        400
    );

}


/* =========================================
   STATISTICS
========================================= */

function saveStats() {

    localStorage.setItem(
        "sonniTopStats",
        JSON.stringify(stats)
    );

}


function updateStatistics() {

    gamesPlayed.textContent =
        stats.gamesPlayed;


    gamesWon.textContent =
        stats.gamesWon;


    const rate =
        stats.gamesPlayed > 0
            ? Math.round(
                (
                    stats.gamesWon /
                    stats.gamesPlayed
                ) * 100
            )
            : 0;


    winRate.textContent =
        `${rate}%`;


    bestScore.textContent =
        stats.bestScore;

}


updateStatistics();


/* =========================================
   MODALS
========================================= */

playAgainBtn.addEventListener(
    "click",
    () => {

        winModal.classList.remove(
            "show"
        );


        document
            .querySelector(".game__card")
            .classList
            .remove("win-effect");


        startGame();

    }
);


losePlayAgainBtn.addEventListener(
    "click",
    () => {

        loseModal.classList.remove(
            "show"
        );


        startGame();

    }
);


/* =========================================
   RESTART
========================================= */

restartBtn.addEventListener(
    "click",
    () => {

        playSound("click");

        startGame();

    }
);


/* =========================================
   GUESS BUTTON
========================================= */

guessBtn.addEventListener(
    "click",
    checkGuess
);


/* =========================================
   ENTER KEY
========================================= */

guessInput.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Enter"
        ) {

            checkGuess();

        }

    }
);


/* =========================================
   INITIALIZE
========================================= */

languageSelect.value =
    currentLanguage;

applyLanguage();

startGame();
