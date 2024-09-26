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
      question: 'Which article of the Constitution provides for its amendment?',
      options: ['Article 368', 'Article 370', 'Article 356', 'Article 352'],
      answer: 'Article 368',
    },
    {
      question: 'The first amendment to the Constitution was enacted in which year?',
      options: ['1950', '1951', '1952', '1953'],
      answer: '1951',
    },
    {
      question: 'Which of the following is a procedure to amend the Constitution?',
      options: ['Simple majority', 'Special majority', 'Ratification by states', 'All of the above'],
      answer: 'All of the above',
    },
    {
      question: 'The 73rd Amendment pertains to which aspect of governance?',
      options: ['Local self-government', 'Fundamental Rights', 'Directive Principles', 'Constitutional Amendments'],
      answer: 'Local self-government',
    },
    {
      question: 'How many schedules were there in the Constitution at the time of commencement?',
      options: ['12', '14', '10', '8'],
      answer: '8',
    },
    {
      question: 'Which amendment is known for the "Right to Education"?',
      options: ['86th Amendment', '73rd Amendment', '61st Amendment', '74th Amendment'],
      answer: '86th Amendment',
    },
    {
      question: 'Which article specifies that an amendment to the Constitution must be presented to the President?',
      options: ['Article 367', 'Article 368', 'Article 369', 'Article 370'],
      answer: 'Article 368',
    },
    {
      question: 'Which amendment abolished the Right to Property as a Fundamental Right?',
      options: ['42nd Amendment', '43rd Amendment', '44th Amendment', '45th Amendment'],
      answer: '44th Amendment',
    },
    {
      question: 'What is the minimum number of states required to ratify an amendment?',
      options: ['10', '15', '20', 'Half of the states'],
      answer: 'Half of the states',
    },
    {
      question: 'Which article was amended to make the "Fundamental Right to Education" a right?',
      options: ['Article 21', 'Article 21A', 'Article 19', 'Article 32'],
      answer: 'Article 21A',
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
       <h2 className="mb-4">Amendments Quiz</h2>
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
