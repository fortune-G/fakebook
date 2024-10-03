import React from "react";
import {
  AppRight,
  AvatarRight,
  ChatRight,
  FakebookLogo,
  GameCenter,
  HomeCenter,
  MarketCenter,
  NotificationRight,
  WorldCenter,
} from "../icons";
import Avatar from "./Avatar";

const Header = () => {
  return (
    <div className="bg-orange-400 h-16 w-full fixed top-0 z-10 px-2 flex justify-center items-center">
      <div className="flex gap-2 items-center">
        <FakebookLogo className="w-14" />
        <label className="input input-bordered flex items-center gap-2 mt-1 h-9 text-white shadow-lg px-3">
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
      <div className="flex items-center gap-10 flex-1 justify-center ">
        <div className="flex hover:border-b-2 w-12  items-center justify-center">
          <HomeCenter className="w-12" />
        </div>
        <div className="flex hover:border-b-2 w-12  items-center justify-center">
          <MarketCenter className="w-12" />
        </div>
        <div className="flex hover:border-b-2 w-12  items-center justify-center">
          <WorldCenter className="w-12" />
        </div>
        <div className="flex hover:border-b-2 w-12  items-center justify-center">
          <GameCenter className="w-12" />
        </div>
      </div>
      <div className="flex justify-center gap-4">
        <div className="flex w-12 rounded-full p-1 hover:bg-gray-400 bg-gray-300">
          <AppRight />
        </div>
        <div className="flex w-12 rounded-full p-1 hover:bg-gray-400 bg-gray-300">
          <ChatRight />
        </div>
        <div className="flex w-12 rounded-full p-1 hover:bg-gray-400 bg-gray-300">
          <NotificationRight />
        </div>

        <div className="flex flex-1 justify-end ">
          {/* <div className="flex items-stretch"> */}
            <div className="dropdown dropdown-end ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost rounded-btn"
              >
                <div className="flex w-12 rounded-full p-1 hover:bg-gray-400 bg-gray-300">
                  <AvatarRight/>
                </div>
              </div>
              <ul tabIndex={0} className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-4 w-52 p-2 shadow">
                <li className="font-semibold"><a>PROFILE</a></li>
                <li className="font-semibold"><a>SETTING</a></li>
                <li className="font-semibold"><a>LOGOUT</a></li>
              </ul>
            </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
