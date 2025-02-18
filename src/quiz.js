class Quiz {
  // YOUR CODE HERE:
  //
  // 1. constructor (questions, timeLimit, timeRemaining)
  constructor(questions, timeLimit, timeRemaining) {
    this.questions = questions;
    this.timeLimit = timeLimit;
    this.timeRemaining = timeRemaining;
    this.correctAnswers = 0;
    this.currentQuestionIndex = 0;
  }
  // 2. getQuestion()
  getQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  // 3. moveToNextQuestion()
  moveToNextQuestion() {
    this.currentQuestionIndex += 1;
  }
  // 4. shuffleQuestions()
  shuffleQuestions() {
    this.questions.sort(() => Math.random() - 0.5);
  }
  // 5. checkAnswer(answer)
  checkAnswer(answer) {
    if (answer === this.questions[this.currentQuestionIndex].answer) {
      this.correctAnswers += 1;
      return true;
    }
    return false;
  }
  // 6. hasEnded()
  hasEnded() {
    if (this.currentQuestionIndex === this.questions.length) {
      return true;
    } else if (this.currentQuestionIndex < this.questions.length) {
      return false;
    }
  }

  filterQuestionsByDifficulty(difficulty) {
    if (typeof difficulty !== "number" || difficulty < 1 || difficulty > 3) {
      console.log("Difficulty must be a number between 1 and 3");
      return;
    }

    this.questions = this.questions.filter((question) => {
      return question.difficulty === difficulty;
    });
  }

  averageDifficulty() {
    let sumDiff = this.questions.reduce((sumDiff, currentQuestion) => {
      return sumDiff + currentQuestion.difficulty;
    }, 0);

    return sumDiff / this.questions.length;
  }
}
