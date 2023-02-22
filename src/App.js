import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProjectCard } from './components/ProjectCard';

function App() {
  return (
   
    <div className="App">
      <Router>
        <Routes>
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          {/* Other routes for your app */}
        </Routes>
      </Router>  
      <NavBar />
      <Banner />


      {/* <Skills />
      <Projects />

      <Contact />
      <Footer /> */}

      
    </div>
  );
}

export default App;
