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
  const questions=[
    {
      question: 'The Governor of a state is appointed by whom?',
      options: ['President', 'Prime Minister', 'Chief Minister', 'Legislative Assembly'],
      answer: 'President',
    },
    {
      question: 'Which article deals with the composition of the Legislative Assembly?',
      options: ['Article 170', 'Article 171', 'Article 172', 'Article 173'],
      answer: 'Article 170',
    },
    {
      question: 'Who has the power to dissolve the Legislative Assembly?',
      options: ['Governor', 'President', 'Chief Minister', 'Parliament'],
      answer: 'Governor',
    },
    {
      question: 'Which body is responsible for the formation of the state government?',
      options: ['Legislative Assembly', 'Legislative Council', 'Council of Ministers', 'Governor'],
      answer: 'Council of Ministers',
    },
    {
      question: 'How many states currently have a Legislative Council?',
      options: ['5', '6', '7', '8'],
      answer: '6',
    },
    {
      question: 'The Chief Minister is elected by which body?',
      options: ['Governor', 'Legislative Assembly', 'Legislative Council', 'Parliament'],
      answer: 'Legislative Assembly',
    },
    {
      question: 'The state legislature can make laws on which subjects?',
      options: ['State List', 'Concurrent List', 'Both A and B', 'None of the above'],
      answer: 'Both A and B',
    },
    {
      question: 'Which article deals with the appointment of the Chief Minister?',
      options: ['Article 164', 'Article 170', 'Article 175', 'Article 180'],
      answer: 'Article 164',
    },
    {
      question: 'Which article provides for the establishment of a State Election Commission?',
      options: ['Article 243', 'Article 243A', 'Article 243B', 'Article 243C'],
      answer: 'Article 243K',
    },
    {
      question: 'The legislative powers of a state are vested in which entity?',
      options: ['Governor', 'President', 'State Legislature', 'Chief Minister'],
      answer: 'State Legislature',
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
        <h2 className="mb-4">State Government Quiz</h2>
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
