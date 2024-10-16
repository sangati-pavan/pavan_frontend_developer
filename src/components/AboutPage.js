import React from 'react';


const AboutPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-white bg-gray-900">
      <div className="max-w-4xl text-center">
        <img src='https://static.vecteezy.com/system/resources/previews/003/462/493/original/abstract-futuristic-face-concept-artificial-intelligence-background-free-vector.jpg' alt="EthAI Icon" className="mx-auto mb-8 w-32" />
        <h2 className="text-4xl font-bold mb-6">What is EthAI?</h2>
        <p className="text-lg text-gray-300">
          EthAI is a cutting-edge platform leveraging artificial intelligence to revolutionize
          the way we analyze markets, optimize trades, and manage risks in real time.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
