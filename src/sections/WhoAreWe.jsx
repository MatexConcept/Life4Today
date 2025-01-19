import React from "react";
import { CheckCircle } from "lucide-react";
// import waw1 from '../assest/WaW1.jpg';
import waw3 from "../assest/WaW3.jpg";
import waw2 from "../assest/WaW2.jpg";
import { NavLink } from "react-router-dom";

const WhoWeAre = () => {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2 relative">
          <div className="relative w-full aspect-[490/528] rounded-lg overflow-hidden">
            <img
              src={waw3}
              alt="Who we are main"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute bottom-0 right-0 w-1/2 aspect-[254/302] rounded-lg overflow-hidden">
            <img
              src={waw2}
              alt="Who we are secondary"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute top-12 -left-4 bg-[#1AD0D1] text-white p-4 rounded-lg">
            <svg
              className="w-12 h-12"
              viewBox="0 0 85 85"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M42.5 0L53.7764 31.2236L85 42.5L53.7764 53.7764L42.5 85L31.2236 53.7764L0 42.5L31.2236 31.2236L42.5 0Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
        <div className="md:w-1/2">
          <h3 className="text-[#9F5FFE] text-xl font-semibold mb-4">
            Who we are
          </h3>
          <h2 className="text-4xl font-semibold text-gray-900 mb-6">
            We're Non-Profit Charity & NGO Organization
          </h2>
          <div className="w-12 h-0.5 bg-[#1AD0D1] mb-6"></div>
          <p className="text-gray-600 mb-8">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <ul className="space-y-4 mb-8">
            {[
              "Charity For Education",
              "Charity For Food",
              "Charity For Medical",
              "Charity For Sports",
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle className="w-5 h-5 text-[#1AD0D1] mr-2" />
                <span className="text-gray-900 font-semibold">{item}</span>
              </li>
            ))}
          </ul>

          <NavLink to="/donation">
            <button className="bg-[#1AD0D1] text-white font-semibold py-3 px-6 rounded hover:bg-[#15B5B6] transition duration-300">
              Donate Now
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
