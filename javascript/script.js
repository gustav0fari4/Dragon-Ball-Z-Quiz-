// Define questions by saga
var saiyanSagaQuestions = [
    // Text Input Questions
    { 
        type: "text_input",
        question: "What is the name of Goku's son?",
        correctAnswer: "Gohan"
    },
    { 
        type: "text_input",
        question: "What is the name of Goku's Saiyan brother?",
        correctAnswer: "Raditz"
    },

    // Image Selection Questions
    { 
        type: "image_selection",
        question: "Select the image of the Saiyan who arrives on Earth and reveals Goku's alien origins.",
        options: [
            { imageUrl: "images/goku_saiyan_saga.jpg", character: "Goku" },
            { imageUrl: "images/vegeta_saiyan_saga.webp", character: "Vegeta" },
            { imageUrl: "images/raditz.webp", character: "Raditz"}
        ],
        correctAnswer: "Goku" // Assuming Goku is the correct answer
    },

    // Multiple Choice Questions
    { 
        type: "multiple_choice",
        question: "Who is the antagonist of the Saiyan Saga?",
        options: ["Raditz", "Frieza", "Cell", "Buu"],
        correctAnswer: "Raditz"
    },
    { 
        type: "multiple_choice",
        question: "Who is Goku's Saiyan rival and later ally in the Saiyan Saga?",
        options: ["Vegeta", "Piccolo", "Krillin", "Gohan"],
        correctAnswer: "Vegeta"
    }
];

// Define questions for Frieza Saga
var friezaSagaQuestions = [
    // Text Input Questions
    { 
        type: "text_input",
        question: "What is the name of the planet destroyed by Frieza at the beginning of the Frieza Saga?",
        correctAnswer: "Planet Vegeta"
    },
    { 
        type: "text_input",
        question: "What is the name of the legendary transformation achieved by Saiyans when they have a pure heart and undergo intense training?",
        correctAnswer: "Super Saiyan"
    },

    // Image Selection Questions
    {
        type: "image_selection",
        question: "Select the image of the tyrant who destroys Planet Vegeta.",
        options: [
          { imageUrl: "images/frieza.webp", character: "Frieza" },
          { imageUrl: "images/goku_frieza_saga.jpg", character: "Goku" },
          { imageUrl: "images/piccolo.png", character: "Piccolo"}
        ],
        correctAnswer: "Frieza"
    },

    // Multiple Choice Questions
    { 
        type: "multiple_choice",
        question: "What is the name of Frieza's ultimate transformation?",
        options: ["Final Form", "Golden Form", "100% Power Form", "True Form"],
        correctAnswer: "Final Form"
    },
    { 
        type: "multiple_choice",
        question: "Who is the legendary Super Saiyan who defeated Frieza?",
        options: ["Goku", "Vegeta", "Broly", "Gohan"],
        correctAnswer: "Goku"
    }
];

// Define questions for Cell Saga
var cellSagaQuestions = [
    // Text Input Questions
    { 
        type: "text_input",
        question: "What is the name of the perfect android created by Dr. Gero during the Cell Saga?",
        correctAnswer: "Cell"
    },
    { 
        type: "text_input",
        question: "What is the name of Gohan's father who sacrifices himself to defeat Cell?",
        correctAnswer: "Goku"
    },

    // Image Selection Questions
    {
        type: "image_selection",
        question: "Select the image of the warrior who reaches the perfect form after absorbing Androids 17 and 18.",
        options: [
          { imageUrl: "images/cell.jpg", character: "Cell" },
          { imageUrl: "images/gohan_cell_saga.jpg", character: "Gohan" },
          { imageUrl: "images/androids_17_18.webp", character: "Androids 17 & 18"}
        ],
        correctAnswer: "Cell"
    },

    // Multiple Choice Questions
    { 
        type: "multiple_choice",
        question: "Who is the creator of the androids in the Cell Saga?",
        options: ["Dr. Brief", "Dr. Gero", "Dr. Wheelo", "Dr. Slump"],
        correctAnswer: "Dr. Gero"
    },
    { 
        type: "multiple_choice",
        question: "Which of the following characters achieves the Super Saiyan 2 transformation during the Cell Saga?",
        options: ["Goku", "Vegeta", "Gohan", "Trunks"],
        correctAnswer: "Gohan"
    }
];

