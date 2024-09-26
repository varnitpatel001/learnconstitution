import React, { useState } from 'react';

const Quiz = () => {const displayCorrectAnswers = () => {
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
    const questions = [
        {
          question: 'Which article of the Constitution establishes the separation of powers?',
          options: ['Article 1', 'Article 2', 'There is no specific article', 'Article 3'],
          answer: 'There is no specific article',
        },
        {
          question: 'Which branch of government is responsible for making laws?',
          options: ['Executive', 'Judiciary', 'Legislature', 'All of the above'],
          answer: 'Legislature',
        },
        {
          question: 'Which branch of government interprets the law?',
          options: ['Executive', 'Legislature', 'Judiciary', 'None of the above'],
          answer: 'Judiciary',
        },
        {
          question: 'The President of India is a part of which branch of government?',
          options: ['Executive', 'Legislature', 'Judiciary', 'None of the above'],
          answer: 'Executive',
        },
        {
          question: 'Which body is responsible for administering laws and enforcing them?',
          options: ['Legislature', 'Judiciary', 'Executive', 'All of the above'],
          answer: 'Executive',
        },
        {
          question: 'The principle of separation of powers is primarily meant to:',
          options: ['Prevent concentration of power', 'Allow efficiency', 'Increase speed of governance', 'None of the above'],
          answer: 'Prevent concentration of power',
        },
        {
          question: 'Which of the following is an example of the Legislative Branch?',
          options: ['Supreme Court', 'Parliament', 'President', 'Police'],
          answer: 'Parliament',
        },
        {
          question: 'The Judiciary has the power to:',
          options: ['Make laws', 'Interpret laws', 'Enforce laws', 'None of the above'],
          answer: 'Interpret laws',
        },
        {
          question: 'Checks and balances are used to ensure that:',
          options: ['Each branch can act independently', 'No branch becomes too powerful', 'All branches are equal', 'None of the above'],
          answer: 'No branch becomes too powerful',
        },
        {
          question: 'Which article gives the power of judicial review to the Judiciary?',
          options: ['Article 13', 'Article 32', 'Article 226', 'Article 141'],
          answer: 'Article 13',
        },
      ];
      

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
     <h2 className="mb-4">Seperation of power Quiz</h2>
      {submitted ? (
        <div className="alert alert-success">
          <h4>Your Score: {score} / {questions.length}</h4>
          <button className="btn btn-primary" onClick={resetQuiz}>Retry</button>
          {displayCorrectAnswers()}  </div>
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
