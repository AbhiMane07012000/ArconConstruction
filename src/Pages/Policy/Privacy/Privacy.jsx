import React from "react";

const Privacy = () => {
  return (
    <div className="flex flex-col gap-10  md:h-full lg:h-[230vh] px-4 pt-20 lg:pt-20 lg:px-40 ">
      <div>
        <h3 className="text-2xl font-medium">Use of Personal Information</h3>
        <p className="py-2">
          We use the information you provide in the following ways:
        </p>
        <ul className="list-disc pl-10">
          <li>
            To maintain an accurate record of all inquiries, projects, or
            collaborations we receive.
          </li>
          <li>
            To email you with updates and information about Arcon Associates and
            our construction projects, but only if you have agreed to this.
          </li>
          <li>
            To ensure that you are receiving the most relevant and personalized
            information tailored to your interests.
          </li>
          <li>
            To better understand you and the individuals or businesses engaging
            with our website, requesting our services, or joining our campaigns.
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-2xl font-medium">Privacy of Our Email Lists</h3>
        <p className="py-2">
          Individuals who join our mailing lists via our website or through
          engagement activities are added to our email database. We do not sell,
          rent, loan, trade, or lease the email addresses on our lists to any
          third party.
        </p>
      </div>
      <div>
        <h3 className="text-2xl font-medium">Cookie Policy</h3>
        <p className="py-2">
          Cookies are pieces of electronic information sent by Arcon Associates
          when you use our website. These cookies are stored on your computer’s
          hard drive and enable us to recognize you as a returning user on your
          next visit.
        </p>
        <p className="lg:pr-72">
          You can configure your browser to manage cookies according to your
          preferences. For instance, you may choose to:
        </p>
        <ul className="list-disc pl-10">
          <li>Accept all cookies.</li>
          <li>Reject all cookies.</li>
          <li>Get notified when a cookie is sent.</li>
        </ul>
        <p className="py-2">
          Please refer to your browser settings to modify cookie behavior as per
          your preferences. Note that disabling cookies or rejecting specific
          cookies may affect the functionality of our website, preventing it
          from working as intended.
        </p>
      </div>
      <div>
        <h3 className="text-2xl font-medium">Security & Protection of Data</h3>
        <p className="py-2">
          Arcon Associates employs proven and recognized technologies to
          safeguard your data, especially during payments or sensitive
          transactions. Payment information is transmitted via an SSL (Secure
          Sockets Layer) connection, offering the highest level of security
          supported by your browser.
        </p>
        <p className="py-2">
          Multiple layers of built-in security, such as advanced firewalls,
          encryption of sensitive data, and password protection, ensure your
          information remains secure.
        </p>
      </div>
      <div>
        <h3 className="text-2xl font-medium">External Web Services</h3>
        <p className="py-2">
          We utilize external web services on our website to enhance your
          experience, such as displaying videos via platforms like YouTube.
          However, we cannot control how these external domains collect
          information on your usage of embedded content.
        </p>
        <p className="py-2">
          Additionally, our website may contain links to external websites for
          your benefit. This Privacy Policy does not apply to those websites.
          Arcon Associates is not responsible for any loss or damage caused by
          the collection, use, or retention of your Personal Information by such
          websites. We encourage you to review the privacy policies of all
          external websites before sharing any personal data.
        </p>
      </div>
      <div>
        <h3 className="text-2xl font-medium">Changes to Privacy Policy</h3>
        <p className="py-2">
          As technology and trends evolve, Arcon Associates may update this
          Privacy Policy. We are committed to providing you with timely notice
          of any changes made. If you have any questions or concerns about these
          changes, please feel free to contact us.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
