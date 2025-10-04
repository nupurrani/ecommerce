import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import "./Home.css";

import { Col, Container, Dropdown, Row } from "react-bootstrap";

// import { Routes, Route, } from 'lucide-react';
import {  Routes, Route } from "react-router";
import Category from './components/Category';
import Cart from './components/Cart';
import Register from './components/Register';
import Home from './components/Home';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Address from "./components/Address";
import Payment from "./components/Payment";
import Wishlist from "./components/Wishlist";
import Orders from "./components/Orders";
import Product from "./components/Product";
import Login from "./components/Login";
import Profile from "./components/Profile";
import AddProduct from "./components/AddProduct";
import New from "./components/New";
// 





function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        {/* <Route path="" element={<Category/>}/>
        <Route path="/category" element={<Category/>}/> */}
        
        <Route path="" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/category" element={<Category/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/address" element={<Address/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/addproduct" element={<AddProduct/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/new" element={<New/>}/>

        
        <Route path="*" element={<Category/>}/>
        
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
