import React from 'react';
import { FaCheck } from 'react-icons/fa6';
import { TbTargetArrow } from 'react-icons/tb';

const Success = () => {
    return (
        <div className="lg:py-28 py-2 lg:px-0 px-2">
        <div className="container mx-auto">
          <div className="lg:flex justify-between">
            <div className="lg:w-1/2 w-full">
              <img src='/success.png' alt="" />
            </div>
            <div className="lg:w-1/2 w-full lg:mt-0 mt-3">
              <h3 className="text-blue-600 font-dm-sans text-lg font-medium leading-6 flex items-center gap-2">
              <TbTargetArrow className="font-sans  text-[22px] text-red-400" />
                Reason of Our Success
              </h3>
              <h2 className="max-w-[557px] mt-4 text-gray-900 font-nunito text-4xl font-bold leading-14">
                Quality & Experience Best Digital Agency
              </h2>
              <div className="flex  gap-5 mt-6">
                <button className="px-4  py-[9px] text-[#6B6161] font-sans font-normal text-[18px] bg-[#F4F4FE] hover:bg-gradient-to-r from-[#FE651B] to-[#FFAA52] rounded-full transition-all duration-500 ">
                  Our Mission
                </button>
                <button className="px-4  py-[9px] text-[#6B6161] font-sans font-normal text-[18px] bg-[#F4F4FE] hover:bg-gradient-to-r from-[#FE651B] to-[#FFAA52] rounded-full transition-all duration-500 ">
                  Our Vission
                </button>
                <button className="px-4  py-[9px] text-[#6B6161] font-sans font-normal text-[18px] bg-[#F4F4FE] hover:bg-gradient-to-r from-[#FE651B] to-[#FFAA52] rounded-full transition-all duration-500 ">
                  Our History
                </button>
              </div>
              <p className="font-sans lg:text-[20px] text-[16px] mt-6">
                There are many variations of passages of Lorem Ipsum available,
                but the majori suffered alteration in some form, by injected
                humour, or randomised word whic look even sligh believable. If
                you are going to use.
              </p>
              <div className="flex gap-x-10 items-center mt-6">
                <img src='/Map.png' alt="" className="" />
                <ul className=" py-5">
                  <li className="flex gap-x-2 items-center font-sans lg:text-[18px] text-[16px] font-medium">
                    <FaCheck className="text-red-400 text-[20px]" />
                    Financiall Growth System
                  </li>
                  <li className="flex gap-x-2 items-center font-sans lg:text-[18px] text-[16px] font-medium py-3">
                    <FaCheck className="text-red-400 lg:text-[20px] text-[18px]" />
                    Customer Oriented Program Daily
                  </li>
                  <li className="flex gap-x-2 items-center font-sans lg:text-[18px] text-[16px] font-medium ">
                    <FaCheck className="text-red-400 text-[20px]" />
                    Dedicated Team member
                  </li>
                  <li className="flex gap-x-2 items-center font-sans lg:text-[18px] text-[16px] font-medium py-3">
                    <FaCheck className="text-red-400 lg:text-[20px] text-[18px]" />
                    Product ux Design & Development
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Success;