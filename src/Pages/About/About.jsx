import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="md:h-full lg:h-[100vh] px-4 pt-5 lg:pt-20 lg:px-10 justify-center items-center"
    >
      <h2 className=" font-bold text-2xl py-10 lg:py-5 lg:pb-3">ABOUT US</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center">
        <div className="py-10">
          <img className="" src="./images/indian-labourers.webp" alt="labourers" />
        </div>
        <div className="space-y-4">
          <strong>
            Founded in Mumbai in 2009, Arcon has grown to become one of the
            India leading construction companies.
          </strong>
          <p>
            Constructing buildings today requires high levels of specialization
            and the ability to success fully adapt to modern technologies.
            That's where we come in.
          </p>
          <p>
            Arcon Associates was born as a result of the determination of the
            group to cater to the growing need of its clients in the housing
            sector. Hence, it has been our constant effort to ensure shorter
            execution schedules and enhanced quality, thus realizing complete
            customer satisfaction.
          </p>
          <p>
            Arcon Associates is now being Arcon Associates PVT Ltd. to cater the
            market requirement in better way of exceptional techno-commercial
            personnel, technical experts, specialized project management
            professionals, skilled workforce and state-of-the-art technology
            that ensure timely and successful completion of projects entrusted
            to it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
