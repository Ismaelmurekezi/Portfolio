import React from 'react'

const Contact = () => {
  return (
    <div className="pl-16 pb-24 pt-28 bg-black flex justify-around">
      <div className="">
        <h3 className="mb-6 text-primary text-2xl font-semibold">CONTACT ME</h3>
        <div className="flex flex-col gap-2">
          <span>
            <span className="text-primary pr-3 text-lg">
              <i class="fa-solid fa-location-dot text-xl pr-2"></i> My Location
            </span>
            KN 173 st 24
          </span>
          <span>
            <span className="text-primary pr-3 text-lg">
              <i class="fa-solid fa-phone text-xl pr-2"></i>Contact
            </span>
            +250 781530573
          </span>
          <span>
            <span className="text-primary pr-3 text-lg">
              <i class="fa-regular fa-envelope text-xl pr-2"></i> Email
            </span>
            ismaelmurekezi1@gmail.com
          </span>
        </div>
      </div>
      <div className="flex flex-col flex-wrap m-auto w-96 gap-2  ">
        <input
          type="text"
          placeholder="Enter your name"
          className="w-[600px] py-3 border-[1px] border-primary bg-transparent rounded-lg px-4 "
        />
        <input
          type="text"
          placeholder="Enter your Email"
          className="w-[600px] py-3 border-[1px] border-primary bg-transparent rounded-lg px-4 "
        />
        <input
          type="text"
          placeholder="Enter your message"
          className="w-[600px] h-60 border-[1px] border-primary bg-transparent rounded-lg px-4  "
        />
      </div>
    </div>
  );
}

export default Contact