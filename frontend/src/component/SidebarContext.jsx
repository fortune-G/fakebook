import React from 'react'
import MenuItem from './MenuItem' 
import { FriendIcon } from '../icons'


const SidebarContext = () => {
  return (
    <div className='fixed top-14 right-0 h-full bg-red-400 w-[350px] overflow-auto flex flex-col gap-2 pt-4 max-xl:hidden'>
        <div className="mx-2 flex justify-between items-center text-gray-500">
      <span>Contact</span>
      <div className="flex gap-2">
      <label className="bg-slate-300 input input-bordered flex items-center gap-2 mt-1 h-9 text-white shadow-lg px-3">
          <input type="text" className="grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
    </div>
        <MenuItem icon={FriendIcon} text="Andy" className="w-8"/>
        <MenuItem icon={FriendIcon} text="Andy" className="w-8"/>
        <MenuItem icon={FriendIcon} text="Andy" className="w-8"/>
         
        </div>
  )
}

export default SidebarContext
