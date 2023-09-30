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

export default function Landing() {
  const [value, setValue] = useState(0);

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
  return (
    <div className="flex flex-col gap-6 tablet:gap-10 laptop:gap-14 z-10 ">
      <Header />
      {/* <NosClients /> */}

      <span className="font-main">
        <h1 className="text-medium text-center text-orange-500 mb-8">
          Services à prix fixe
        </h1>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          textColor="secondary"
          indicatorColor="warning"
          color="primary"
        >
          <Tab
            label="Plomberie"
            className="w-32 tablet:w-64 border-2 border-solid border-orange-400 "
            icon={<BuildRoundedIcon />}
            iconPosition="bottom"
          />
          <Tab
            label="Électricité"
            className="w-32 tablet:w-64 border-2 border-solid border-orange-400 "
            icon={<ElectricalServicesIcon />}
            iconPosition="bottom"
          />
          <Tab
            label="Climatisation"
            className="w-32 tablet:w-64 border-2 border-solid border-orange-400 "
            icon={<AcUnitIcon />}
            iconPosition="bottom"
          />
          <Tab
            label="Électroménager"
            className="w-32 tablet:w-64 border-2 border-solid border-orange-400 "
            icon={<ElectricalServicesIcon />}
            iconPosition="bottom"
          />
          <Tab
            label="Panneaux solaires"
            className="w-32 tablet:w-64 border-2 border-solid border-orange-400 "
            icon={<ElectricalServicesIcon />}
            iconPosition="bottom"
          />
          <Tab
            label="Panneaux solaires"
            className="w-32 tablet:w-64 border-2 border-solid border-orange-400 "
            icon={<ElectricalServicesIcon />}
            iconPosition="bottom"
          />
        </Tabs>
      </span>

      <Raisons />
      <Reviews />
      <Mieux />
      <Process />
      <Inscrivez />
    </div>
  );
}
