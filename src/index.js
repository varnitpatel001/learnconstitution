import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './component/home';
import Profile from './component/submitation';
import ErrorBoundary from './component/ErrorBoundary'; // Import ErrorBoundary
import  err from "./component/animation/404.webm"
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "home",
    element: <Home />
  },
  {
    path: "profile",
    element: <Profile />
  },
  {
    path: "*", // Catch-all route for 404 errors
    element:<h1>
    <video 
      src={err} 
      autoPlay 
      loop 
      muted // Optionally mute the video to avoid requiring user interaction to play
      style={{ width: '100%', height: 'auto' }} // Optional styling to ensure it scales properly
    />
  </h1>
  

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
