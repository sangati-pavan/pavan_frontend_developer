import React from 'react';

const ContactPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-800 text-white">
      <h2 className="text-4xl font-bold mb-10">Contact Us</h2>
      <form className="space-y-6 w-full max-w-lg">
        <input 
          type="text" 
          placeholder="Your Name" 
          className="w-full p-4 bg-gray-900 text-white rounded-lg focus:outline-none"
        />
        <input 
          type="email" 
          placeholder="Your Email" 
          className="w-full p-4 bg-gray-900 text-white rounded-lg focus:outline-none"
        />
        <textarea 
          rows="4" 
          placeholder="Your Message" 
          className="w-full p-4 bg-gray-900 text-white rounded-lg focus:outline-none"
        ></textarea>
        <button 
          type="submit" 
          className="w-full p-4 bg-blue-500 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
