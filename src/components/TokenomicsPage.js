import React from 'react';

const TokenomicsPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-800 text-white">
      <h2 className="text-4xl font-bold mb-10">Tokenomics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        <div className="p-8 bg-gray-900 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Supply Distribution</h3>
          <p className="text-gray-300">Breakdown of token distribution across stakeholders...</p>
        </div>
        <div className="p-8 bg-gray-900 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Staking Rewards</h3>
          <p className="text-gray-300">Incentives for staking within the EthAI ecosystem...</p>
        </div>
      </div>
    </div>
  );
};

export default TokenomicsPage;
