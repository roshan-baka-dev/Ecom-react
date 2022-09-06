

import './App.css';
import Navbar from './Component/Navbar';
import Newsletter from './Component/Newsletter';
import Footer from './Component/Footer';
import Hero from './Component/Home/Hero';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Feature from './Component/Home/Feature';
import Product from './Component/Home/Product';
import Banner from './Component/Shop/Banner';
import Pagination from './Component/Shop/Pagination';
import ProductDetails from './Component/ProductDetails';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>

          <Route path='/' element={<>
            <Hero/>
            <Feature/>
            <Product/>
          </>}/>

          <Route path='/shop' element={<>
            <Banner/>
            <Product/>
            <Pagination/>
          </>}/>
          <Route path='/singlepro' element={<>
            <ProductDetails/>            
          </>}/>

        </Routes>

        <Newsletter />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
