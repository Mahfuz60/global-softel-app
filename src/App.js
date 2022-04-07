import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home/Home';

import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
