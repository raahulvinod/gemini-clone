import React from "react";
import { assets } from "../../assets/assets";

const Main = () => {
  return (
    <div className="flex-1 min-h-screen pb-[15vh] relative">
      <div className="flex items-center justify-between text-[22px] p-[20px] text-[#585858]">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="user icon" className="w-12" />
      </div>
      <div className="max-w-[900px] mx-auto">
        <div className="my-[10px] mx-0 text-[56px] font-medium text-[#c4c7c5] p-[20px]">
          <p>
            <span className="text-gradient">Hello, Dev.</span>
          </p>
          <p>How can i help you today?</p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(180px,_1fr))] gap-[15px] p-[20px]">
          <div className="card">
            <p className="text-[#585858 font-[17px]">
              If you could travel anywhere in the world, where would it be?
            </p>
            <img className="card-image" src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p className="text-[#585858 font-[17px]">
              Help me create a study schedule for my upcoming exams.
            </p>
            <img className="card-image" src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p className="text-[#585858 font-[17px]">
              Draft an email to my team announcing a new project deadline.
            </p>
            <img className="card-image" src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p className="text-[#585858 font-[17px]">
              What are the main differences between Python and Java?.
            </p>
            <img className="card-image" src={assets.code_icon} alt="" />
          </div>
        </div>
        <div className="absolute bottom-0 w-full max-w-[900px] py-[10px] m-auto">
          <div className="flex items-center justify-between gap-20px bg-[#f0f4f9] px-5 py-2 rounded-[50px]">
            <input
              className="flex-1 bg-transparent border-none outline-none p-[8px] text-2xl"
              type="text"
              placeholder="Enter a prompt here"
            />
            <div className="flex gap-2 items-center">
              <img
                className="w-6 cursor-pointer"
                src={assets.gallery_icon}
                alt=""
              />
              <img
                className="w-6 cursor-pointer"
                src={assets.mic_icon}
                alt=""
              />
              <img
                className="w-6 cursor-pointer"
                src={assets.send_icon}
                alt=""
              />
            </div>
          </div>
          <p className="text-[13px] mx-auto my-[15px] font-medium text-center">
            Gemini can make mistakes, so double-check it
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
