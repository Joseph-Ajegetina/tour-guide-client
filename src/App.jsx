import './App.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {Routes, Route} from "react-router-dom"
import NavBar from './components/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import IsAnon from './components/isAnon';
import IsPrivate from './components/isPrivate';
import AdminPage from './pages/AdminPage';


function App() {
  return (
    <div className="App">
      <NavBar /> 
      <Routes>
         <Route exact path='/' element={<HomePage />} /> 
         <Route path="/signup" element={<IsAnon> <SignUpPage /> </IsAnon>} />
         <Route path="/signup/admin" element={<IsAnon> <SignUpPage  isAdmin={true}/> </IsAnon>} />
         <Route path="/dashboard" element={<IsPrivate> <AdminPage/> </IsPrivate>} />
        <Route path="/login" element={<IsAnon> <LoginPage /> </IsAnon>} />
      </Routes>
    </div>


  );
}




// const theme = extendTheme({
//   fonts: {
//     body: "Your-Preferred-Font, sans-serif",
//     heading: "Your-Preferred-Font, sans-serif",
//     // Add more font settings as needed for different text elements
//   },
// });


export default App;
