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
import ProfilePage from './pages/ProfilePage/ProfilePage';
import { Box } from '@chakra-ui/react';
import Footer from './components/Footer';
import BookingPage from './pages/BookingPage';

function App() {
  return (
    <Box >
      <NavBar /> 
      <Routes>
         <Route exact path='/' element={<HomePage />} /> 
         <Route path="/signup" element={<IsAnon> <SignUpPage /> </IsAnon>} />
         <Route path="/signup/admin" element={<IsAnon> <SignUpPage  isAdmin={true}/> </IsAnon>} />
         <Route path="/dashboard" element={<IsPrivate> <AdminPage/> </IsPrivate>} />
         <Route path="/profile" element={<IsPrivate> <ProfilePage/> </IsPrivate>} />
         <Route path="/:activityId/payment" element={<IsPrivate> <BookingPage/> </IsPrivate>} />
        <Route path="/login" element={<IsAnon> <LoginPage /> </IsAnon>} />
      </Routes>
      <Footer />
    </Box>
   
  );
}

export default App;
