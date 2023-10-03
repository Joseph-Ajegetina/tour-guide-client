import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <Routes>
         <Route exact path='/' element={<HomePage />} /> 
         <Route path='/login' element={<LoginPage/>} /> 
         <Route path='/signup' element={<SignUpPage/>} /> 
      </Routes>
    </div>
  );
}

export default App;
