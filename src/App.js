

import './App.css';
import Navbar from './Component/Navbar';
import Newsletter from './Component/Newsletter';
import Footer from './Component/Footer';
import Hero from './Component/Home/Hero';


import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Feature from './Component/Home/Feature';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/'>
            <Hero />
            <Feature />
          </Route>
        </Routes>

        <Newsletter />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
