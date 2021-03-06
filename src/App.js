import './App.css';
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Checkout from './Components/Checkout/Checkout';
import Navbar from "./Components/Navbar/Navbar.jsx"
import HomePage from "./Page/HomePage"
import Footer from './Components/Footer/Footer';
import Login from "./Components/LogIn/Login"
import Register from "./Components/Register/Register"
import Services from './Components/Services/Services';
import Aboutus from './Page/Aboutus';
// import WordPressHosting from './Components/Hosting/WordPressHosting';
import Hosting from './Components/Hosting/Hosting';
import Calender from './Components/Calender/Calender';
import OurCourse from './Page/OurCourse'
import ProfilePage from "./Page/profilePage.jsx"
import Contact from "./Components/ContactUs/Contact"
import ErrorPage from './Components/404/404';
function App() {
  return (
  
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/Checkout" element={<Checkout/>}/>
    <Route path="/Login" element={<Login />}/>
    <Route path="/Register" element={<Register />}/>
    <Route path="/programs" element={<Services />}/>
    <Route path="/Aboutus" element={<Aboutus />}/>
    <Route path="/courses" element={<Hosting/> }/>
    <Route path='/OurCourse' element={<OurCourse/>}/>
    <Route path='/Checkout' element={<Checkout/>}/>
    <Route path='/Profile' element={<ProfilePage/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='*' element={<ErrorPage />}/>

    </Routes>
    <Footer />
    </BrowserRouter>
    // <div>
    // <Hosting/>
    // <WordPressHosting/>
    // </div>
    
  );
}

export default App;
