import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="  lg:h-[234vh] px-4 pt-20 lg:pt-20 lg:px-40 ">
      <h2 className="text-3xl font-medium">Terms and Conditions</h2>
      <strong className="py-2">
        This website is operated by Arcon Associates.
      </strong>
      <p className=" py-2">
        Use of the website is provided by Arcon Associates subject to the
        following Terms and Conditions:
      </p>
      <div className="flex flex-col gap-4">
        <div>
          <h3 className=" pt-5 text-md font-medium">Acceptance of Terms</h3>
          <p className="p-2">
            By using this website, you agree to abide by these terms and
            conditions. These terms are effective from your first visit. Arcon
            Associates may update these terms from time to time; your continued
            use of the website indicates your acceptance of the terms at the
            time of use.
          </p>
        </div>
        <div>
          <h3 className=" pt-5 text-md font-medium">
            Changes to Website Content
          </h3>
          <p className="p-2">
            Arcon Associates reserves the right to modify the content of this
            website at any time. While we strive to ensure that all information
            presented is accurate and legally correct at the time of
            publication, errors may occasionally occur. If you believe any
            content on our website is inaccurate, please contact us at
            <a
              className="pl-1 text-blue-700"
              href="mailto:jadhavfuture@gmail.com"
            >
              jadhavfuture@gmail.com
            </a>
          </p>
        </div>
        <div>
          <h3 className=" pt-5 text-md font-medium">Liability</h3>
          <p className="p-2">
            Arcon Associates is not liable for any loss or damage, including
            personal injury, resulting from the use of this website.
          </p>
          <p className="p-2">
            While we take every precaution to ensure the website is free from
            malware and viruses, we cannot guarantee complete protection. We
            recommend safeguarding your devices before downloading any
            information or files. Arcon Associates will not accept liability for
            damage caused by viruses or malware.
          </p>
        </div>
        <div>
          <h3 className=" pt-5 text-md font-medium">External Links</h3>
          <p className="p-2">
            This website may provide links to external websites for your
            convenience. However, this does not imply endorsement or approval of
            the content on those websites. Arcon Associates is not responsible
            for any loss or damage caused by malware, viruses, or inaccuracies
            on third-party websites.
          </p>
        </div>
        <div>
          <h3 className=" pt-5 text-md font-medium">Use of Brand Materials</h3>
          <p className="p-2">
            Please request permission before using Arcon Associates' logos or
            branded materials. We reserve the right to require removal of our
            logo or branding from websites or printed material if it is not in
            our interests.
          </p>
        </div>
        <div>
          <h3 className=" pt-5 text-md font-medium">Use of Website Content</h3>
          <p className="p-2">
          Our downloadable documents, brochures, and web pages are provided for personal use. You may copy or print the information for private purposes but may not amend or use it for commercial purposes without prior written consent from Arcon Associates.
          </p>
          <p className="p-2">
          All images and photos used on this website are the property of Arcon Associates or other copyright owners and may not be reproduced without written consent.
          </p>
        </div>
        <div>
          <h3 className=" pt-5 text-md font-medium">Conflict of Terms</h3>
          <p className="p-2">
          In the event of a conflict between these terms and specific rules or terms relating to specific material, the latter shall prevail.
          </p>
        </div>
        <div>
          <h3 className=" pt-5 text-md font-medium">Conflict of Terms</h3>
        <p className="p-2">If you have any queries or concerns, please connect with us:</p>
        <ul className="list-disc pl-10">
            <li>Name  : Anand Jadav</li>
            <li>Phone : 8600457263 / 9372441538</li>
            <li>Email : <a
              className="pl-1 text-blue-700"
              href="mailto:jadhavfuture@gmail.com"
            >
              jadhavfuture@gmail.com
            </a> </li>
        </ul>
        <p className="py-5">Copyright © 2025 Arcon Associates. All Rights Reserved.</p>
        </div>
        
      </div>
    </div>
  );
};

export default TermsAndConditions;
