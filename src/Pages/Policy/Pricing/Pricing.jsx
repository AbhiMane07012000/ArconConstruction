import React from "react";

const Pricing = () => {
  return (
    <div className="md:h-full lg:h-[70vh] px-4 pt-20 lg:pt-20 lg:px-40 py-20">
      <h3 className="text-2xl font-medium">Pricing Policy</h3>
      <p className="p-2">
        Our pricing for services is tailored to meet the unique requirements of
        each project. We believe in a collaborative approach to ensure that the
        proposed solution aligns perfectly with your specific needs and
        objectives.
      </p>
      <p className="p-2">
        The pricing structure for our services will be determined based on:
      </p>
      <ul className="list-disc pl-10">
        <li>The scope and complexity of the project.</li>
        <li>
          The resources, time, and expertise required to deliver the solution.
        </li>
        <li>
          Any additional features or customizations requested by the client.
        </li>
      </ul>
      <p className="p-2">
        Once your project requirements and ideas are discussed, we will work
        together to finalize the terms, including the pricing, timeline, and
        deliverables. This ensures transparency and mutual agreement between
        both parties before commencing the project.
      </p>
      <p className="p-2">
        We are committed to delivering high-quality solutions that provide value
        for your investment. If you have any questions or need further
        clarification regarding our pricing, feel free to contact us.
      </p>
    </div>
  );
};

export default Pricing;
