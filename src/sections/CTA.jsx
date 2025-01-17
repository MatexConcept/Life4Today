import React from 'react';
import { Heart } from 'lucide-react';

const CounterItem = ({ number, text }) => (
  <div className="flex flex-col items-center">
    <span className="text-5xl font-bold text-white mb-2">{number}</span>
    <span className="text-lg font-semibold text-white text-center">{text}</span>
  </div>
);

const CTASection = () => {
  return (
    <section className="relative bg-[#1AD0D1] bg-opacity-70 py-24">
      <div className="container mx-auto px-4">
        {/* Main CTA Card */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16 relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-[#9F5FFE] text-xl font-semibold mb-2">
              Act Now for a Better World
            </h3>
            <h2 className="text-[#1D1D1D] text-4xl font-semibold mb-8 max-w-3xl">
              Solutions to Help People in Need and Save the Planet
            </h2>
            <div className="flex items-center">
              <div className="w-12 h-0.5 bg-[#1AD0D1] mr-4"></div>
              <button className="bg-[#1AD0D1] text-white font-semibold py-3 px-6 rounded-lg flex items-center">
                <span className="mr-2">Donate Now</span>
                <Heart size={16} />
              </button>
            </div>
          </div>
          {/* Decorative background pattern */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(15)].map((_, index) => (
              <div
                key={index}
                className="absolute left-0 right-0 h-24 bg-[#F5F5F5]"
                style={{ top: `${index * 24}px`, transform: 'skew(45deg)' }}
              ></div>
            ))}
          </div>
        </div>

        {/* Counter Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <CounterItem number="1M+" text="People Helped" />
          <CounterItem number="400+" text="Volunteers" />
          <CounterItem number="15+" text="Countries Reached" />
          <CounterItem number="20+" text="Ongoing Projects" />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
