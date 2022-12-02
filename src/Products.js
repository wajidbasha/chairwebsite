import React from 'react';
import './Head.css';
import Array from './Array.js';
import Array1 from './Array1.js';
import Array2 from './Array2.js';
import { useState } from 'react';
import Head from './Head.js';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

// import Cartpage from './Cartpage.js';

const data = Array;
const data1 = Array1;
const data2 = Array2;


function Products({setCartData}) {
  const [cart,setCart] = useState([0]);
  function add(val)
  {
    setCart([...cart,val])
    setCartData([...cart,val])
  }
    return (
      <>
      <div className="navbar">
            <ul className='ul'>
            <li>Best Warrenty in Industry</li>
            <li>Free Shopping</li>
            <li>No Cost EMI Available</li>
            <li>Free Installations</li>	
        </ul>
    </div>
    
<div className="banner">
<Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("./assets/bannerdesent.jpg")} width="100%"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("./assets/banner.jpg")} width="100%"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("./assets/chairbanner.jpg")} width="100%"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>

      {/* <div className="offercon">
      <div className="foffer">  
      <h2>First Purchase Offer</h2>
      </div>
      <div className="offer">
      <h2>EXtra 60% OFF</h2>
      <button>Shop Now | Use Code: SPECARTS60</button>
      </div>
      </div> */}
    </div>
    <div className="Products">
      <div className="sunglasses">  
      {/* <h1>{cart.length}</h1> */}
      <h2>We've Got Your Style</h2>
      {/* <h6>Your home is a reflection of you. Nail your aesthetic with products our stylists love and recommend.</h6> */}
      <div className="cards">
         {
         data.map((val)=>
        <div key={val.id} className="prods">
        <img src={val.image} alt = "" width="100%"/>
        <h5>{val.name}</h5>
        <h4>₹ {val.price} Onwards</h4>
        <button onClick={()=>add(val)}>Add to Cart</button>
        </div>
        )
      }
      </div>
      <div className="cardex">
      <button>Explore More</button>
      </div>
      </div>

      <div className="Computerglasses">  
      <h2>Bluezero Chair starting at ₹2300</h2>
      <h6>Buy 1 Get 1 | Flat 50% Off | Use Code: SPECA50</h6>
      <div className="cards">
         {
         data1.map((val)=>
        <div key={val.id} className="prods">
        <img src={val.image} alt = "" width="100%"/>
        <h5>{val.name}</h5>
        <h4>₹ {val.price}</h4>
        <button onClick={()=>add(val)}>Add to Cart</button>
        </div>
        )
      }
      </div>
      <div className="cardex">
      <button>Explore More</button>
      </div>
      </div>

      <div className="gamingwear">  
      <h2>FEATURED PRODUCTS</h2>
      {/* <h6>Buy 1 Get 1 | Gaming Eyewear</h6> */}
      <div className="cards">
         {
         data2.map((val)=>
        <div key={val.id} className="prods">
        <img src={val.image} alt = "" width="100%"/>
        <h5>{val.name}</h5>
        <h4>₹ {val.price}</h4>
        <button onClick={()=>add(val)}>Add to Cart</button>
        </div>
        )
      }
      </div>
      <div className="cardex">
      <button>Explore More</button>
      </div>
      </div>
      <Head add={cart} setAdd={setCart}></Head>
      {/* <Cartpage cart={cart} setCart={setCart}></Cartpage> */}
    </div>
    <div className="lens">
    <h2>To look more attractive</h2>
    <h5>Starts from just @ ₹2999</h5>
    <div className="lensimage">
    <img src={require("./assets/bannerdesent.jpg")} alt="" width="100%"/>
    <button>Shop Now</button>
    </div>
</div>
    </>
    
    );
  }
  
  export default Products;