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
      question: 'What is the primary purpose of the Preamble of the Indian Constitution?',
      options: ['To introduce the Constitution', 'To outline the fundamental rights', 'To declare the objectives of the Constitution', 'To define the structure of the government'],
      answer: 'To declare the objectives of the Constitution',
    },
    {
      question: 'The Preamble mentions "We, the People of India." What does this signify?',
      options: ['Sovereignty', 'Democracy', 'Unity', 'Justice'],
      answer: 'Democracy',
    },
    {
      question: 'Which of the following is NOT mentioned in the Preamble?',
      options: ['Justice', 'Liberty', 'Fraternity', 'Equality of opportunity'],
      answer: 'Equality of opportunity',
    },
    {
      question: 'The phrase "Sovereign, Socialist, Secular, Democratic Republic" is mentioned in which part of the Constitution?',
      options: ['Fundamental Rights', 'Directive Principles', 'Preamble', 'Fundamental Duties'],
      answer: 'Preamble',
    },
    {
      question: 'The Preamble is based on which of the following philosophical concepts?',
      options: ['Liberty, Equality, Fraternity', 'Justice, Liberty, Equality', 'Unity, Justice, Liberty', 'Sovereignty, Justice, Fraternity'],
      answer: 'Justice, Liberty, Equality',
    },
    {
      question: 'What does the term "Socialist" in the Preamble imply?',
      options: ['Economic equality', 'Political equality', 'Social equality', 'Cultural equality'],
      answer: 'Economic equality',
    },
    {
      question: 'The Preamble serves as a guiding light for which of the following?',
      options: ['Legislature only', 'Executive only', 'Judiciary only', 'All branches of government'],
      answer: 'All branches of government',
    },
    {
      question: 'Which amendment added the words "Socialist" and "Secular" to the Preamble?',
      options: ['42nd Amendment', '44th Amendment', '61st Amendment', '73rd Amendment'],
      answer: '42nd Amendment',
    },
    {
      question: 'The Preamble reflects the ideals of which document?',
      options: ['American Constitution', 'French Declaration of the Rights of Man', 'Irish Constitution', 'British Constitution'],
      answer: 'French Declaration of the Rights of Man',
    },
    {
      question: 'What is the significance of the term "Republic" in the Preamble?',
      options: ['Head of the state is elected', 'Head of the state is hereditary', 'Political equality', 'Cultural diversity'],
      answer: 'Head of the state is elected',
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
        <h2 className="mb-4">Premeble Quiz</h2>
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
