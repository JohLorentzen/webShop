// App.js
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Main from './components/Main';


const App = () => {
    return (
        <Router>
            <NavBar />
            <Main />
            <Footer />
        </Router>
    
    ); 
}

export default App;
