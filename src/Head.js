import React from 'react';
import './Head.css';
import { Link, Outlet } from 'react-router-dom';

function Head({add,setAdd,cartdata}) {

    console.log("cartdata",cartdata);
    return (
        <div className="head">
      <div className="logo">
        <img src={require("./assets/company.png")} alt= "" width="50%"/>
    </div>
    <div className="inputbox">
        <input type="text" name="search" placeholder="What are you looking for"/>
    </div>
    <div className="searchicon">
        <i className="fa-solid fa-magnifying-glass"></i>
    </div>
    <div className="track">
        <h6><Link to="/">Home</Link></h6>
    </div>
    <div className="track">
        <h6>About Us</h6>
    </div>
    <div className="track">
        <h6>Dealers</h6>
    </div>
    <div className="signin">
        <h6>Sign In & Sign Up</h6>
    </div>
    <div className="cart">
        <h6><Link to="/cart">Cart:{ cartdata?.length ? cartdata?.length  : cartdata?.length == "[]" ? "0" : cartdata?.length == undefined ? "0" : cartdata?.length }</Link></h6>
        {/* <h6>Cart: {add.length}</h6> */}
        
        <Outlet/>
    </div>
    </div>

    );
  }
  
  export default Head;
  