import React from 'react'
import CreatePost from './CreatePost'
import PostItem from './PostItem'

const PostContainer = () => {
  return (
    <div className='w-[680px] mx-auto min-h-screen my-3 flex-col gap-4 rounded-lg'>
        <CreatePost/> 
        <PostItem/>
        </div>
  )
}

export default PostContainer
