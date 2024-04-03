// App.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../src/composants/Header'; 



import Detection from './pages/detection';
import NPL from './pages/npl';
import Vision from './pages/vision';
import Decoration from './pages/decoration';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Detection />} />
        <Route path="/detection" element={<Detection />} />
        <Route path="/npl" element={<NPL />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/decoration" element={<Decoration />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
