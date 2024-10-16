import React from 'react';

const MarketingPage = () => {
  const insights = [
    { title: 'Marketing Insight', description: 'Details about marketing strategies...' },
    { title: 'Trade Optimizer', description: 'Optimize your trade strategies...' },
    { title: 'Risk Guard', description: 'Guard your assets with risk management...' },
    { title: 'Opportunities', description: 'Discover new opportunities in the market...' },
  ];

  return (
    <div 
      className="h-screen flex flex-col justify-center items-center bg-cover bg-center text-white"
      style={{ backgroundImage: ul('https://tse4.mm.bing.net/th?id=OIP.zaAiEgaffZ95RsgeQwehhQHaCt&pid=Api&P=0&h=180') }}
    >
      <h2 className="text-4xl font-bold mb-10">Marketing Insights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {insights.map((insight, index) => (
          <div 
            key={index} 
            className="p-8 bg-gray-800 bg-opacity-70 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
          >
            <h3 className="text-2xl font-semibold mb-4">{insight.title}</h3>
            <p className="text-gray-300">{insight.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketingPage;
