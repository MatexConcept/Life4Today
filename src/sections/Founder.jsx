import React from 'react';

const FounderSection = () => {
  return (
    <section className="relative bg-[#FAFAFA] py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
        
          <div className="relative w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="relative w-full max-w-[502px] h-[500px] bg-[#1AD0D1] rounded-t-[100px] mx-auto">
              <div className="absolute top-[-171px] left-1/2 transform -translate-x-1/2 w-[440px] h-[671px]">
                <img
                  src="/placeholder.svg"
                  alt="Testimonial"
                  className="rounded-t-[40px] w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

         
          <div className="w-full lg:w-1/2 lg:pl-12">
            <h3 className="text-[#9F5FFE] text-xl font-medium mb-4">Founder</h3>
            <h2 className="text-[#1D1D1D] text-4xl lg:text-5xl font-semibold leading-tight mb-8">
            Meet Our Visionary Leader
            </h2>
            <p className="text-[#696969] mb-8">
            Our mission started with a simple goal: to create a better world by lending a helping hand 
    to those in need. Through challenges and triumphs, I've seen the power of kindness transform 
    lives and communities. Together, we are stronger, and I’m grateful for the unwavering support 
    that fuels our journey.
            </p>
            <div>
              <h4 className="text-[#232323] text-2xl font-medium mb-2">Kay Henderson</h4>
              <p className="text-[#696969] text-lg">Founder & CEO - Helping Hands Charity</p>
            </div>
          </div>
        </div>
      </div>

     
    </section>
  );
};



export default FounderSection;
