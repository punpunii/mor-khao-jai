/* =========================================
   MOR KHAO JAI — SIGN LANGUAGE GAME
========================================= */


/* =========================================
   1. QUESTIONS
   ใช้เฉพาะคำศัพท์ภาษามือชุดปัจจุบัน
========================================= */

const questions = [

    {
        meaning: "เจาะเลือด",

        answers: [
            "เจาะเลือด",
            "X-ray",
            "คลอดลูก",
            "กินยาหลังอาหาร"
        ],

        video: "videos/blood-draw.mp4",

        explanation:
            "คำว่า “เจาะเลือด” ใช้เมื่อต้องเก็บตัวอย่างเลือดจากผู้ป่วยเพื่อส่งตรวจ"
    },

    {
        meaning: "หมอ",

        answers: [
            "หมอ",
            "พยาบาล",
            "สูติแพทย์",
            "ล่ามภาษามือ"
        ],

        video: "videos/doctor.mp4",

        explanation:
            "คำว่า “หมอ” หมายถึงแพทย์หรือบุคลากรทางการแพทย์ที่ทำหน้าที่ตรวจและดูแลผู้ป่วย"
    },

    {
        meaning: "คลอดลูก",

        answers: [
            "ตั้งครรภ์",
            "คลอดลูก",
            "ปวดท้อง",
            "ศัลยแพทย์"
        ],

        video: "videos/childbirth.mp4",

        explanation:
            "“คลอดลูก” หมายถึงการให้กำเนิดทารก ส่วน “ตั้งครรภ์” หมายถึงช่วงที่มีทารกอยู่ในครรภ์"
    },

    {
        meaning: "เป็นใบ้",

        answers: [
            "หูตึง",
            "หูหนวกตาบอด",
            "เป็นใบ้",
            "ล่ามภาษามือ"
        ],

        video: "videos/mute.mp4",

        explanation:
            "คำว่า “เป็นใบ้” เป็นคำศัพท์ที่อยู่ในชุดภาษามือของโครงงานนี้ ใช้แยกจากคำว่า “หูตึง” และ “หูหนวกตาบอด”"
    },

    {
        meaning: "ล่ามภาษามือ",

        answers: [
            "พยาบาล",
            "ล่ามภาษามือ",
            "จิตแพทย์",
            "เจ้าหน้าที่/บุคลากร"
        ],

        video: "videos/sign-language-interpreter.mp4",

        explanation:
            "“ล่ามภาษามือ” คือผู้ที่ช่วยถ่ายทอดความหมายระหว่างภาษามือกับภาษาพูดหรือการสื่อสารรูปแบบอื่น"
    }

];


/* =========================================
   2. VARIABLES
========================================= */

let player = "";
let currentQuestion = 0;
let correct = 0;
let streak = 0;
let bestStreak = 0;
let startTime = 0;
let timer = null;
let locked = false;


/* =========================================
   3. BAD WORD FILTER
========================================= */

const bad = [
    /เหี้ย/i,
    /ห่า/i,
    /สัส/i,
    /สัด/i,
    /ควย/i,
    /เย็ด/i,
    /แม่ง/i,
    /fuck/i,
    /shit/i,
    /bitch/i,
    /asshole/i,
    /dick/i,
    /pussy/i,
    /cunt/i,
    /bastard/i
];


/* =========================================
   4. LOAD PROFILE NAME
========================================= */

try {

    const profile =
        JSON.parse(localStorage.getItem("mkj-profile"));

    if (profile && profile.name) {

        document.getElementById("player").value =
            profile.name;

    }

} catch (error) {

    console.log("No profile found");

}


/* =========================================
   5. START GAME
========================================= */

