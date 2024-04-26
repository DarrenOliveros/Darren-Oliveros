const quiz = [
    {
        "subject": "Sport",
        "quiz": [
            {
                "question": "Which one is correct team name in NBA?",
                "options": [
                    "New York Bulls",
                    "Los Angeles Kings",
                    "Golden State Warriros",
                    "Huston Rocket"
                ],
                "answer": "Huston Rocket"
            }
        ]
    },
    {
        "subject": "Math",
        "quiz": [
            {
                "question": "5 + 7 = ?",
                "options": [
                    "10",
                    "11",
                    "12",
                    "13"
                ],
                "answer": "12"
            },
            {
                "question": "12 - 8 = ?",
                "options": [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                "answer": "4"
            }
        ]
    }

]

function displayQuiz() {
    quiz.forEach((category, index) => {
        console.log(`Subject: ${category.subject}`);
        category.quiz.forEach((question, qIndex) => {
            console.log(`Question ${qIndex + 1}: ${question.question}`);
            console.log(`Answer: ${question.answer}`);
            console.log("-----------------------");
        });
    });
}

displayQuiz();
