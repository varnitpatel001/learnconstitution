import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './learn.css'; // Import custom CSS for styling

const Quiz = () => {
  const topics = [
    { name: 'Fundamental Rights', quizRoute: '/Q11', articleRoute: '/A11' },
    { name: 'Fundamental Duties', quizRoute: '/Q2', articleRoute: '/A2' },
    { name: 'Directive Principles of State Policy', quizRoute: '/Q1', articleRoute: '/A1' },
    { name: 'Parliament', quizRoute: '/Q13', articleRoute: '/A13' },
    { name: 'Judiciary', quizRoute: '/Q9', articleRoute: '/A9' },
    { name: 'State Government', quizRoute: '/Q8', articleRoute: '/A8' },
    { name: 'Elections', quizRoute: '/Q12', articleRoute: '/A12' },
    { name: 'Amendments', quizRoute: '/Q5', articleRoute: '/A5' },
    { name: 'Constitutional Bodies', quizRoute: '/Q7', articleRoute: '/A7' },
    { name: 'Emergency Provisions', quizRoute: '/Q4', articleRoute: '/A4' },
    { name: 'Preamble', quizRoute: '/Q10', articleRoute: '/A10' },
    { name: 'Separation of power', quizRoute: '/Q3', articleRoute: '/A3' },
    { name: 'Union', quizRoute: '/Q6', articleRoute: '/A6' }
  ];

  const [selectedTopics, setSelectedTopics] = useState([]);
  const [completedQuizzes, setCompletedQuizzes] = useState(0);

  // Function to handle checkbox change
  const handleCheckboxChange = (topic) => {
    setSelectedTopics((prev) => {
      const updatedSelection = prev.includes(topic)
        ? prev.filter(t => t !== topic)
        : [...prev, topic];
      
      setCompletedQuizzes(updatedSelection.length);
      return updatedSelection;
    });
  };

  return (
    <div className="container-fluid  px-3" style={{ width: "100%" ,height:"600px" }}>
    <div className="description mb-5">
      <h1>About the Constitution of India</h1>
      <p className="lead">
        The Constitution of India is the supreme law of the land. It lays down the framework defining fundamental political principles, establishes the structure, procedures, powers, and duties of government institutions, and sets out fundamental rights, directive principles, and the duties of citizens. It is the longest-written constitution of any country in the world and came into effect on 26th January 1950.
      </p>
      <p className="lead">
        The Constitution was adopted by the Constituent Assembly of India on 26th November 1949 and became effective on 26th January 1950, marking the birth of the Republic of India. It established India as a sovereign, socialist, secular, and democratic republic and provides a framework for the country's governance. It is known for incorporating fundamental rights, directive principles of state policy, and the duties of citizens.
      </p>
      <p className="lead">
        Over the years, the Constitution has been amended to adapt to changing social, political, and economic conditions. It ensures the protection of individual liberties and provides checks and balances through the separation of powers between the executive, legislature, and judiciary.
      </p>
      <p className="lead">
        The Constitution has been a guiding document for Indian governance and remains a living, dynamic framework that evolves with the needs of the people and the nation.
      </p></div>
      <div className="description mb-5">
      <h2>Why Should One Learn About the Constitution of India?</h2>
      <p className="lead">
        Understanding the Constitution is essential for every citizen, as it empowers individuals to be informed about their rights, duties, and the structure of governance. Here are some key reasons why one should learn about the Constitution:
      </p>
      <ul className="lead">
        <li><strong>Knowledge of Rights:</strong> The Constitution guarantees fundamental rights that protect citizens from injustice and ensure their freedom. Knowing these rights helps individuals stand up against violations and seek legal redress.</li>
        <li><strong>Civic Responsibility:</strong> It outlines the duties of citizens, promoting a sense of responsibility towards the nation. Understanding these duties fosters a more harmonious and responsible society.</li>
        <li><strong>Awareness of Governance:</strong> The Constitution defines the powers and functioning of government institutions. Learning about it helps individuals understand how laws are made, how justice is delivered, and how public administration functions.</li>
        <li><strong>Participatory Democracy:</strong> A well-informed citizenry is crucial for a functioning democracy. Understanding the Constitution helps people make informed choices during elections and participate meaningfully in public life.</li>
        <li><strong>Empowerment and Justice:</strong> The Constitution provides tools for social justice by addressing issues like equality, non-discrimination, and the rights of marginalized communities. Learning about these provisions empowers individuals to advocate for a fairer society.</li>
      </ul>
    </div>

    <div className="description mb-5 ">
      <h2 className="mb-4 text-start">Select Topics</h2>
      <div className="progress mb-4">
        <div 
          className="progress-bar" 
          role="progressbar" 
          style={{ width: `${(completedQuizzes / topics.length) * 100}%` }} 
          aria-valuenow={completedQuizzes} 
          aria-valuemin="0" 
          aria-valuemax={topics.length}
        >
          {completedQuizzes} / {topics.length} Completed
        </div>
      </div>

      <div className="d-flex flex-column align-items-start "
    >{topics.map((topic, index) => (
      <div key={index} className="topic-box mb-2 d-flex flex-column flex-sm-row align-items-start justify-content-between w-100">
        <div className="form-check col-12 col-sm-6 d-flex align-items-center">
          <input 
            type="checkbox" 
            className="form-check-input" 
            id={`topic-${index}`} 
            checked={selectedTopics.includes(topic.name)} 
            onChange={() => handleCheckboxChange(topic.name)} 
          />
          <label className="form-check-label ms-2" htmlFor={`topic-${index}`}>
            {topic.name}
          </label>
        </div>
        <div className="col-12 col-sm-6 mt-2 mt-sm-0 d-flex flex-wrap justify-content-end">
          <Link to={topic.quizRoute} className="btn btn-primary me-3"> {/* Adjusted margin */}
           Start Quiz
          </Link>
          <Link to={topic.articleRoute} className="btn btn-secondary">
            Read Article
          </Link>
        </div>
      </div>
    ))}
   

      </div>
    </div> </div>
  );
};

export default Quiz;
