import React from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import CoursesSection from './components/CoursesSection';
import AboutSection from './components/AboutSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
  
const App = () => {
    rreturn (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/courses" component={Courses} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                {/* Add other routes as needed */}
            </Switch>
        </Router>
    );
}

export default App;
