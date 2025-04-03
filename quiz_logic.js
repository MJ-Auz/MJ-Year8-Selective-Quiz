
let currentQuestion = 0;
let answers = [];
const form = document.getElementById("quizForm");

function renderQuestion(index) {
  form.innerHTML = "";
  const question = questions[index];
  const div = document.createElement("div");
  div.className = "question";
  div.innerHTML = `<p><strong>Question ${index + 1}:</strong></p><p>${question.q}</p>`;

  const opts = question.options.map((opt, j) => {
    const checked = answers[index] === j ? "checked" : "";
    const labels = ["A.", "B.", "C.", "D."];
    return `<label><input type="radio" name="q${index}" value="${j}" ${checked}/><span>${labels[j]} ${opt}</span></label>`;
  }).join("");

  div.innerHTML += `<div class="options">${opts}</div>`;
  div.innerHTML += `<div class="feedback" id="feedback${index}"></div>`;
  form.appendChild(div);

  const buttonContainer = document.createElement("div");
  buttonContainer.className = "button-container";

  if (index > 0) {
    const prevBtn = document.createElement("button");
    prevBtn.textContent = "Previous Question";
    prevBtn.className = "prev-btn";
    prevBtn.onclick = function(e) {
      this.style.display = "none";
      e.preventDefault();
      saveAnswer(index);
      currentQuestion--;
      renderQuestion(currentQuestion);
    };
    buttonContainer.appendChild(prevBtn);
  }

  const nextBtn = document.createElement("button");
  nextBtn.textContent = index < questions.length - 1 ? "Next Question" : "Finish";
  nextBtn.className = "next-btn";
  nextBtn.onclick = function(e) {
    e.preventDefault();
    saveAnswer(index);
    checkAnswer(index);
    if (index < questions.length - 1) {
      currentQuestion++;
      renderQuestion(currentQuestion);
    } else {
      nextBtn.style.display = "none";
      const prevBtn = document.querySelector(".prev-btn");
      if (prevBtn) prevBtn.remove();
      submitQuiz();
    }
  };
  buttonContainer.appendChild(nextBtn);
  form.appendChild(buttonContainer);
}

function saveAnswer(index) {
  const selected = document.querySelector(`input[name='q${index}']:checked`);
  answers[index] = selected ? parseInt(selected.value) : null;
}

function checkAnswer(index) {
  const feedback = document.getElementById(`feedback${index}`);
  const selected = answers[index];
  if (selected !== null) {
    if (selected === questions[index].answer) {
      feedback.textContent = "Correct!";
      feedback.style.color = "green";
    } else {
      feedback.textContent = `Incorrect. Correct answer: ${questions[index].options[questions[index].answer]}`;
      feedback.style.color = "red";
    }
  } else {
    feedback.textContent = "No answer selected.";
    feedback.style.color = "orange";
  }
}

function submitQuiz() {
  let score = 0;
  let summaryHTML = '<h2>Summary</h2><ul>';
  answers.forEach((answer, i) => {
    const isCorrect = answer === questions[i].answer;
    const userAnswerText = answer !== null ? questions[i].options[answer] : "No answer";
    const correctAnswerText = questions[i].options[questions[i].answer];
    if (isCorrect) score++;
    summaryHTML += `<li><strong>Q${i + 1}:</strong> ${questions[i].q}<br>` +
                    `Your answer: ${userAnswerText}<br>` +
                    `Correct answer: ${correctAnswerText}<br>` +
                    `<span style='color:${isCorrect ? "green" : "red"}'>${isCorrect ? "Correct" : "Incorrect"}</span></li><br>`;
  });
  summaryHTML += '</ul>';
  document.getElementById("result").innerHTML = `You scored ${score} out of ${questions.length}` + summaryHTML;
}

function startTimer(duration) {
  let timer = duration, minutes, seconds;
  const display = document.getElementById('time');
  const interval = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.textContent = minutes + ":" + seconds;
    if (--timer < 0) {
      clearInterval(interval);
      alert("Time's up! Submitting your quiz.");
      submitQuiz();
    }
  }, 1000);
}
