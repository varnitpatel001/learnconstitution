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
      question: 'Which article of the Constitution deals with the composition of the Council of Ministers?',
      options: ['Article 74', 'Article 75', 'Article 76', 'Article 77'],
      answer: 'Article 75',
    },
    {
      question: 'The President is elected by which of the following?',
      options: ['Electoral College', 'People directly', 'Members of Lok Sabha', 'Rajya Sabha members'],
      answer: 'Electoral College',
    },
    {
      question: 'Which of the following is NOT a part of the Union Government?',
      options: ['Prime Minister', 'Council of Ministers', 'Governor', 'Parliament'],
      answer: 'Governor',
    },
    {
      question: 'The maximum strength of Lok Sabha is fixed at?',
      options: ['500', '550', '600', '750'],
      answer: '552',
    },
    {
      question: 'Which article describes the Governor’s power to summon the legislature?',
      options: ['Article 168', 'Article 169', 'Article 170', 'Article 171'],
      answer: 'Article 174',
    },
    {
      question: 'The concept of a single citizenship in India is mentioned in which article?',
      options: ['Article 5', 'Article 6', 'Article 7', 'Article 8'],
      answer: 'Article 5',
    },
    {
      question: 'Which article describes the procedure for the impeachment of the President?',
      options: ['Article 61', 'Article 62', 'Article 63', 'Article 64'],
      answer: 'Article 61',
    },
    {
      question: 'The Rajya Sabha can have a maximum of how many members?',
      options: ['250', '300', '200', '150'],
      answer: '250',
    },
    {
      question: 'The Union Government is responsible for which of the following?',
      options: ['Defense', 'Police', 'Education', 'Health'],
      answer: 'Defense',
    },
    {
      question: 'Which article provides for the establishment of a Finance Commission?',
      options: ['Article 280', 'Article 281', 'Article 282', 'Article 283'],
      answer: 'Article 280',
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
       <h2 className="mb-4">Union Govt Quiz</h2>
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
