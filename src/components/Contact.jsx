// Contact.jsx
import React from 'react';
import Navbar from './Navbar';
import { MdLocationOn, MdEmail, MdPhone } from 'react-icons/md';

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 py-10 px-5 lg:px-20">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-[#355E3B] mb-2">Contact Us</h1>
          <p className="text-gray-600">Feel free to reach out to us for any inquiries or assistance.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Contact Information Section */}
          <div className="bg-white p-8 shadow-lg rounded-lg lg:w-1/3">
            <h2 className="text-2xl font-semibold text-[#355E3B] mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-4">
              We would love to hear from you! Reach out to us through any of the following ways.
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-gray-700">
                <MdLocationOn className="text-2xl text-[#355E3B] mr-2" />
                <span>Soratiyawadi , Kothariya main Road ,  Bahuchar pan , Rajkot-360002 ,Gujarat</span>
              </div>
              <div className="flex items-center text-gray-700">
                <MdEmail className="text-2xl text-[#355E3B] mr-2" />
                <span>cbzflavoures1982@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-700">
                <MdPhone className="text-2xl text-[#355E3B] mr-2" />
                <span>+91 99253 93026</span>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-white p-8 shadow-lg rounded-lg lg:w-2/3">
            <h2 className="text-2xl font-semibold text-[#355E3B] mb-4">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#355E3B]"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#355E3B]"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#355E3B]"
              />
              <textarea
                placeholder="Message"
                rows="6"
                className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#355E3B]"
              ></textarea>
              <button
                type="submit"
                className="bg-[#355E3B] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#2c4c31] transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
