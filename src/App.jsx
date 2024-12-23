import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../Home";
import Projects from "./components/Projects";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
