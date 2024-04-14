import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import CreateListing from "./pages/CreateListing";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Footer from "./components/Footer";
import SubCategory from "./pages/SubCategory"; // Make sure to import SubCategory

// Shop-by-room (category)

// import image 
import livingRoomBanner from "./assets/livingroom.png";
import bedroomBanner from "./assets/bedroom.png";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* shop-by-room */}
        <Route path="/shop-by-room/living-room" element={<SubCategory subCategory="livingroom" banner={livingRoomBanner} />} />
        <Route path="/shop-by-room/bedroom" element={<SubCategory subCategory="bedroom" banner={bedroomBanner} />} />

        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        
        <Route element={<PrivateRoute/>}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-listing" element={<CreateListing />} />
          <Route path="/cart-page" element={<Cart />} />
          <Route path="/product/:productId" element={<Product />} /> {/* Corrected path */}
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
