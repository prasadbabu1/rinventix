import React from "react";
import {
  LogOutIcon,
  PlusIcon,
  SunIcon,
} from "../../constants";

const LeftSection = ({ show = false }) => {
  const getdata = localStorage.getItem("data");
  const jdata = JSON.parse(getdata);
  return (
    <div
      className={`${show && " flex flex-col"} ${
        !show && "hidden"
      } bg-black md:fixed md:inset-y-0 md:flex md:w-[260px] md:flex-col`}
    >
      <div className="flex h-full min-h-0 flex-col ">
        <div className="scrollbar-trigger flex h-full w-full flex-1 items-start border-white/20">
          <nav className="flex h-full flex-1 flex-col space-y-1 p-2">
            <a className="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm mb-2 flex-shrink-0 border border-white/20" href="/">
              <PlusIcon />
              New chat
            </a>
            <p style={{color:"white"}}>PREVIOUS SEARCH'S</p>
            
            {
        jdata?.map((item, index) => (
          <div key={index} style={{ display: 'flex', flexDirection: 'row',justifyContent:"space-between",color:"white",border:"2px solid gray",borderRadius:"5px"}}>
            <p className="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm mb-2 flex-shrink-0">{item.Message}</p>
            <img src={item.Image} alt="item" style={{ maxWidth: '30%',borderRadius:"5px",  }} />
          </div>
        ))
      }
            <div className="flex-col flex-1 overflow-y-auto border-b border-white/20">
              <div className="flex flex-col gap-2 text-gray-100 text-sm">
                {/*  */}
              </div>
            </div>
            {[
              {
                icon: (
                  <SunIcon
                    className="h-4 w-4 text-white font-bold"
                    strokeWidth="2"
                  />
                ),
                text: "Light mode",
              },
              { icon: <LogOutIcon />, text: "Log out" },
            ].map((item, index) => (
              <a
                className="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm"
                key={index}
              >
                {item.icon}
                {item.text}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
