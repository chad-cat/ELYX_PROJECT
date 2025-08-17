import React from 'react';
import ReactDOM from 'react-dom/client'; // Imports the client-specific ReactDOM methods
import App from './App.jsx'; // Imports your main App component
import './index.css'; // Optional: Import a global CSS file for basic styling

// This is the core line that renders your React application.
// It finds the HTML element with id="root" in your index.html file
// and injects your <App /> component (and all its children) into it.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* React.StrictMode is a tool for highlighting potential problems in an application.
        It does not render any visible UI. It activates additional checks and warnings
        for its descendants. */}
    <App />
  </React.StrictMode>,
);
