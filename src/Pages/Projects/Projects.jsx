import React from "react";

const Projects = () => {
  return (
    <div
      id="project"
      className="md:h-full lg:h-[100vh] px-4 pt-5 lg:pt-20 lg:px-40 justify-center items-center font-code"
    >
      <h2 className=" text-center font-bold text-2xl py-10 lg:py-5 lg:pb-3">Our Projects</h2>
     <p className="text-left  text-md  ">Our construction projects are distributed across the city and are designed to complete a diverse range of initiatives tailored to various budgets, requirements, and preferences. Here's a quick overview of our extensive experience and offerings: Aramark, Patman, Manland China Hotels, and Pyramid.</p>
     <h3 className="font-bold text-xl py-5">Completed Projects</h3>
     <div className="grid grid-cols-2 lg:grid-cols-4 items-center justify-center space-y-2 lg:space-x-0 ">
     
      <img className="px-2" src="./images/Projects/ApolloHospital.png" alt="Apollo_Hospital" />
      <img className="px-2" src="./images/Projects/indiabulls.png" alt="Indiabulls" />
      <img className="px-2" src="./images/Projects/KuleKaloch.png" alt="KuleKaloch" />
      <img className="px-2" src="./images/Projects/Rising_City.png" alt="Rising_City" />
      
     
      </div> 


    
    </div>
  );
};

export default Projects;