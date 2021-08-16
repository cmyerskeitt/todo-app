import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './functionBased/TodoApp';
import { BrowserRouter as Router } from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <TodoApp />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

