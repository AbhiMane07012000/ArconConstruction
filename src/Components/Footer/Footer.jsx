import React from "react";
import { NavLink } from "react-router-dom";


const Footer = () => {
  return (
    <>
      <footer className="lg:h-[20vh]  flex flex-col justify-center items-center my-5 border-t-[1px] border-slate-300  ">
        <div className="flex justify-center items-center gap-10 pt-16">
        
          <NavLink to="/privacy-policy">
            Privacy Policy
          </NavLink>
          <NavLink to="/terms-conditions">
            Terms And Conditions
          </NavLink>
        </div>
        <h4 className="py-10 text-sm "> ©2025 Arcon Construction PVT Ltd. All Rights Reserved</h4>
      </footer>
    </>
  );
};

export default Footer;