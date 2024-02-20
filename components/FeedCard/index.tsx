import React from "react";
import { FaRegComment } from "react-icons/fa6";
import { LiaRetweetSolid } from "react-icons/lia";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineFileUpload } from "react-icons/md";

export const FeedCard: React.FC = () => {
  return (
    <div>
      <div className="border-b border-zinc-800 flex items-start p-4 space-x-4 cursor-pointer hover:bg-zinc-900 transition-all">
        <div className="">
          <div className="w-[45px] h-[45px] bg-white rounded-full" />
        </div>
        <div className="text-sm flex-1 space-y-1">
          <h1 className=" font-medium">Sunil Varma</h1>
          <p className="leading-5">
            Stanford just hosted a hackathon. Over 1000 students from around the
            world came to build for 36 hours straight. The reward? $100k+ in
            prizes.
          </p>
          <div className="flex items-center justify-between w-4/5 pt-2 text-zinc-500">
            <div className="flex items-center gap-2 rounded-full p-2 hover:bg-sky-500/10 hover:text-sky-500 transition-all">
              <FaRegComment />
              <span className="text-xs">17</span>
            </div>
            <div className="flex items-center gap-2 text-xl rounded-full p-2 hover:bg-emerald-500/10 hover:text-emerald-500 transition-all">
              <LiaRetweetSolid />
              <span className="text-xs">1</span>
            </div>
            <div className="flex items-center gap-2 text-lg rounded-full p-2 hover:bg-pink-500/10 hover:text-pink-500 transition-all">
              <IoMdHeartEmpty />
              <span className="text-xs">23</span>
            </div>
            <div className="flex items-center gap-2 text-lg rounded-full p-2 hover:bg-amber-500/10 hover:text-amber-500 transition-all">
              <MdOutlineFileUpload />
              <span className="text-xs">0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
