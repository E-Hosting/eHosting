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
function App() {
  return (
  
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/Checkout" element={<Checkout/>}/>
    <Route path="/Login" element={<Login />}/>
    <Route path="/Register" element={<Register />}/>
    <Route path="/Services" element={<Services />}/>
    <Route path="/Aboutus" element={<Aboutus />}/>

    </Routes>
    <Footer />
    </BrowserRouter>
    
  );
}

export default App;
