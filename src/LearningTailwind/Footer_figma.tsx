import React from 'react';

const Footer_figma = () => {
  return (
    <div className="fixed bottom-0 w-full">
      <div>
        <div className="Bottom left-0 h-[377px] w-full bg-white">
          <div className="Logo absolute left-[112px] top-[250px] h-[47.5px] w-[163px]">
            <div className="Group absolute left-0 top-0 h-[47.5px] w-[38px]"></div>
            <div className="TheBox absolute left-[52px] top-[6px] flex gap-1">
              <img
                src="logo.png"
                alt="logo_thebox"
                className="mr-2 h-12 w-10"
              />
              <span className="font-sans text-3xl font-bold italic text-[#2947A9]">
                The
              </span>
              <span className="font-sans text-3xl font-bold text-[#2947A9]">
                Box
              </span>
            </div>
          </div>
          <div className="Frame6 absolute left-[112px] top-[85px] inline-flex flex-col items-start justify-start gap-8">
            <div className="Address inline-flex items-start justify-start gap-[13px]">
              <div className="Address font-sans text-xl font-medium text-[#2947A9]">
                Address:
              </div>
              <div className="font-sans text-xl font-normal capitalize text-[#292E3D]">
                6391 Elgin St. Celina, Delaware 10299
              </div>
            </div>
            <div className="Phone inline-flex items-start justify-start gap-[34px]">
              <div className="Phone font-sans text-xl font-medium text-[#2947A9]">
                Phone:
              </div>
              <div className="font-sans text-xl font-normal capitalize text-[#292E3D]">
                +84 1102 2703
              </div>
            </div>
            <div className="Phone inline-flex items-start justify-start gap-[34px]">
              <div className="Phone font-sans text-xl font-medium text-[#2947A9]">
                Email:
              </div>
              <div className="font-sans text-xl font-normal capitalize text-[#292E3D]">
                hello@thebox.com
              </div>
            </div>
          </div>
          <div className="absolute left-[904px] top-[85px] font-sans text-xl font-medium text-[#2947A9]">
            Newsletter:
          </div>
          <div className="Socical absolute left-[904px] top-[211px] font-sans text-xl font-medium text-[#2947A9]">
            Social:
          </div>
          <div className="absolute left-[904px] top-[128px] inline-flex w-[280px] items-center justify-start gap-2.5 rounded border-[#223771] bg-white px-2 py-2.5">
            <input
              type="email"
              placeholder="Your email here"
              className="h-full w-full bg-transparent font-sans text-lg font-normal text-[#A3AAC1] placeholder-[#A3AAC1] outline-none"
            />
          </div>
          <div className="Button absolute left-[1192px] top-[128px] inline-flex h-[41px] w-[136px] items-center justify-center gap-2.5 rounded bg-[#F9995D] px-5 py-4 pb-1 pt-1">
            <button className="h-full w-full text-center font-sans text-lg font-semibold text-white">
              Subscribe
            </button>
          </div>
          <div className="Social_icon absolute left-[904px] top-[254px] flex gap-6">
            <div className="fb_icon flex items-center justify-center">
              <img
                src="akar-icons_facebook-fill.png"
                alt="fb_icon"
                className="h-8 w-8"
              />
            </div>
            <div className="LinkedIn flex items-center justify-center">
              <img
                src="entypo-social_linkedin-with-circle.png"
                alt="LinkedIn"
                className="h-8 w-8"
              />
            </div>
            <div className="Twitter flex items-center justify-center">
              <img
                src="entypo-social_twitter-with-circle.png"
                alt="Twitter"
                className="h-8 w-8"
              />
            </div>
          </div>
          <div className="Footer absolute bottom-0 left-0 h-[70px] w-full bg-[#2947A9]">
            <div className="absolute left-[112px] top-[26px] font-sans text-base font-normal text-white">
              TheBox Company © 2022. All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer_figma;
