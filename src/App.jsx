import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import JS_basic from './components/JS_basic'
import JS_middle from './components/JS_middle'
import JS_advanced from './components/JS_advanced'
import ReactTasks from './components/ReactTasks'
import Typescript from './components/Typescript';

const App = () => {
  return (
    <Router>
<nav className='menu'><Link to="/javascript-basic">JS-basic</Link> 
<Link to="/javascript-middle">JS-middle</Link> 
<Link to="/javascript-advanced">JS-advanced</Link> 
<Link to="/react">React</Link> 
<Link to="/typescript">TS</Link> </nav>

      <Routes>
        
        <Route path="/javascript-basic" element={<JS_basic/>} />
        <Route path="/javascript-middle" element={<JS_middle/>} />
        <Route path="/javascript-advanced" element={<JS_advanced/>} />
        <Route path="/react" element={<ReactTasks/>} />
        <Route path="/typescript" element={<Typescript/>} />
      </Routes>
    </Router>
  );
};

export default App