function startGame() {

    const input =
        document.getElementById("player");

    const error =
        document.getElementById("gameError");

    player = input.value.trim();

    error.textContent = "";


    if (!player) {

        error.textContent =
            "กรุณาใส่ชื่อก่อนเริ่มเกมค่ะ";

        input.focus();

        return;
    }


    if (bad.some(regex => regex.test(player))) {

        error.textContent =
            "กรุณาใช้ชื่อที่สุภาพค่ะ";

        input.focus();

        return;
    }


    currentQuestion = 0;
    correct = 0;
    streak = 0;
    bestStreak = 0;
    startTime = Date.now();
    locked = false;


    document
        .getElementById("intro")
        .classList.add("hidden");


    document
        .getElementById("quiz")
        .classList.remove("hidden");


    showQuestion();

}


/* =========================================
   6. SHOW QUESTION
========================================= */

function showQuestion() {

    locked = false;


    const q =
        questions[currentQuestion];

    const number =
        currentQuestion + 1;


    /* Question number */

    document
        .getElementById("qnum")
        .textContent =
        `ข้อ ${number} / ${questions.length}`;


    /* Progress */

    const progress =
        (number / questions.length) * 100;

    document
        .getElementById("progressBar")
        .style.width =
        `${progress}%`;


    /* Video */

    const video =
        document.getElementById("signVideo");

    const placeholder =
        document.getElementById("videoPlaceholder");


    video.pause();

    video.removeAttribute("src");

    video.load();


    if (q.video && q.video.trim() !== "") {

        video.src = q.video;

        video.style.display = "block";

        placeholder.style.display = "none";

        video.load();

    } else {

        video.style.display = "none";

        placeholder.style.display = "block";

    }


    /* Answers */

    const answers =
        document.getElementById("answers");

    answers.innerHTML = "";


    const shuffled =
        [...q.answers]
        .sort(() => Math.random() - 0.5);


    shuffled.forEach(answerText => {

        const button =
            document.createElement("button");

        button.type = "button";

        button.className =
            "answer-btn";

        button.textContent =
            answerText;


        button.addEventListener(
            "click",
            () => answer(answerText, button)
        );


        answers.appendChild(button);

    });


    /* Feedback */

    document
        .getElementById("feedback")
        .textContent = "";

    document
        .getElementById("feedback")
        .className = "feedback";


    updateStreak();

}


/* =========================================
   7. ANSWER
   เลือกคำตอบได้ครั้งเดียว
   ถูกหรือผิดก็ไปข้อถัดไป
========================================= */

function answer(selected, clickedButton) {

    if (locked) return;


    const q =
        questions[currentQuestion];


    const buttons =
        document.querySelectorAll(".answer-btn");


    /* =====================================
       LOCK ทันที
       ป้องกันการกดคำตอบซ้ำ
    ===================================== */

    locked = true;


    /* ปิดปุ่มทั้งหมด */

    buttons.forEach(button => {

        button.disabled = true;

    });


    /* =====================================
       CORRECT
    ===================================== */

    if (selected === q.meaning) {

        correct++;

        streak++;


        if (streak > bestStreak) {

            bestStreak = streak;

        }


        clickedButton.classList.add("correct");


        const feedback =
            document.getElementById("feedback");


        feedback.textContent =
            `✓ ถูกต้องค่ะ ${q.explanation}`;


        feedback.classList.remove("bad");

        feedback.classList.add("good");


        /* ไฮไลต์คำตอบที่ถูก */

        buttons.forEach(button => {

            if (button.textContent === q.meaning) {

                button.classList.add("correct");

            }

        });


        updateStreak(true);

    }


    /* =====================================
       WRONG
    ===================================== */

    else {

        streak = 0;


        clickedButton.classList.add("wrong");


        const feedback =
            document.getElementById("feedback");


        feedback.textContent =
            `ยังไม่ถูกค่ะ คำตอบที่ถูกคือ “${q.meaning}”`;


        feedback.classList.remove("good");

        feedback.classList.add("bad");


        /* แสดงคำตอบที่ถูก */

        buttons.forEach(button => {

            if (button.textContent === q.meaning) {

                button.classList.add("correct");

            }

        });


        updateStreak(false);

    }


    /* =====================================
       ไปข้อถัดไป
    ===================================== */

    setTimeout(() => {

        currentQuestion++;


        if (currentQuestion < questions.length) {

            showQuestion();

        } else {

            finishGame();

        }

    }, 1200);

}


