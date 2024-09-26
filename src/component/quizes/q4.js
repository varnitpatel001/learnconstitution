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
          question: 'Under which article can the President of India declare a national emergency?',
          options: ['Article 352', 'Article 356', 'Article 360', 'Article 370'],
          answer: 'Article 352',
        },
        {
          question: 'A national emergency can be declared on which grounds?',
          options: ['War', 'External Aggression', 'Armed Rebellion', 'All of the Above'],
          answer: 'All of the Above',
        },
        {
          question: 'Which article relates to the proclamation of emergency in the state?',
          options: ['Article 356', 'Article 357', 'Article 358', 'Article 359'],
          answer: 'Article 356',
        },
        {
          question: 'What is the maximum period for which a national emergency can be declared?',
          options: ['6 months', '1 year', '2 years', 'Indefinite'],
          answer: 'Indefinite',
        },
        {
          question: 'Which article allows the President to legislate by ordinance during a national emergency?',
          options: ['Article 123', 'Article 124', 'Article 125', 'Article 126'],
          answer: 'Article 123',
        },
        {
          question: 'Fundamental Rights can be suspended during an emergency under which article?',
          options: ['Article 352', 'Article 356', 'Article 359', 'Article 360'],
          answer: 'Article 359',
        },
        {
          question: 'The President must act according to the advice of the council of ministers during which type of emergency?',
          options: ['National Emergency', 'State Emergency', 'Financial Emergency', 'None of the above'],
          answer: 'National Emergency',
        },
        {
          question: 'Which article relates to the proclamation of financial emergency?',
          options: ['Article 360', 'Article 361', 'Article 362', 'Article 363'],
          answer: 'Article 360',
        },
        {
          question: 'The term of the Lok Sabha can be extended during a national emergency by how long?',
          options: ['6 months', '1 year', '2 years', 'Indefinite'],
          answer: '1 year',
        },
        {
          question: 'Which article allows the President to assume control of the state during a state emergency?',
          options: ['Article 356', 'Article 357', 'Article 358', 'Article 359'],
          answer: 'Article 356',
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
      <h2 className="mb-4">Emergency Provisions Quiz</h2>
      {submitted ? (
        <div className="alert alert-success">
          <h4>Your Score: {score} / {questions.length}</h4>
          <button className="btn btn-primary" onClick={resetQuiz}>Retry</button>
          {displayCorrectAnswers()} </div>
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
