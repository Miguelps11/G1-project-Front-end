import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from './components/navbar/Navbar';
import { Home } from './pages/Home/Home';
import { Contact } from './pages/Contact/Contact';
import { Portfolio } from './pages/Portfolio/Portfolio';
import { Productos } from './pages/Productos/Productos';

function App() {
  return (
    <div>
    <Router>
     <Navbar></Navbar>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/portfolio" element={<Portfolio/>}/>
      <Route path="/products" element={<Productos/>}/>
     </Routes>
    </Router>
    </div>
  );
}

export default App;
