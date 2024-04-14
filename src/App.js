import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signin from './pages/signin';
import Signup from './pages/signup';
function App() {
  return (
    <Router>
        <Routes>
            <Route exact path = "/" element = {<Signin/>} />
            <Route exact path = "/signup" element = {<Signup/>} />
        </Routes>
    </Router>
  );
}

export default App;
