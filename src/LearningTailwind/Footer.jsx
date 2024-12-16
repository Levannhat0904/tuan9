import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="Bottom absolute left-0 top-[5465px] h-[377px] w-[1440px] bg-white">
        <div className="Logo absolute left-[112px] top-[250px] h-[47.50px] w-[163px]">
          <div className="Group absolute left-0 top-0 h-[47.50px] w-[38px]"></div>
          <div className="Thebox absolute left-[52px] top-[6px]">
            <span style="text-[#2947a9] text-3xl font-bold font-['Work Sans']">
              The
            </span>
            <span style="text-[#2947a9] text-3xl font-bold font-['Work Sans']">
              Box
            </span>
          </div>
        </div>
        <div className="Frame6 absolute left-[112px] top-[85px] inline-flex flex-col items-start justify-start gap-8">
          <div className="Address inline-flex items-start justify-start gap-[13px]">
            <div className="Address font-['Work Sans'] text-xl font-medium text-[#2947a9]">
              Address:
            </div>
            <div className="ElginStCelinaDelaware10299 font-['Work Sans'] text-xl font-normal capitalize text-[#282d3d]">
              6391 Elgin St. Celina, Delaware 10299
            </div>
          </div>
          <div className="Phone inline-flex items-start justify-start gap-[34px]">
            <div className="Phone font-['Work Sans'] text-xl font-medium text-[#2947a9]">
              Phone:
            </div>
            <div className="8411022703 font-['Work Sans'] text-xl font-normal capitalize text-[#282d3d]">
              +84 1102 2703
            </div>
          </div>
          <div className="Email inline-flex items-start justify-start gap-[41px]">
            <div className="Email font-['Work Sans'] text-xl font-medium text-[#2947a9]">
              Email:
            </div>
            <div className="HelloTheboxCom font-['Work Sans'] text-xl font-normal text-black">
              hello@thebox.com
            </div>
          </div>
        </div>
        <div className="Newsletter font-['Work Sans'] absolute left-[904px] top-[85px] text-xl font-medium text-[#2947a9]">
          Newsletter:
        </div>
        <div className="Social font-['Work Sans'] absolute left-[904px] top-[211px] text-xl font-medium text-[#2947a9]">
          Social:
        </div>
        <div className="Formelement absolute left-[904px] top-[128px] inline-flex w-[280px] items-center justify-start gap-2.5 rounded border border-[#e0e2ea] bg-white px-2 py-2.5">
          <div className="PlaceHolder font-['Work Sans'] text-lg font-normal text-[#a3aac1]">
            Your email here
          </div>
        </div>
        <div className="Button absolute left-[1192px] top-[128px] inline-flex h-[41px] w-[136px] items-center justify-center gap-2.5 rounded bg-[#f9995d] px-5 py-4">
          <div className="LearnMore font-['Work Sans'] text-center text-lg font-semibold text-white">
            Subscribe
          </div>
        </div>
        <div className="AkarIconsFacebookFill absolute left-[904px] top-[254px] h-10 w-10" />
        <div className="EntypoSocialLinkedinWithCircle absolute left-[964px] top-[254px] h-10 w-10" />
        <div className="EntypoSocialTwitterWithCircle absolute left-[1024px] top-[254px] h-10 w-10" />
      </div>
      <div className="Footer absolute left-0 top-[5842px] h-[70px] w-[1440px] bg-[#2947a9]">
        <div className="TheboxCompany2022AllRightsReserved font-['Work Sans'] absolute left-[112px] top-[26px] text-base font-normal text-white">
          TheBox Company © 2022. All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
