import React from 'react'
import TeamCard from './TeamCard'

const Team = () => {
  return (
    <div className='bg-[#01071c] flex flex-col gap-10 pt-10 pb-20'>
        <h1 className='text-white font-bold text-center text-3xl'>Our Team</h1>
  <div className='flex flex-row items-center justify-center gap-20'>
        <TeamCard />
        <TeamCard />
        <TeamCard />
    </div>
    </div>
  
  )
}

export default Team