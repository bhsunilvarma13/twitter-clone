import React from "react";
import { GoHomeFill } from "react-icons/go";
import { BsTwitterX } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { FiBookmark } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import { Inter } from "next/font/google";
import { FeedCard } from "@/components/FeedCard";
import { CiCircleMore } from "react-icons/ci";

const inter = Inter({ subsets: ["latin"] });

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const SidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <GoHomeFill />,
  },
  {
    title: "Explore",
    icon: <FiSearch />,
  },
  {
    title: "Notifications",
    icon: <IoNotificationsOutline />,
  },
  {
    title: "Messages",
    icon: <MdMailOutline />,
  },
  {
    title: "Bookmarks",
    icon: <FiBookmark />,
  },
  {
    title: "Profile",
    icon: <FaRegUser />,
  },
  {
    title: "Premium",
    icon: <BsTwitterX />,
  },
  {
    title: "More",
    icon: <CiCircleMore />,
  },
];

export default function Home() {
  return (
    <div className={inter.className}>
      <div className="grid grid-cols-12 h-screen w-screen px-40">
        <div className="col-span-3 pt-4 space-y-4 mr-8">
          <div className="text-2xl w-fit h-fit hover:bg-zinc-700 rounded-full p-3 cursor-pointer transition-all">
            <BsTwitterX />
          </div>
          <div className="text-xl">
            <ul className="space-y-2">
              {SidebarMenuItems.map((item) => (
                <li
                  className="flex justify-start items-center space-x-4 hover:bg-zinc-700 rounded-full p-3 pr-8 w-fit cursor-pointer transition-all"
                  key={item.title}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
          <button className="bg-sky-500 py-3 w-full rounded-full text-center text-lg cursor-pointer hover:bg-sky-600 transition-all font-semibold">
            Tweet
          </button>
        </div>
        <div className="col-span-6 border-l-[1px] border-r-[1px] border-zinc-800 overflow-x-hidden no-scrollbar">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
