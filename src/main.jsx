import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Ensure BrowserRouter is imported
import App from './App'; // Make sure App is the component where your routes are set

// Render your App wrapped in Router
ReactDOM.createRoot(document.getElementById('root')).render(
  <Router> {/* Wrap the App with Router here */}
    <App />
  </Router>
);
