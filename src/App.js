import LandingPage from './LandingPage/LandingPage';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
     <Routes>

      <Route path='/' element={<LandingPage/>}/>

      </Routes>

  );
}

export default App;
