// Import Dependencies
    import React from 'react';
    import ReactDOM from 'react-dom';
    import { BrowserRouter as Router } from 'react-router-dom'

// Import Components
    import App from './App';

// Styling
    import './index.css';



ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
);
