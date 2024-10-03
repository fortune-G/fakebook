import React from 'react'
import Avatar from "./Avatar";
import { CloseIcon, CommentIcon, DotIcon, ImageCreate, LikeIcon, ShareIcon, SmileCreate, VideoCreate } from "../icons";


const PostList = () => {
  return (
    <div className="card bg-base-300  shadow-xl mt-2">
        <div className="card-body">
          <div className="flex justify-between gap-2"> 
            <div className='flex justify-between'>
            <Avatar className= "w-11 h-11 rounded-full"/>
          <div className='flex flex-col  ml-2'> 
          <div className="flex-1 ml-2 rounded-full justify-start">
            Andy
          </div> 
          <div className='text-xs font-extralight ml-1'>
            39m ago
          </div>
          </div>
          </div> 
          <div className='flex justify-center items-start gap-3'>
            <DotIcon className = "flex w-8 justify-end"/>
            <CloseIcon className = "flex w-8 justify-end"/>
          </div>
          </div> 
          <div className='mt-3'>I love my job!!</div>
        </div> 
        <div className="divider divider-neutral mb-0 mt-1"></div>
        <div className="flex justify-between items-center gap-2 m-2 mx-5">
            <div className="flex gap-3 items-center"><LikeIcon className= "w-6 h-6"/>
            Like
            </div>
            <div className="flex gap-3 items-center"><CommentIcon className= "w-6 h-6"/> 
            Comment
            </div>
            <div className="flex gap-3 items-center"><ShareIcon className= "w-6 h-6"/> 
            Share
            </div>
        </div>
        <div className="divider divider-neutral mb-0 mt-1"></div>
      </div>
  )
}

export default PostList