// Define questions for Buu Saga
var buuSagaQuestions = [
    // Text Input Questions
    { 
        type: "text_input",
        question: "What is the name of the pink, childlike creature who is the final antagonist of the Buu Saga?",
        correctAnswer: "Majin Buu"
    },
    { 
        type: "text_input",
        question: "What is the name of the fusion between Goku and Vegeta during the Buu Saga?",
        correctAnswer: "Vegito"
    },

    // Image Selection Questions
    {
        type: "image_selection",
        question: "Select the image of the creature known for his ability to turn his enemies into candy.",
        options: [
          { imageUrl: "images/kid_buu.webp", character: "Majin Buu" },
          { imageUrl: "images/vegito.webp", character: "Vegito" },
          { imageUrl: "images/dabura_babidi.webp", character: "Dabura & Babidi"}
        ],
        correctAnswer: "Majin Buu"
    },

    // Multiple Choice Questions
    { 
        type: "multiple_choice",
        question: "Who is the Supreme Kai who assists in the fight against Majin Buu?",
        options: ["Old Kai", "North Kai", "West Kai", "East Kai"],
        correctAnswer: "Old Kai"
    },
    { 
        type: "multiple_choice",
        question: "Which of the following characters absorbs Gotenks and Piccolo during the Buu Saga?",
        options: ["Super Buu", "Kid Buu", "Majin Buu", "Evil Buu"],
        correctAnswer: "Super Buu"
    }
];

// Combine questions from all sagas
var allQuestions = [];
allQuestions = allQuestions.concat(saiyanSagaQuestions, friezaSagaQuestions, cellSagaQuestions, buuSagaQuestions);

// Shuffle only 5 questions between the sagas
shuffleQuestions();

// Function to shuffle questions while maintaining the sequence within each saga
function shuffleQuestions() {
    var shuffledQuestions = [];
    var shuffledIndices = [];
    var questionIndices = Array.from({ length: allQuestions.length }, (_, i) => i); // Array containing indices of all questions

    while (shuffledIndices.length < 5) {
        var randomIndex = Math.floor(Math.random() * questionIndices.length); // Get a random index from the remaining questions
        var questionIndex = questionIndices[randomIndex]; // Get the question index

        if (!shuffledIndices.includes(questionIndex)) {
            shuffledQuestions.push(allQuestions[questionIndex]); // Add the question to shuffledQuestions
            shuffledIndices.push(questionIndex); // Add the index to shuffledIndices
            questionIndices.splice(randomIndex, 1); // Remove the index from questionIndices
        }
    }

    allQuestions = shuffledQuestions; // Replace allQuestions with the shuffled questions
}

// Function to display the current question
function displayQuestion() {
    // Get the question element and set its text content to the current question's text
    document.getElementById("question-text").textContent = allQuestions[currentQuestionIndex].question;
    // Clear any previous answer by setting the value of the text input field to an empty string
    document.getElementById("textAnswer").value = "";
}

// Function to validate text input
function validateTextInput() {
    var userInput = document.getElementById('textAnswer').value.trim().toLowerCase();
    var correctAnswer = questions[currentQuestionIndex].correctAnswer.toLowerCase();

    if (userInput === correctAnswer) {
        alert("Correct!");
    } else {
        alert("Incorrect.");
    }

    // Move to the next question
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        alert("Quiz completed!");
        // Reset quiz or display results
        currentQuestionIndex = 0;
        displayQuestion(); // Restart or handle end of quiz differently
    }
}

// Initialize the first question
displayQuestion();

// Global variables
var currentQuestionIndex = 0;
var score = 0;
var username = "";

