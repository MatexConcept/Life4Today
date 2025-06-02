import React from 'react';
import bg1 from '../assest/Dimg1.jpg'
import Cimg1 from '../assest/CImg1.jpg'
import Cimg2 from '../assest/CImg2.jpg'

import { NavLink } from "react-router-dom";


const CampaignCard = ({ title, imageSrc, raised, goal }) => (
  <div className="w-[360px] h-[498px] bg-white rounded-[22px] overflow-hidden shadow-lg">
    <div className="relative h-[232px]">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-full object-cover rounded-[12px]"
      />
    </div>
    <div className="px-6 py-4">
      <h3 className="font-outfit font-medium text-[22px] leading-7 text-[#1D1D1D] mb-4">
        {title}
      </h3>
      <div className="mb-4">
        <div className="flex justify-between mb-2">
          <span className="font-outfit font-medium text-xl text-[#1D1D1D]">${raised}</span>
          <span className="font-outfit font-normal text-lg text-[#8A8A8A]">${goal}</span>
        </div>
        <div className="relative h-2 bg-[#E0E0E0] rounded-full">
          <div
            className="absolute top-0 left-0 h-full bg-[#1AD0D1] rounded-full"
            style={{ width: `${(raised / goal) * 100}%` }}
          ></div>
        </div>
      </div>
      <div className="flex justify-between">
      <NavLink to="/donation">
      <button className="bg-[#1AD0D1] text-white font-outfit font-medium text-lg py-3 px-5 rounded-lg">
          Donate now
        </button>
      </NavLink>

     
       
      </div>
    </div>
  </div>
);

const CampaignSection = () => {
  return (
    <section className="relative w-full bg-[#FAFAFA] py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-outfit font-semibold text-xl text-[#9F5FFE] mb-4">
          Our Recent Campaign
        </h2>
        <h3 className="font-outfit font-semibold text-4xl leading-[50px] text-[#1D1D1D] mb-12 max-w-[467px]">
          Giving help to those who need it
        </h3>
        <div className="flex flex-wrap justify-between gap-8">
          <CampaignCard
            title="Rebuild and Renew: Help Communities Affected by Wildfires"
            imageSrc={bg1}
            raised={5200}
            goal={10400}
          />
          <CampaignCard
            title="Food, water and medicine for shelter on the Dnieper"
            imageSrc={Cimg1}
            raised={500}
            goal={1000}
          />
          <CampaignCard
            title="Massive invasion of Palestine, war in the Gaza strip"
            imageSrc={Cimg2}
            raised={200}
            goal={700}
          />
        </div>
      </div>
    </section>
  );
};

export default CampaignSection;
