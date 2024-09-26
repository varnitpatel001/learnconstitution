import React, { useState } from 'react';

const Quiz = () => {
    const questions = [
        {
          question: 'Which article of the Constitution contains the Directive Principles of State Policy?',
          options: ['Article 36', 'Article 37', 'Article 38', 'Article 39'],
          answer: 'Article 36',
        },
        {
          question: 'Which of the following is a Directive Principle?',
          options: ['Right to Equality', 'Right to Freedom', 'Right to Education', 'Right to Work'],
          answer: 'Right to Work',
        },
        {
          question: 'Which article directs the state to provide just and humane conditions of work?',
          options: ['Article 41', 'Article 42', 'Article 43', 'Article 44'],
          answer: 'Article 42',
        },
        {
          question: 'The Directive Principles of State Policy are contained in which part of the Constitution?',
          options: ['Part IV', 'Part III', 'Part II', 'Part I'],
          answer: 'Part IV',
        },
        {
          question: 'Which of the following is NOT a Directive Principle?',
          options: ['Promotion of educational and economic interests of Scheduled Castes', 'Uniform civil code', 'Right to freedom of speech', 'Right to work'],
          answer: 'Right to freedom of speech',
        },
        {
          question: 'Article 45 mandates the state to provide for early childhood care and education for which age group?',
          options: ['0-6 years', '6-14 years', '14-18 years', '18-21 years'],
          answer: '0-6 years',
        },
        {
          question: 'Which article emphasizes the right to work, education, and public assistance?',
          options: ['Article 41', 'Article 42', 'Article 43', 'Article 44'],
          answer: 'Article 41',
        },
        {
          question: 'Which article of the Constitution directs the state to promote educational and economic interests of Scheduled Tribes?',
          options: ['Article 46', 'Article 47', 'Article 48', 'Article 49'],
          answer: 'Article 46',
        },
        {
          question: 'The Directive Principles are intended to be:',
          options: ['Legally enforceable', 'Non-justiciable', 'A part of Fundamental Rights', 'None of the above'],
          answer: 'Non-justiciable',
        },
        {
          question: 'Which article directs the state to secure for the citizens a uniform civil code?',
          options: ['Article 44', 'Article 45', 'Article 46', 'Article 47'],
          answer: 'Article 44',
        },
      ];
      const displayCorrectAnswers = () => {
        return (
          <div>
            <h4>Correct Answers:</h4>
            <ul className="list-group">
              {questions.map((question, index) => (
                <li key={index} className="list-group-item">
                  <strong>Q: {question.question}</strong><br />
                  <strong>Correct Answer: {question.answer}</strong>
                </li>
              ))}
            </ul>
          </div>
        );
      };

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleAnswerOptionClick = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setSubmitted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSubmitted(false);
  };

  return (
    <div className="container  mt-5 p-5 bg-primary rounded"  style={{background: "rgb(196,57,31)",
    background: "radial-gradient(circle, rgba(196,57,31,0.8253676470588236) 21%, rgba(198,217,236,0.9514180672268907) 96%)"}}  >
   
      <h2 className="mb-4">Fundamental Duties Quiz</h2>
      {submitted ? (
        <div className="alert alert-success">
          <h4>Your Score: {score} / {questions.length}</h4>
          <button className="btn btn-primary" onClick={resetQuiz}>Retry</button>
          {displayCorrectAnswers()}</div>
      ) : (
        <div>
          <h4>{questions[currentQuestion].question}</h4>
          <div className="list-group mt-3">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className="list-group-item list-group-item-action"
                onClick={() => handleAnswerOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
