import React from "react";

const PaymentGateway = () => {
  return (
    <div className="md:h-full lg:h-[70vh] px-4 pt-20 lg:pt-20 lg:px-40 py-20">
      <h3 className="text-2xl font-medium py-5">Payment Gateway</h3>
      <ul className="list-decimal pl-10 ">
        <li className="py-3">
          <p className="font-semibold">Secure and Reliable Technology</p>
          <p className="">
            Arcon Associates leverages industry-leading and trusted technology
            for secure payment processing. All payment information is
            transmitted using an SSL (Secure Socket Layer) connection, ensuring
            the highest level of encryption and security that your browser
            supports.
          </p>
        </li>
        <li className="py-3">
          <p className="font-semibold">Advanced Security Measures</p>
          <p className="">
          Multiple layers of robust security are implemented to safeguard your payment data. This includes advanced firewall systems, encryption of sensitive information like credit card numbers, and the requirement of secure passwords for transactions. These measures ensure your information remains protected at all times.
          </p>
        </li>
      </ul>

    </div>
  );
};

export default PaymentGateway;
