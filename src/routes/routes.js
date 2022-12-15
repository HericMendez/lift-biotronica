import React, { useState } from "react";

import { Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import Product from "../pages/Product";
import ShoppingCart from "../pages/ShoppingCart";
import Page404 from "../pages/Page404";
import Header from "../components/Header";
import Footer from "../components/Footer";

export function PageRoutes() {
  return (
    <>
      <Header />

      <div className="container">
        <Routes>
          <Route path="*" element={<Page404 />} />

          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/carrinho/:name/:price" element={<ShoppingCart />} />
          <Route path="/produtos" element={<Product />} />
          <Route path="/compra/:subtotal/:frete/:total" element={<Checkout />} />
        </Routes>{" "}
      </div>
      <Footer />
    </>
  );
}
