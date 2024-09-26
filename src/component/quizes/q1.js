import React, { useState } from 'react';
import './style.css'
const Quiz = () => {
  
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
  const questions = [
    {
      question: 'Which article of the Indian Constitution guarantees the Right to Equality?',
      options: ['Article 14', 'Article 19', 'Article 21', 'Article 32'],
      answer: 'Article 14',
    },
    {
      question: 'Which of the following is NOT a Fundamental Right?',
      options: ['Right to Equality', 'Right to Freedom', 'Right to Property', 'Right to Constitutional Remedies'],
      answer: 'Right to Property',
    },
    {
      question: 'Which article guarantees the Right to Freedom of Speech and Expression?',
      options: ['Article 19', 'Article 20', 'Article 21', 'Article 22'],
      answer: 'Article 19',
    },
    {
      question: 'The Right to Life and Personal Liberty is guaranteed under which article?',
      options: ['Article 19', 'Article 20', 'Article 21', 'Article 22'],
      answer: 'Article 21',
    },
    {
      question: 'Which article prohibits discrimination on grounds of religion, race, caste, sex or place of birth?',
      options: ['Article 14', 'Article 15', 'Article 16', 'Article 17'],
      answer: 'Article 15',
    },
    {
      question: 'The prohibition of bonded labor is under which article?',
      options: ['Article 23', 'Article 24', 'Article 25', 'Article 26'],
      answer: 'Article 23',
    },
    {
      question: 'The Right to Education is a Fundamental Right under which article?',
      options: ['Article 21A', 'Article 22', 'Article 23', 'Article 24'],
      answer: 'Article 21A',
    },
    {
      question: 'Which article empowers the state to impose reasonable restrictions on the exercise of Fundamental Rights?',
      options: ['Article 19', 'Article 20', 'Article 21', 'Article 22'],
      answer: 'Article 19',
    },
    {
      question: 'Which Fundamental Right protects the rights of minorities?',
      options: ['Right to Equality', 'Right to Freedom', 'Cultural and Educational Rights', 'Right to Constitutional Remedies'],
      answer: 'Cultural and Educational Rights',
    },
    {
      question: 'Article 23 prohibits which type of exploitation?',
      options: ['Traffic in Human Beings', 'Child Labor', 'Bonded Labor', 'All of the Above'],
      answer: 'All of the Above',
    },
    {
      question: 'Which article relates to the prohibition of discrimination on grounds of religion, race, caste, sex or place of birth?',
      options: ['Article 15', 'Article 16', 'Article 17', 'Article 18'],
      answer: 'Article 15',
    },
    {
      question: 'What is the maximum number of Fundamental Rights in the Indian Constitution?',
      options: ['6', '7', '8', '9'],
      answer: '6',
    },
    {
      question: 'Which article provides for the protection of certain rights regarding conviction for offenses?',
      options: ['Article 20', 'Article 21', 'Article 22', 'Article 23'],
      answer: 'Article 20',
    },
    {
      question: 'Article 21 provides for the Right to Life and Personal Liberty. What does it include?',
      options: ['Right to live with dignity', 'Right to privacy', 'Right to health', 'All of the Above'],
      answer: 'All of the Above',
    },
    {
      question: 'Which article protects the right against arrest and detention in certain cases?',
      options: ['Article 21', 'Article 22', 'Article 23', 'Article 24'],
      answer: 'Article 22',
    },
    {
      question: 'Which article of the Constitution allows for the enforcement of Fundamental Rights?',
      options: ['Article 32', 'Article 33', 'Article 34', 'Article 35'],
      answer: 'Article 32',
    },
    {
      question: 'Fundamental Rights are justiciable. What does this mean?',
      options: ['They are not enforceable by law', 'They are enforceable by law', 'They are only applicable to citizens', 'None of the above'],
      answer: 'They are enforceable by law',
    },
    {
      question: 'Which article provides for the right to move the Supreme Court for the enforcement of Fundamental Rights?',
      options: ['Article 32', 'Article 19', 'Article 21', 'Article 25'],
      answer: 'Article 32',
    },
    {
      question: 'Fundamental Rights can be suspended during a national emergency. Under which article?',
      options: ['Article 352', 'Article 356', 'Article 360', 'Article 370'],
      answer: 'Article 358',
    },
    {
      question: 'Which article deals with the Right to Freedom of Religion?',
      options: ['Article 25', 'Article 26', 'Article 27', 'Article 28'],
      answer: 'Article 25',
    },
    {
      question: 'Article 17 abolishes which social practice?',
      options: ['Untouchability', 'Child Labor', 'Dowry', 'All of the above'],
      answer: 'Untouchability',
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
    <div className="container  mt-5 p-5 bg-primary rounded  "  style={{background: "rgb(196,57,31)",
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
