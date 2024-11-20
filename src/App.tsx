import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ArticlePage from './pages/Arcticle';

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/article/:id" element={<ArticlePage />} />
    </Routes>
  </Router>
);

export default App;