import React from 'react';

export const AboutUs = () => {
  return (
    <div className="bg-slate-100 h-screen flex justify-center ">
      <div className="bg-white border-2 rounded-2xl shadow-xl p-8 mt-10 w-[750px] h-fit">
        <div className="flex flex-col items-center gap-4">
       
          <h1 className="text-4xl  ">About Us</h1>
          <p className='text-slate-700'>
            Founded in 2020 by Mr. Asmit Naik and Mr. Parth Gupta, Naikee Engineering has quickly established itself as a pioneering force in the power control panel industry. Born out of a vision to address the critical need for reliable power supply solutions, the company started in humble settings—Mr. Naik's kitchen and Mr. Gupta's basement—but has rapidly grown into a full-fledged manufacturing operation.
          </p>
          <p className='text-slate-700' >
            Naikee Engineering is committed to serving key industries such as Real Estate, Fire Safety, HVAC, Pharmaceuticals, and Process Manufacturing. Our expertise lies in understanding the unique requirements of these sectors and delivering innovative, high-quality products that meet and exceed expectations.
          </p>
          <p className='text-slate-700'>
            One of our flagship products is the "FireSense IoT", an advanced solution that integrates IoT technology with fire safety systems, providing real-time data on crucial parameters such as hydrant pump conditions, water tank levels, and fire alarm statuses. This product not only enhances safety but also ensures compliance with stringent regulatory standards, making it a vital tool for modern infrastructure.
          </p>
          <p className='text-slate-700'>
            At Naikee Engineering, we pride ourselves on being a "Make in India" company, dedicated to pushing the boundaries of technology and innovation to create solutions that safeguard lives and property. Our journey is driven by a commitment to quality, customer satisfaction, and a relentless pursuit of excellence in everything we do.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;