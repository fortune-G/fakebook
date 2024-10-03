import React from 'react'
import { Support01, Support02, Support03, Support04, Support05, Support06, Support07, Support08, Support09 } from '../icons'

const Supporter = () => {
  return (
    <div className='overflow-auto flex p-7 justify-center items-center gap-5'>
    <Support01 className ="w-30 h-30 flex flex-1"/>
    <Support02 className ="w-30 h-30 flex flex-1"/>
    <Support03 className ="w-30 h-30 flex flex-1"/>
    <Support04 className ="w-30 h-30 flex flex-1"/>
    <Support05 className ="w-30 h-30 flex flex-1"/>
    <Support06 className ="w-30 h-30 flex flex-1"/>
    <Support07 className ="w-30 h-30 flex flex-1"/>
    <Support08 className ="w-30 h-30 flex flex-1"/>
    <Support09 className ="w-30 h-30 flex flex-1"/>
    </div>
  )
}

export default Supporter
