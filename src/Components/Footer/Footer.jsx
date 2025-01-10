import React from "react";
import { NavLink } from "react-router-dom";


const Footer = () => {
  return (
    <>
      <footer className="lg:h-[20vh]  flex flex-col justify-center items-center my-5 border-t-[1px] border-slate-300  ">
        <div className="flex text-md flex-col lg:flex-row justify-center items-center gap-5 pt-16">
        
          <NavLink to="/privacy-policy">
            Privacy Policy
          </NavLink>
          <NavLink to="/terms-conditions">
            Terms And Conditions
          </NavLink>
          <NavLink to="/refund-cancellation-policy">
            Refund and Cancellation 
          </NavLink>
          <NavLink to="/shipping-delivery-policy">
          Shipping and Delivery Policy 
          </NavLink>
          <NavLink to="/pricing-policy">
          Pricing Policy 
          </NavLink>
          <NavLink to="/payment-gateway">
          Payment Gateway 
          </NavLink>
        </div>
        <h4 className="py-10 text-sm "> ©2025 Arcon Construction PVT Ltd. All Rights Reserved</h4>
      </footer>
    </>
  );
};

export default Footer;