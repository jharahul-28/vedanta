import './App.css';
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
