import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import Menu from "./components/menu/menu.js";


function App() {
  return (

      <Router>
          <Routes>
              <Route path="/" element={<Navigate to="/menu" />}></Route>

              <Route path="/menu" element={<Menu />}></Route>
          </Routes>
      </Router>

  );
}

export default App;
