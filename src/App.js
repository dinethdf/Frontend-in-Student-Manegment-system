import Addstudent from "./components/AddStudent";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
  <Router>
    <div>
    <Header/>
  <Routes>  <Route exact path="/add"  Component={Addstudent} /></Routes>
</div>
    </Router>
  );
}

export default App;
