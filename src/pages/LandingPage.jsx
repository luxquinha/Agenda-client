import React from 'react'
import HeaderLand from '../components/HeaderLand.jsx'
import MainBody from '../components/MainBody.jsx'
import { ScrollArea } from '@radix-ui/themes'

function LandingPage() {
  return (
    <div className='w-screen h-screen bg-slate-800'>
        <ScrollArea size={1}> 
          <div className="w-full h-[3%] bg-slate-800 px-8 z-10 mt-1">
              <HeaderLand/>
          </div>
          <div className='w-screen px-8'>
              <MainBody/>
          </div>
        </ScrollArea>
    </div>
  )
}

export default LandingPage