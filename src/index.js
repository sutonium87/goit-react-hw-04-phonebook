// Import React library to work with React components
import React from 'react';

// Import ReactDOM for rendering React components in the browser
import ReactDOM from 'react-dom/client';

// Import the main application component 'App'
import App from 'components/App';

// Import the CSS styling for the application
import './index.css';

// Create a root instance using ReactDOM and render the app to the element with the 'root' id
ReactDOM.createRoot(document.getElementById('root')).render(
  // Use React.StrictMode for development mode checks and optimizations
  <React.StrictMode>
    {/* Render the main App component, which serves as the root of the application */}
    <App />
  </React.StrictMode>
);
