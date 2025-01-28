import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import AdminLogin from "./components/AdminLogin";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Home />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/admin-login" element={<AdminLogin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
