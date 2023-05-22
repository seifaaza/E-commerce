import React,{useEffect} from "react";
import Header from "./Header";
import NosClients from "./nosClients/NosClients";
import Reviews from "./reviews/Reviews";
import Raisons from "./raisons/Raisons";
import Mieux from "./mieux/Mieux";
import Process from "./process/Process";
import Inscrivez from "./inscrivez/Inscrivez";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Landing() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 300,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="flex flex-col gap-6 tablet:gap-10 laptop:gap-14 z-10">
      <Header />
      <NosClients/>
      <Raisons />
      {/* <Reviews /> */}
      <Mieux />
      <Process />
      <Inscrivez />
    </div>
  );
}
