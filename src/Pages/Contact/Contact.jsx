import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="md:h-full lg:h-[100vh] px-4 pt-5 lg:pt-16 lg:px-20 justify-center items-center "
    >
       <div class="max-w-2xl lg:max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-extrabold text-gray-900">Visit Our Location</h2>
          <p class="mt-4 text-lg text-gray-600">
            Experience our vibrant spaces where innovation meets convenience. We're here to welcome you!
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="rounded-lg overflow-hidden">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.4560444862764!2d73.83904617484876!3d18.643520582474075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b93b05fc13d5%3A0x2e3ca9d3f2f100c4!2sAlcon%20Square!5e0!3m2!1sen!2sin!4v1736165549055!5m2!1sen!2sin"
                width="100%" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div>
              

              <div class="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                {/* <!-- Address Section --> */}
                <div class="px-8 py-6">
                  <h3 class="text-xl font-semibold text-gray-800">Office</h3>
                  <p class="mt-2 text-sm text-gray-700">
                    <span class="block font-medium">Pune Office:</span>
                    Plot-71/1, T03, Sector 7, Indrayani Nagar, Allon Square, FL-H/14, Pune - 411 026
                  </p>
                </div>

                {/* <!-- Divider --> */}
                <div class="border-t border-gray-300"></div>

                {/* <!-- Hours Section --> */}
                <div class="px-8 py-6">
                  <h3 class="text-xl font-semibold text-gray-800">Hours</h3>
                  <p class="mt-2 text-sm text-gray-700">Monday - Saturday: <span class="font-medium">9:30am - 6:00pm</span></p>
                  <p class="mt-2 text-sm text-gray-700">Sunday: <span class="font-medium">Closed</span></p>
                </div>

                {/* <!-- Divider --> */}
                <div class="border-t border-gray-300"></div>

                {/* <!-- Contact Section --> */}
                <div class="px-8 py-6">
                  <h3 class="text-xl font-semibold text-gray-800">Contact</h3>
                  <p class="mt-2 text-sm text-gray-700">
                    <span class="font-medium">Email:</span> <a href="mailto:jadhavfuture@gmail.com" class="text-blue-600 hover:underline">jadhavfuture@gmail.com</a> <span class="text-gray-500"> / </span>
                    <a href="mailto:sandeshmahipal123@gmail.com" class="text-blue-600 hover:underline">sandeshmahipal123@gmail.com</a>
                  </p>
                  <p class="mt-2 text-sm text-gray-700">
                    <span class="font-medium">Phone:</span> 8600457263 / 9372441538
                  </p>
                </div>
              </div>

            </div>
          </div>
    </div>
  );
};

export default Contact;



          
        