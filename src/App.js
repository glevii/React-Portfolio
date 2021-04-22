import logo from './logo.svg';
import './App.css';
import Home from "./pages/home";
import { BrowserRouter as Router, Route } from "react-router-dom"
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Projects from "./pages/projects";
import Contact from "./pages/contact";

function App() {
  return (
    <Router>
      <Navbar />

      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/projects">
        <Projects />
      </Route>

      <Route exact path="/contact">
        <Contact />
      </Route>

      <Footer />
    </Router>
  );
}

export default App;
