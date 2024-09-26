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
      question: 'The right to vote in India is guaranteed under which article?',
      options: ['Article 326', 'Article 325', 'Article 324', 'Article 327'],
      answer: 'Article 326',
    },
    {
      question: 'Who conducts elections in India?',
      options: ['Election Commission of India', 'Parliament', 'Supreme Court', 'President'],
      answer: 'Election Commission of India',
    },
    {
      question: 'Which amendment lowered the voting age from 21 to 18 years?',
      options: ['61st Amendment', '62nd Amendment', '63rd Amendment', '64th Amendment'],
      answer: '61st Amendment',
    },
    {
      question: 'What is the maximum term for the Lok Sabha?',
      options: ['4 years', '5 years', '6 years', '7 years'],
      answer: '5 years',
    },
    {
      question: 'The President of India is elected by which method?',
      options: ['Direct election', 'Indirect election', 'By the Parliament', 'By the state legislatures'],
      answer: 'Indirect election',
    },
    {
      question: 'The Election Commission of India was established under which article?',
      options: ['Article 324', 'Article 325', 'Article 326', 'Article 327'],
      answer: 'Article 324',
    },
    {
      question: 'Which of the following is NOT a qualification for voting in India?',
      options: ['Must be a citizen of India', 'Must be 18 years of age', 'Must not be declared mentally unsound', 'Must have a job'],
      answer: 'Must have a job',
    },
    {
      question: 'The President of India is elected for a term of how many years?',
      options: ['3 years', '5 years', '6 years', '4 years'],
      answer: '5 years',
    },
    {
      question: 'What is the purpose of the Model Code of Conduct?',
      options: ['To ensure free and fair elections', 'To regulate party funding', 'To govern election disputes', 'To conduct opinion polls'],
      answer: 'To ensure free and fair elections',
    },
    {
      question: 'The Chief Election Commissioner can be removed from office in the same manner as which of the following?',
      options: ['President', 'Governor', 'Supreme Court judges', 'Parliament members'],
      answer: 'Supreme Court judges',
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
        <h2 className="mb-4">Elections Quiz</h2>
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
