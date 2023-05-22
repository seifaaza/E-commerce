import * as React from "react";
import ContactForm from "./ContactForm";

const ContactezHeader = () => {
  return (
    <div className="font-main py-10 px-3 flex flex-col justify-center tablet:px-8 tablet:justify-start items-center gap-10 laptop:px-0 ">
      <h1 className="h-fit text-title text-center tablet:text-large bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-500 ">
        Contactez-nous
      </h1>
      <div className="flex flex-col w-full justify-between tablet:flex-row items-start  gap-16 laptop:justify-evenly ">
        <img
          src="/assets/images/design.png"
          alt=""
          className="image-size hidden tablet:block"
        />
        <div className="flex flex-col gap-5 h-fit text-slate-700 w-full tablet:w-5/12">
          {/* <p className="text-small-heading mb-3 max-w-lg text-center tablet:text-start tablet:text-lg dark:text-slate-300">
          Merci de remplir le formulaire ci-dessus 
          </p> */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
export default ContactezHeader;
