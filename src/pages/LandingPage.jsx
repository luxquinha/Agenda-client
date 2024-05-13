import React from 'react'
import HeaderLand from '../components/HeaderLand.jsx'
import MainBody from '../components/MainBody.jsx'

function LandingPage() {
  return (
    <div className='w-screen h-screen bg-zinc-300'>
        <div className="w-full h-[8%] bg-zinc-400 px-8">
            <HeaderLand/>
        </div>
        <div className='w-full h-[92%] bg-cyan-300 px-8'>
            <MainBody/>
        </div>
    </div>
  )
}

export default LandingPage