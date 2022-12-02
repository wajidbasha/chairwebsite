import React from 'react'; 
import './App.css';
import './Head.css';
import Head from './Head.js';
import Navbar from './Navbar.js';
import Banner from './Banner';
import Products from './Products.js';
import Contactlens from './Contactlens.js';
import cart from './Products.js';
import setCart from './Products.js';
import Footer from './Footer.js';
import Cartpage from './Cartpage.js';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {
  const [cartdata,setCartData] = React.useState([])

  return (
    <div className="App">
      {/* <Navbar></Navbar> */}
      {/* <Banner></Banner> */}
      
      {/* <Contactlens></Contactlens> */}
      {/* <Cartpage cart={cart} setCart={setCart}></Cartpage> */}
      
      <BrowserRouter>
      <Head add={cart} setAdd={setCart} cartdata={cartdata}></Head>
  <Routes>
      <Route path='/' element={<Products setCartData={setCartData} > </Products>}></Route>
      </Routes>
      <Routes>
      <Route path='/chairwebsite/' element={<Products setCartData={setCartData} > </Products>}></Route>
      </Routes>
      <Routes>
      <Route path="cart" element={<Cartpage cartdata={cartdata}/>} /></Routes>
      <Footer></Footer>
      {/* <Routes>
      <Route path="/cart" element={<Cartpage/>}></Route>
      </Routes> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
