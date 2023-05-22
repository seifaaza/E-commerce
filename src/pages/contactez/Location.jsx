import React from "react";

const Location = () => {
  return (
    <div className="font-main py-10 px-3 flex flex-col justify-center tablet:px-8 tablet:justify-start items-center gap-10 laptop:px-0 ">
      <h1 className="h-fit text-title text-center tablet:text-large bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-500 ">
        Où pouvez-vous nous trouver ?
      </h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13317.117272428768!2d-7.6688310445800685!3d33.442028699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda62e5858183ee5%3A0x7f3fbdecab6e70aa!2sQuick%20bricolage!5e0!3m2!1sfr!2sma!4v1684206337456!5m2!1sfr!2sma"
        className="w-full h-64 rounded-md"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Location;
