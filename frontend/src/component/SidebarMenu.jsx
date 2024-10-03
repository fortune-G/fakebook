import React from 'react'
import { AppRight, AvatarRight, BookmarkIcon, ClockIcon, FriendIcon, GroupIcon, MoreIcon, PlayIcon, ShopIcon } from '../icons'
import MenuItem from './MenuItem'

const SidebarMenu = () => {
  return (
    <div className='fixed top-14 h-full bg-red-400 w-[350px] overflow-auto flex flex-col gap-1 min-w-[220px] max-xl:w-[220px]'>
          <MenuItem icon={FriendIcon} text="Flukk" className="w-8"/>
          <MenuItem icon={FriendIcon} text="Friend" className="w-8"/>
          <MenuItem icon={ClockIcon} text="Memories" className="w-8"/>
          <MenuItem icon={BookmarkIcon} text="Save" className="w-8"/>
          <MenuItem icon={GroupIcon} text="Group" className="w-8 p-0 "/>
          <MenuItem icon={PlayIcon} text="Video" className="w-8 "/>
          <MenuItem icon={ShopIcon} text="MarketPlace" className="w-8 "/>
          <MenuItem icon={MoreIcon} text="More. ." className="w-8 p-2 border border-gray-500 rounded-full"/>
          
        </div> 
  )
}

export default SidebarMenu
