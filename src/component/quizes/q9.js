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
  const questions  = [
    {
      question: 'The Supreme Court of India was established under which article?',
      options: ['Article 124', 'Article 126', 'Article 128', 'Article 130'],
      answer: 'Article 124',
    },
    {
      question: 'The Chief Justice of India is appointed by whom?',
      options: ['The President', 'The Prime Minister', 'The Chief Justice of the previous term', 'The Parliament'],
      answer: 'The President',
    },
    {
      question: 'The power of judicial review is implied under which article?',
      options: ['Article 13', 'Article 32', 'Article 136', 'Article 142'],
      answer: 'Article 13',
    },
    {
      question: 'The High Courts in India were established under which article?',
      options: ['Article 214', 'Article 215', 'Article 216', 'Article 217'],
      answer: 'Article 214',
    },
    {
      question: 'The power to appoint judges of the Supreme Court is vested in which article?',
      options: ['Article 124', 'Article 126', 'Article 128', 'Article 130'],
      answer: 'Article 124',
    },
    {
      question: 'The doctrine of separation of powers is provided under which article?',
      options: ['Article 50', 'Article 51', 'Article 52', 'Article 53'],
      answer: 'Article 50',
    },
    {
      question: 'What is the retirement age for judges of the Supreme Court?',
      options: ['62 years', '65 years', '70 years', '60 years'],
      answer: '65 years',
    },
    {
      question: 'The Supreme Court has original jurisdiction in which of the following cases?',
      options: ['Disputes between states', 'Disputes involving the President', 'Disputes involving Parliament', 'All of the above'],
      answer: 'All of the above',
    },
    {
      question: 'The Supreme Court can issue writs under which article?',
      options: ['Article 32', 'Article 226', 'Article 136', 'Article 142'],
      answer: 'Article 32',
    },
    {
      question: 'Judges of the Supreme Court are appointed for a term of how many years?',
      options: ['Life', 'Fixed term', 'Until 62 years', 'Until 65 years'],
      answer: 'Life',
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
        <h2 className="mb-4">Judiciary Quiz</h2>
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
