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
      question: 'Which body is responsible for the appointment of the Prime Minister?',
      options: ['President', 'Parliament', 'Election Commission', 'Supreme Court'],
      answer: 'President',
    },
    {
      question: 'Which body is responsible for conducting elections in India?',
      options: ['Supreme Court', 'Election Commission', 'Parliament', 'President'],
      answer: 'Election Commission',
    },
    {
      question: 'The Finance Commission is constituted under which article?',
      options: ['Article 280', 'Article 300', 'Article 370', 'Article 368'],
      answer: 'Article 280',
    },
    {
      question: 'Who appoints the members of the National Commission for Scheduled Castes?',
      options: ['President', 'Prime Minister', 'Chief Justice', 'Parliament'],
      answer: 'President',
    },
    {
      question: 'Which body advises the President in matters of constitutional authority?',
      options: ['Union Cabinet', 'Parliament', 'Election Commission', 'Supreme Court'],
      answer: 'Union Cabinet',
    },
    {
      question: 'The Attorney General of India is appointed by whom?',
      options: ['President', 'Prime Minister', 'Chief Justice', 'Parliament'],
      answer: 'President',
    },
    {
      question: 'Which commission is set up for the welfare of Scheduled Tribes?',
      options: ['National Commission for Scheduled Castes', 'National Commission for Scheduled Tribes', 'Finance Commission', 'Planning Commission'],
      answer: 'National Commission for Scheduled Tribes',
    },
    {
      question: 'Which article provides for the establishment of the National Human Rights Commission?',
      options: ['Article 21', 'Article 32', 'Article 37', 'Article 38'],
      answer: 'Article 21',
    },
    {
      question: 'The Reserve Bank of India is responsible for the regulation of which aspect?',
      options: ['Monetary Policy', 'Fiscal Policy', 'Trade Policy', 'Foreign Policy'],
      answer: 'Monetary Policy',
    },
    {
      question: 'The Comptroller and Auditor General (CAG) is appointed by whom?',
      options: ['President', 'Prime Minister', 'Parliament', 'Chief Justice'],
      answer: 'President',
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
        <h2 className="mb-4">Constitutional Bodies Quiz</h2>
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
