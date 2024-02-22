// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Courses from './pages/Courses';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';

const App = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Courses />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
               
            </Routes>
            <Footer />
        </Router>
    
    );
}

export default App;
