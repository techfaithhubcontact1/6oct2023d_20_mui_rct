// import logo from './logo.svg';
// import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={ <Home/> }></Route>
        <Route path="/home" element={ <Home/> }></Route>
        <Route path="/contact" element={ <Contact/> }></Route>
        <Route path="/about" element={ <About/> }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
