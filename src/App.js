import './App.css';
import About from './components/About';
import {
  Route,
  Routes,
  BrowserRouter as Router
} from "react-router-dom";
import Projects from './components/Projects';
import ResponsiveDrawer from './components/Drawer';
import Resume from './components/Resume';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      <Router>
        <ResponsiveDrawer />
        <Routes> 
          <Route exact path='/' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/resume' element={<Resume />}  />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

