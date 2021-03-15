import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.less';
import PublicRoutes from './routes/PublicRoutes/PublicRoutes';

function App() {
  return (
    <Router>
      <PublicRoutes />
    </Router>
  );
}

export default App;
