import React from 'react';
import './Head.css';
function Cartpage({cartdata}) {
  console.log(cartdata)
    return (
<div className="cartpage">
            <h1 className="h1card">This is a Cart Page</h1>
            {
         cartdata.map((val)=>
        <div key={val.id} className="prods">
        <img src={val.image} alt = "" width="100%"/>
        <h5>{val.name}</h5>
        <h4>₹ {val.price}</h4>
        </div>
        )
      }
    </div>
    );
  }
  
  export default Cartpage;
