
import InscrivezForm from "./InscrivezForm";

export default function Inscrivez() {
  return (
    <div className="font-main py-10 px-3 flex flex-col justify-center tablet:px-8 tablet:justify-start items-center gap-8 laptop:px-0">
      <h1 className="h-fit text-title text-center tablet:text-large bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-500 ">
        Inscrivez-vous et bénéficiez de plusieurs privilèges
      </h1>
      <div className="flex flex-col w-full justify-between tablet:flex-row items-center  gap-10 laptop:justify-evenly ">
        <div className="flex flex-col gap-5  text-slate-700">
          <p className="text-small-heading max-w-lg text-center tablet:text-start tablet:text-lg dark:text-slate-300">
            En vous abonnant à Quick Bricolage vous pouvez profiter de
            l&apos;abonnement annuel et les astuces et les bons plans et de
            nombreuses autres offres
          </p>
          <InscrivezForm />
        </div>
        <img src="/assets/images/design.png" alt="" className="image-size" />
      </div>
    </div>
  );
}
