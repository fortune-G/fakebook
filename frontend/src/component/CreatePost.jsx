import React from "react";
import Avatar from "./Avatar";
import { ImageCreate, SmileCreate, VideoCreate } from "../icons";

const CreatePost = () => {
  return (
    <div>
      <div className="card bg-slate-300  shadow-xl">
        <div className="card-body">
          <div className="flex gap-2"> 
            <Avatar className= "w-11 h-11 rounded-full"/>
          <button className="btn flex-1 ml-2 rounded-full justify-start">
            What's do you think?
          </button>
          </div> 
        </div> 
        <div className="divider divider-neutral mb-0 mt-1"></div>
        <div className="flex justify-between items-center gap-2 m-3">
            <div className="flex gap-3 items-center"><VideoCreate className= "w-14 h-14"/>
            Live/Steam
            </div>
            <div className="flex gap-3 items-center"><ImageCreate className= "w-14 h-14"/> 
            Photo/Video
            </div>
            <div className="flex gap-3 items-center"><SmileCreate className= "w-12 h-12"/> 
            Activity
            </div>
            
            
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