/* =========================================
   8. STREAK
========================================= */

function updateStreak(animate = false) {

    const element =
        document.getElementById("streak");


    element.textContent =
        `🔥 Streak ${streak}`;


    if (animate) {

        element.classList.add("hot");


        setTimeout(() => {

            element.classList.remove("hot");

        }, 400);

    }

}


/* =========================================
   9. FINISH
========================================= */

function finishGame() {

    const seconds =
        Math.floor(
            (Date.now() - startTime) / 1000
        );


    clearInterval(timer);


    /* Save score */

    let scores = [];


    try {

        scores =
            JSON.parse(
                localStorage.getItem("mkj-scores") || "[]"
            );

    } catch (error) {

        scores = [];

    }


    scores.push({

        name: player,

        correct: correct,

        time: seconds,

        streak: bestStreak,

        at: Date.now()

    });


    localStorage.setItem(

        "mkj-scores",

        JSON.stringify(
            scores.slice(-50)
        )

    );


    /* Hide quiz */

    document
        .getElementById("quiz")
        .classList.add("hidden");


    /* Show result */

    const result =
        document.getElementById("result");

    result.classList.remove("hidden");


    let resultIcon = "🌱";

    let resultTitle =
        "เริ่มต้นได้ดีมากค่ะ";


    if (correct === questions.length) {

        resultIcon = "🏆";

        resultTitle =
            "สุดยอด! ถูกทุกข้อเลย";

    }

    else if (correct >= 4) {

        resultIcon = "✨";

        resultTitle =
            "เก่งมาก! ใกล้เต็มแล้ว";

    }

    else if (correct >= 3) {

        resultIcon = "🌟";

        resultTitle =
            "ทำได้ดีค่ะ";

    }


    result.innerHTML = `

        <div class="result-icon">
            ${resultIcon}
        </div>

        <p class="eyebrow">
            GAME COMPLETE
        </p>

        <h1>
            ${resultTitle}
        </h1>

        <p>
            ${escapeHtml(player)}
        </p>

        <div class="score-circle">

            <div class="score-number">
                ${correct}/${questions.length}
            </div>

            <div class="score-label">
                ตอบถูก
            </div>

        </div>

        <div class="result-stats">

            <div class="result-stat">

                <strong>
                    ${fmt(seconds)}
                </strong>

                <span>
                    เวลาที่ใช้
                </span>

            </div>


            <div class="result-stat">

                <strong>
                    🔥 ${bestStreak}
                </strong>

                <span>
                    Best Streak
                </span>

            </div>

        </div>


        <div class="result-buttons">

            <a
                href="leaderboard.html"
                class="primary button-link"
            >
                🏆 ดูตารางจัดอันดับ
            </a>


            <button
                type="button"
                class="secondary"
                onclick="restartGame()"
            >
                ↻ เล่นอีกครั้ง
            </button>

        </div>

    `;

}


/* =========================================
   10. RESTART
========================================= */

function restartGame() {

    document
        .getElementById("result")
        .classList.add("hidden");


    document
        .getElementById("quiz")
        .classList.remove("hidden");


    currentQuestion = 0;

    correct = 0;

    streak = 0;

    bestStreak = 0;

    startTime = Date.now();

    locked = false;


    showQuestion();

}


/* =========================================
   11. FORMAT TIME
========================================= */

function fmt(seconds) {

    const minutes =
        Math.floor(seconds / 60);


    const secs =
        seconds % 60;


    return (

        String(minutes).padStart(2, "0")

        +

        ":"

        +

        String(secs).padStart(2, "0")

    );

}


/* =========================================
   12. ESCAPE HTML
========================================= */

function escapeHtml(text) {

    return text.replace(

        /[&<>"']/g,

        character => ({

            "&": "&amp;",

            "<": "&lt;",

            ">": "&gt;",

            '"': "&quot;",

            "'": "&#039;"

        })[character]

    );

}
