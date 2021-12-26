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
import Meeting from './Components/Meeting/Meeting'
import Contact from './Components/ContactUs/Contact'
function App() {
  return (
  
    <BrowserRouter>
    <Navbar />
    {/* <Meeting/> */}
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/Checkout" element={<Checkout/>}/>
    <Route path="/Login" element={<Login />}/>
    <Route path="/Register" element={<Register />}/>
    <Route path="/Services" element={<Services />}/>
    <Route path="/Aboutus" element={<Aboutus />}/>
    <Route path="/Hosting" element={<Hosting/> }/>
    <Route path="/Meeting" element={<Meeting/>}/>
    {/* <Route path="/Calender" element={<Calender /> } /> */}
    <Route path='/OurCourse' element={<OurCourse/>}/>
    <Route path='/Checkout' element={<Checkout/>}/>
    <Route path='/Contactus' element={<Contact/>}/>

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
