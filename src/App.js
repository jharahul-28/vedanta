import './App.css';
import About from './Components/QR/About';
import Details from './Components/QR/Details/Details';
import Documents from './Components/QR/Documents';
import Navbar from './Components/QR/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './pages/Landing';
import Qr from './pages/Qr';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/Qr" element={<Qr />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;
