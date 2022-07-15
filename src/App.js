import LandingPage from './Pages/LandingPage/LandingPage';
import { Routes, Route ,HashRouter} from 'react-router-dom';
import AboutUs from './Pages/AboutUs/AboutUs';

function App() {
  return (
    <>
     <Routes>

      <Route index path='/' element={<LandingPage/>}/>
      <Route path= 'useit/sobrenos' element={<AboutUs/>}/>
      </Routes>
      </>
  );
}

export default App;
