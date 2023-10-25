import { useEffect, useState } from "react";
import Header from "./Header";
import NosClients from "./nosClients/NosClients";
import Reviews from "./reviews/Reviews";
import Raisons from "./raisons/Raisons";
import Mieux from "./mieux/Mieux";
import Process from "./process/Process";
import Inscrivez from "./inscrivez/Inscrivez";
import AOS from "aos";
import "aos/dist/aos.css";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import BuildRoundedIcon from "@mui/icons-material/BuildRounded";
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default function Landing() {
  const [value, setValue] = useState(0);

  const handleDragStart = (e) => e.preventDefault();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 300,
    });
    AOS.refresh();
  }, []);

  const items = [
    <div className="item bg-orange-400"></div>,
    <div className="item bg-orange-400"></div>,
    <div className="item bg-orange-400"></div>,
    <div className="item bg-orange-400"></div>,
    <div className="item bg-orange-400"></div>,
    <div className="item bg-orange-400"></div>,
    <div className="item bg-orange-400"></div>,
    <div className="item bg-orange-400"></div>,
  ];
  const responsive = {
    0: { items: 1 },
    568: { items: 4 },
    1024: { items: 6 },
  };

  return (
    <div className="flex flex-col gap-6 tablet:gap-10 laptop:gap-14 z-10 pb-16">
      <Header />
      <div className="main-container flex flex-col gap-6 tablet:gap-10 laptop:gap-14">
        <Raisons />

        <span className="font-main w-full">
          <h1 className="text-medium text-orange-500 mb-8">
            Services à prix fixe
          </h1>
          <AliceCarousel
            style={{ position: "relative" }}
            disableDotsControls="true"
            ArrowLeft="true"
            mouseTracking
            items={items}
            responsive={responsive}
            controlsStrategy="alternate"
          />
        </span>
        <span className="font-main">
          <h1 className="text-medium ml-10 text-orange-500 mb-8">
            Besoins personnalisés
          </h1>
          <AliceCarousel
            style={{ position: "relative" }}
            disableDotsControls="true"
            ArrowLeft="true"
            mouseTracking
            items={items}
            responsive={responsive}
            controlsStrategy="alternate"
          />
        </span>
        <span className="font-main">
          <div className="flex justify-between">
            <h1 className="ml-10 text-medium text-center text-orange-500 mb-8">
              En promo chez nous
            </h1>
            <h2 className="self-end mb-3">Voir tous</h2>
          </div>
          <AliceCarousel
            style={{ position: "relative" }}
            disableDotsControls="true"
            ArrowLeft="true"
            mouseTracking
            items={items}
            responsive={responsive}
            controlsStrategy="alternate"
          />
        </span>
        <span className="font-main hidden">
          <h1 className="text-medium text-center text-orange-500 mb-8">
            En promo chez nous
          </h1>
          <AliceCarousel
            style={{ position: "relative" }}
            disableDotsControls="true"
            ArrowLeft="true"
            mouseTracking
            items={items}
            responsive={responsive}
            controlsStrategy="alternate"
          />
        </span>
        <Reviews />
        <NosClients />
        <Mieux />
        <Process />
        <Inscrivez />
      </div>
    </div>
  );
}
