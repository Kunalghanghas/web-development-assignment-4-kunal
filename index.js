// quiz.js
// Prompt Quizzer - runs entirely in the browser console
// Paste the whole file into the browser console and press Enter to start.

const quizQuestions = [
  { question: "What is the capital of India?", answer: "new delhi" },
  { question: "Which language is primarily used for web page structure?", answer: "html" },
  { question: "What does CSS stand for?", answer: "cascading style sheets" },
  { question: "Which company created JavaScript?", answer: "netscape" },
  { question: "What keyword is used to declare a variable in modern JavaScript?", answer: "let" }
];

// Normalizes strings for comparison
function normalizeInput(s) {
  if (s === null) return ""; // handle Cancel
  return s.toLowerCase().trim();
}

// Run the quiz
function runQuiz() {
  let score = 0;
  const total = quizQuestions.length;

  alert("Welcome to Prompt Quizzer!\nYou can type 'quit' in any prompt to exit early.");

  for (let i = 0; i < total; i++) {
    const qObj = quizQuestions[i];

    const userRaw = prompt(`Question ${i + 1} of ${total}:\n${qObj.question}`);

    // If user pressed Cancel, treat as quit
    if (userRaw === null) {
      const confirmQuit = confirm("You pressed Cancel. Do you want to quit the quiz?");
      if (confirmQuit) {
        alert(`You quit early. Your score: ${score} / ${total}`);
        return;
      } else {
        i--; // re-ask same question
        continue;
      }
    }

    const user = normalizeInput(userRaw);

    // Allow user to type 'quit'
    if (user === "quit") {
      alert(`You quit the quiz. Final score: ${score} / ${total}`);
      return;
    }

    if (user === qObj.answer) {
      score++;
      alert(`Correct! ✅\nCurrent score: ${score} / ${total}`);
    } else if (user === "") {
      alert(`No answer entered.\nThe correct answer was: "${qObj.answer}".`);
    } else {
      alert(`Incorrect.\nThe correct answer was: "${qObj.answer}".`);
    }
  }

  alert(`Quiz finished! Your final score: ${score} / ${total}`);

  // Offer restart
  const playAgain = confirm("Do you want to play again?");
  if (playAgain) {
    runQuiz();
  } else {
    alert("Thanks for playing Prompt Quizzer!");
  }
}

// Auto-start
runQuiz();
