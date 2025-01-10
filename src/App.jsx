import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Clients from "./Pages/Clients/Clients";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import Privacy from "./Pages/Policy/Privacy/Privacy";
import TermsAndConditions from "./Pages/Policy/TermsAndConditions/TermsAndConditions";
import RefundAndCancellation from "./Pages/Policy/RefundAndCancellation/RefundAndCancellation";
import ShippingAndDelivery from "./Pages/Policy/ShippingAndDelivery/ShippingAndDelivery";
import Pricing from "./Pages/Policy/Pricing/Pricing";
import PaymentGateway from "./Pages/Policy/PaymentGateway/PaymentGateway";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/client" element={<Clients />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms-conditions" element={<TermsAndConditions />} />
        <Route path="/refund-cancellation-policy" element={<RefundAndCancellation />} />
        <Route path="/shipping-delivery-policy" element={<ShippingAndDelivery/>} />
        <Route path="/pricing-policy" element={<Pricing />} />
        <Route path="/payment-gateway" element={<PaymentGateway />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
