import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ArticlePage from './pages/Article';
import { PATH } from './constants';

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path={PATH.ROOT} element={<Dashboard />} />
      <Route path={PATH.ARTICLE_ID} element={<ArticlePage />} />
    </Routes>
  </Router>
);

export default App;