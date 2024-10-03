import React from 'react'
import Avatar from "./Avatar";
import { CloseIcon, CommentIcon, DotIcon, ImageCreate, LikeIcon, ShareIcon, SmileCreate, VideoCreate } from "../icons";
import PostList from './PostList';


const PostItem = () => {
  return (
    <div className='mt-7'>
      <PostList/>
      <PostList/>
      <PostList/>
      <PostList/>
      <PostList/>
      <PostList/>
      <PostList/>
    </div>
  )
}

export default PostItem
