import React from 'react'
import {useNavigate} from 'react-router-dom'

const WelcomePage = () => {
  const navigate = useNavigate()

  const handleStart = () => {
    navigate('/marketing-insights')
  }

  return (
    <div
      className="h-screen flex flex-col justify-center items-center bg-cover bg-center text-white"
      style={{backgroundImage: url('https://img6.thuthuatphanmem.vn/uploads/2022/03/16/background-cong-nghe-ai-40-dep-nhat_094203238.jpg')}}
    >
      <h1 className="text-5xl font-bold mb-8">Welcome to EthAI Gen</h1>
      <button
        onClick={handleStart}
        className="px-6 py-3 bg-blue-500 hover:bg-blue-600 transition duration-300 rounded-lg text-xl font-semibold"
      >
        Start
      </button>
    </div>
  )
}

export default WelcomePage
