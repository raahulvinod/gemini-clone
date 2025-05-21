import React from "react";
import { assets } from "../../assets/assets";

const Main = () => {
  return (
    <div className="flex-1 min-h-screen pb-[15vh] relative">
      <div className="flex items-center justify-between text-[22px] p-[20px] text-[#585858]">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="user icon" className="w-12" />
      </div>
      <div className="main-container">
        <div></div>
      </div>
    </div>
  );
};

export default Main;
