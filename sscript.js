const quizQuestions = [
    {
      question: "Which of the following element is responsible for making the text bold in HTML?",
      options: ["<a>", "<pre>", "<br>", "<b>"],
      correctAnswer: "<b>"
    },
    {
      question: "Which of the following HTML attribute is used to define inline styles?",
      options: ["style", "type", "class", "none of the above"],
      correctAnswer: "style"
    },
    {
      question: "The tags in HTML are : ",
      options: ["case-sensitive", "in upper case", "not case sensitive", "in lowercase"],
      correctAnswer: "not case sensitive"
    }
  ];
  let currentQuestionIndex = 0;
  let score = 0;
  // Function to start the quiz
  function startQuiz() {
    // Hide the start button and display the first question
    document.getElementById("start-button").style.display = "none";
    displayQuestion();
  }
  function displayQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const questionText = document.getElementById("question-text");
    const answerButtons = document.getElementById("answer-buttons");
   // Clear previous question and answer options
    questionText.innerHTML = "";
    answerButtons.innerHTML = "";
  // Display the current question
    questionText.innerHTML = currentQuestion.question;
 // Create answer buttons for each option
    currentQuestion.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      button.classList.add("answer-button");
      answerButtons.appendChild(button);
  // Add click event listener to check the answer
      button.addEventListener("click", function() {
        checkAnswer(option);
      });
    });
  }
   // Function to check the selected answer
  function checkAnswer(selectedOption) {
    const currentQuestion = quizQuestions[currentQuestionIndex];
  // Check if the selected answer is correct
    if (selectedOption === currentQuestion.correctAnswer) {
      score++;
    }
   // Move to the next question or end the quiz if all questions are answered
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
      displayQuestion();
    } else {
      endQuiz();
    }
  }
  function endQuiz() 
  {
    const scorePercentage = (score / quizQuestions.length) * 100;
    // Display the final score
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = `
      <h2>Quiz Completed!</h2>
      <p><b>Your Score: ${score} out of ${quizQuestions.length}</p>
      <p>Score Percentage: ${scorePercentage}%</p>
    `;}
  
 // Add event listener to start the quiz when the start button is clicked
  document.getElementById("start-button").addEventListener("click", startQuiz);
