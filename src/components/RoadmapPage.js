import React from 'react'

const RoadmapPage = () => {
  const milestones = [
    {date: 'Q1 2024', event: 'Launch of Beta Platform'},
    {date: 'Q2 2024', event: 'Token Distribution'},
    {date: 'Q3 2024', event: 'Full Platform Launch'},
  ]

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-700 text-white">
      <h2 className="text-4xl font-bold mb-10">Roadmap</h2>
      <div className="space-y-8">
        {milestones.map((milestone, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="bg-blue-500 w-8 h-8 rounded-full"></div>
            <div>
              <h3 className="text-xl font-semibold">{milestone.date}</h3>
              <p className="text-gray-300">{milestone.event}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RoadmapPage
