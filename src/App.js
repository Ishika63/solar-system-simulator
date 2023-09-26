import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes
import Home from './pages';
import SigninPage from './pages/signin';
import Navbar from './components/Navbar';
import Calender from './pages/Calender';
import SolarSystem from './pages/Solar';

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/calender" element={<Calender />} />
        <Route path="/solar" element={<SolarSystem />} />
      </Routes>
    </Router>
  );
}

export default App;