// Function to start the quiz
function startQuiz() {
    // Reset score and current question index
    score = 0;
    currentQuestionIndex = 0;

    // Get the username
    username = document.getElementById("username").value;

    // Hide introduction and show quiz
    document.getElementById("introduction").style.display = "none";
    document.getElementById("quiz").style.display = "block";

    // Show first question
    showQuestion();
}

// Function to display the current question
function showQuestion() {
    var currentQuestion = allQuestions[currentQuestionIndex];
    var questionElement = document.getElementById("question");
    var optionsElement = document.getElementById("options");
    var textInput = document.getElementById("text-input");
    var imageSelection = document.getElementById("image-selection");
    var imageOptions = document.getElementById("image-options");
    imageOptions.innerHTML = ""; // Clear previous image options

    questionElement.textContent = "Question " + (currentQuestionIndex + 1) + ": " + currentQuestion.question;
    optionsElement.innerHTML = "";
    textInput.style.display = "none";
    imageSelection.style.display = "none";

    if (currentQuestion.type === "multiple_choice") {
        currentQuestion.options.forEach(function(option, index) {
            var radioBtn = document.createElement("input");
            radioBtn.setAttribute("type", "radio");
            radioBtn.setAttribute("name", "answer");
            radioBtn.setAttribute("value", option);
            optionsElement.appendChild(radioBtn);

            var label = document.createElement("label");
            label.textContent = option;
            optionsElement.appendChild(label);
            optionsElement.appendChild(document.createElement("br"));
        });
    } else if (currentQuestion.type === "text_input") {
        textInput.style.display = "block";
    } else if (currentQuestion.type === "image_selection") {
        imageSelection.style.display = "block";

        // Create image elements for image options
        currentQuestion.options.forEach(function(option) {
            var image = document.createElement("img");
            image.setAttribute("src", option.imageUrl);
            image.setAttribute("alt", option.correctAnswer);
            image.setAttribute("onclick", "checkImageSelection('" + option.correctAnswer + "')");
            imageOptions.appendChild(image);
        });
    }
}

// Function to handle image selection validation
function checkImageSelection(selectedAnswer) {
    var currentQuestion = allQuestions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < allQuestions.length) {
        showQuestion();
    } else {
        showFeedback();
    }
}

// Function to navigate to the next question
function nextQuestion() {
    var selectedAnswer;

    // Get selected answer based on question type
    var currentQuestion = allQuestions[currentQuestionIndex];
    if (currentQuestion.type === "multiple_choice") {
        selectedAnswer = document.querySelector('input[name="answer"]:checked');
        if (!selectedAnswer) {
            alert("Please select an answer.");
            return;
        }
        selectedAnswer = selectedAnswer.value;
    } else if (currentQuestion.type === "text_input") {
        selectedAnswer = document.getElementById("textAnswer").value.trim();
        if (selectedAnswer === "") {
            alert("Please enter an answer.");
            return;
        }
    } else if (currentQuestion.type === "image_selection") {
        // Add logic to get selected image answer
    }

    // Check answer and update score
    if (selectedAnswer === currentQuestion.correctAnswer) {
        score++;
    }

    // Move to the next question or show feedback
    currentQuestionIndex++;
    if (currentQuestionIndex < allQuestions.length) {
        showQuestion();
    } else {
        showFeedback();
    }
}

// Function to navigate to the previous question
function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

// Function to display feedback
function showFeedback() {
    var feedbackElement = document.getElementById("feedback");
    var scorePercentage = (score / allQuestions.length) * 100;
    var message = "Well done, " + username + "! You got " + scorePercentage.toFixed(2) + "%.";

    document.getElementById("score").textContent = "Your Score: " + scorePercentage.toFixed(2) + "%";
    document.getElementById("message").textContent = message;
    document.getElementById("quiz").style.display = "none";
    feedbackElement.style.display = "block";
}

// Function to shuffle array
function shuffle(array) {
    var currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}