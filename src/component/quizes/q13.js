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
      question: 'What is the upper house of the Parliament of India called?',
      options: ['Lok Sabha', 'Rajya Sabha', 'Vidhan Sabha', 'None'],
      answer: 'Rajya Sabha',
    },
    {
      question: 'How many members are there in the Lok Sabha?',
      options: ['543', '250', '245', '300'],
      answer: '543',
    },
    {
      question: 'Who is the Speaker of the Lok Sabha?',
      options: ['President', 'Vice President', 'Elected Member', 'Prime Minister'],
      answer: 'Elected Member',
    },
    {
      question: 'How long is the term of a Lok Sabha member?',
      options: ['4 years', '5 years', '6 years', '2 years'],
      answer: '5 years',
    },
    {
      question: 'What is the maximum strength of Rajya Sabha?',
      options: ['245', '250', '300', '200'],
      answer: '250',
    },
    {
      question: 'Who presides over the Rajya Sabha?',
      options: ['President', 'Vice President', 'Prime Minister', 'Home Minister'],
      answer: 'Vice President',
    },
    {
      question: 'What is the process of impeachment of the President?',
      options: ['Simple Majority', 'Two-Thirds Majority', 'Half Majority', 'None'],
      answer: 'Two-Thirds Majority',
    },
    {
      question: 'Which house has the power to initiate money bills?',
      options: ['Rajya Sabha', 'Lok Sabha', 'Both', 'None'],
      answer: 'Lok Sabha',
    },
    {
      question: 'Which article of the Constitution defines the composition of the Rajya Sabha?',
      options: ['Article 80', 'Article 81', 'Article 82', 'Article 83'],
      answer: 'Article 80',
    },
    {
      question: 'What is the minimum age to be a member of the Lok Sabha?',
      options: ['25 years', '30 years', '21 years', '18 years'],
      answer: '25 years',
    },
    {
      question: 'Which of the following is NOT a function of the Parliament?',
      options: ['Legislation', 'Budget Approval', 'Judiciary Review', 'Representation'],
      answer: 'Judiciary Review',
    },
    {
      question: 'How many sessions does Parliament have in a year?',
      options: ['Two', 'Three', 'Four', 'Five'],
      answer: 'Three',
    },
    {
      question: 'Who can summon and prorogue Parliament?',
      options: ['Prime Minister', 'President', 'Speaker', 'Vice President'],
      answer: 'President',
    },
    {
      question: 'What is the Rajya Sabha’s role in the legislative process?',
      options: ['Only approval', 'Only recommendation', 'Debate and approval', 'None'],
      answer: 'Debate and approval',
    },
    {
      question: 'Which article allows the Parliament to make laws for the whole country?',
      options: ['Article 245', 'Article 246', 'Article 247', 'Article 248'],
      answer: 'Article 245',
    },
    {
      question: 'Which schedule of the Constitution contains the list of subjects in the State List?',
      options: ['Third Schedule', 'Seventh Schedule', 'Fifth Schedule', 'Sixth Schedule'],
      answer: 'Seventh Schedule',
    },
    {
      question: 'What is the maximum term for a member of the Rajya Sabha?',
      options: ['6 years', '5 years', '4 years', '3 years'],
      answer: '6 years',
    },
    {
      question: 'Which article mentions the composition of the Lok Sabha?',
      options: ['Article 81', 'Article 80', 'Article 82', 'Article 83'],
      answer: 'Article 81',
    },
    {
      question: 'What is the quorum required for a Lok Sabha meeting?',
      options: ['One-Tenth', 'One-Fourth', 'One-Half', 'One-Third'],
      answer: 'One-Tenth',
    },
    {
      question: 'Who has the authority to dissolve the Lok Sabha?',
      options: ['President', 'Prime Minister', 'Speaker', 'Council of Ministers'],
      answer: 'President',
    },
    {
      question: 'What is the total number of members in the Rajya Sabha?',
      options: ['250', '245', '240', '230'],
      answer: '245',
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
      <h2 className="mb-4">Parliament Quiz</h2>
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
