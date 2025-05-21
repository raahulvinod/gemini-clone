import { useState } from "react";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);

  return (
    <div className="min-h-screen inline-flex flex-col justify-between bg-[#f0f4f9] px-[15px] py-[25px]">
      <div className="top">
        <img
          className="block ml-[10px] cursor-pointer w-8"
          src={assets.menu_icon}
          alt="menu"
          onClick={() => setExtended((prev) => !prev)}
        />
        <div className="mt-[30px] items-center inline-flex text-center gap-[10px] px-[15px] py-[10px] bg-[#e6eaf1] rounded-[50px] text-gray-50 text-sm">
          <img className="w-5" src={assets.plus_icon} alt="" />
          {extended ? <p className="text-black">New Chat</p> : null}
        </div>

        {extended ? (
          <div className="flex-col">
            <p className="mt-4 mb-2">Recent</p>
            <div className="recent-entry">
              <img className="w-8" src={assets.message_icon} alt="message" />
              <p>What is react ...</p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="flex flex-col">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" className="w-8" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" className="w-8" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.send_icon} alt="" className="w-8" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
