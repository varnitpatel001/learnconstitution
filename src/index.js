import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './component/home';
import Profile from './component/submitation';
import Register from './component/register';
import ErrorBoundary from './component/ErrorBoundary'; // Import ErrorBoundary
import err from "./component/animation/404.webm";
import { Provider } from 'react-redux';
import Quiz from './component/learn';
import Q1 from './component/quizes/q1.js';
import Q2 from './component/quizes/q2.js'; // Import additional quiz components
import Q3 from './component/quizes/q3.js';
import Q4 from './component/quizes/q4.js';
import Q5 from './component/quizes/q5.js';
import Q6 from './component/quizes/q6.js';
import Q7 from './component/quizes/q7.js';
import Q8 from './component/quizes/q8.js';
import Q9 from './component/quizes/q9.js';
import Q10 from './component/quizes/q10.js';
import Q11 from './component/quizes/q11.js';
import Q12 from './component/quizes/q12.js';
import Q13 from './component/quizes/q13.js';

// Import article components
import A1 from './component/articles/a1.js';
import A2 from './component/articles/a2.js';
import A3 from './component/articles/a3.js';
import A4 from './component/articles/a4.js';
import A5 from './component/articles/a5.js';
import A6 from './component/articles/a6.js';
import A7 from './component/articles/a7.js';
import A8 from './component/articles/a8.js';
import A9 from './component/articles/a9.js';
import A10 from './component/articles/a10.js';
import A11 from './component/articles/a11.js';
import A12 from './component/articles/a12.js';
import A13 from './component/articles/a13.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "home",
    element: <Home />
  },
  {
    path: "/Q1",
    element: <Q1 />
  },
  {
    path: "/A1",
    element: <A1 />
  },
  {
    path: "/Q2",
    element: <Q2 />
  },
  {
    path: "/A2",
    element: <A2 />
  },
  {
    path: "/Q3",
    element: <Q3 />
  },
  {
    path: "/A3",
    element: <A3 />
  },
  {
    path: "/Q4",
    element: <Q4 />
  },
  {
    path: "/A4",
    element: <A4 />
  },
  {
    path: "/Q5",
    element: <Q5 />
  },
  {
    path: "/A5",
    element: <A5 />
  },
  {
    path: "/Q6",
    element: <Q6 />
  },
  {
    path: "/A6",
    element: <A6 />
  },
  {
    path: "/Q7",
    element: <Q7 />
  },
  {
    path: "/A7",
    element: <A7 />
  },
  {
    path: "/Q8",
    element: <Q8 />
  },
  {
    path: "/A8",
    element: <A8 />
  },
  {
    path: "/Q9",
    element: <Q9 />
  },
  {
    path: "/A9",
    element: <A9 />
  },
  {
    path: "/Q10",
    element: <Q10 />
  },
  {
    path: "/A10",
    element: <A10 />
  },
  {
    path: "/Q11",
    element: <Q11 />
  },
  {
    path: "/A11",
    element: <A11 />
  },
  {
    path: "/Q12",
    element: <Q12 />
  },
  {
    path: "/A12",
    element: <A12 />
  },
  {
    path: "/Q13",
    element: <Q13 />
  },
  {
    path: "/A13",
    element: <A13 />
  },
  {
    path: "tables",
    element: <Quiz />
  },
  {
    path: "profile",
    element: <Profile />
  },
  {
    path: "register",
    element: <Register />
  },
  {
    path: "*", // Catch-all route for 404 errors
    element: (
      <h1>
        <video 
          src={err} 
          autoPlay 
          loop 
          muted // Optionally mute the video to avoid requiring user interaction to play
          style={{ width: '100%', height: 'auto' }} // Optional styling to ensure it scales properly
        />
      </h1>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </React.StrictMode>
);

reportWebVitals();
