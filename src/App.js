import './App.css';
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Navbar/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
