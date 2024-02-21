import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
  
const App = () => {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/"  />
                <Route path="/courses"  />
                <Route path="/about"  />
                <Route path="/contact"  />
                {/* Add other routes as needed */}
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
