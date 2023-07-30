import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Homepage from "./HomePage/Homepage";
import Apply from './ApplyNow/Apply';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Apply-Now" element={<Apply />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
