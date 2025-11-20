import { BrowserRouter as Router , Routes,Route } from "react-router-dom";

import TaskForm from "./components/TaskForm";
import Navbar from "./components/Navbar";
import Home from "./components/Home";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
  );
}
