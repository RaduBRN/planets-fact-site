"use client";

import Image from "next/image";
import { useState } from "react";
import { data } from "@/static/data";
import IconSource from "./Icons/IconSource";
import { returnColorScheme } from "@/utils/colors";
import { AnimatePresence, motion } from "framer-motion";

const buttons = [
  {
    id: "01",
    title: "Overview",
    mobile_title: "overview",
    value: "overview",
    image: "planet",
  },
  {
    id: "02",
    title: "Internal Structure",
    mobile_title: "structure",
    value: "structure",
    image: "internal",
  },
  {
    id: "03",
    title: "Surface Geology",
    mobile_title: "surface",
    value: "geology",
    image: "geology",
  },
];

const PlanetDetails = ({ name }) => {
  const [selectedBtn, setSelectedBtn] = useState("overview");
  const [selectedImg, setSelectedImg] = useState("planet");

  const planetData = data.find(
    (planet) => planet.name.toLowerCase() === name.planetName.toLowerCase()
  );

  const selectedPlanetImage = buttons.find(
    (button) => button.image.toLowerCase() === selectedImg.toLowerCase()
  );

  const handleBtnClick = (item) => {
    setSelectedBtn(item.value);
    setSelectedImg(item.image);
  };

  return (
    <div className="flex flex-col gap-10 w-full max-w-[1180px] px-6 md:px-10 lg:px-0 mx-auto md:mt-10 md:h-[calc(100vh-220px)] lg:h-auto">
      <div className="md:hidden flex flex-row justify-center gap-6 w-full border-b border-[#979797]/20">
        {buttons.map((item) => (
          <button
            key={item.id}
            className="flex text-white/50 hover:text-white"
            onClick={() => handleBtnClick(item)}
          >
            <h3
              className={`uppercase py-4 border-b-2 ${
                selectedBtn === item.value
                  ? `border-${returnColorScheme(planetData?.name)} !text-white`
                  : "border-transparent"
              }`}
            >
              {item.mobile_title}
            </h3>
          </button>
        ))}
      </div>
      <div className="flex flex-col lg:flex-row items-center h-full">
        <div className="w-full flex justify-center items-center h-full">
          <div className="relative flex justify-center items-center">
            <AnimatePresence>
              <motion.img
                src={
                  selectedBtn !== "geology"
                    ? planetData?.images[selectedPlanetImage.image]
                    : planetData?.images?.planet
                }
                alt={`Background image of ${planetData.name}`}
                className="relative w-[111px] h-[111px] md:w-[184px] md:h-[184px] lg:w-[290px] lg:h-[290px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              />
            </AnimatePresence>
            <AnimatePresence>
              {selectedImg === "geology" && (
                <motion.div
                  className="absolute bottom-[-30%]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                >
                  <motion.div className="relative w-[65px] h-[80px] md:w-[85px] md:h-[100px] lg:w-[163px] lg:h-[199px]">
                    <Image
                      src={planetData?.images?.geology}
                      alt={`Geology image of ${planetData.name}`}
                      fill
                    />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className="lg:max-w-[350px] flex md:items-center  lg:items-start md:flex-row lg:flex-col md:gap-20 lg:gap-4">
          <div className="w-full flex flex-col items-center md:items-stretch">
            <h1 className="text-white uppercase">{planetData.name}</h1>
            <p className="text-white min-h-[125px] text-center md:text-left">
              {planetData[selectedBtn]?.content}
            </p>
            <p className="text-white/50">
              Source&nbsp;:&nbsp;
              <a
                href={planetData[selectedBtn]?.source}
                target="_blank"
                className="underline inline-flex items-center gap-1"
              >
                Wikipedia
                <IconSource />
              </a>
            </p>
          </div>
          <div className="hidden md:flex w-full flex-col gap-2">
            {buttons.map((item) => (
              <motion.button
                key={item.id}
                className={`default-btn flex gap-3 ${
                  selectedBtn === item.value
                    ? `bg-${returnColorScheme(planetData?.name)}`
                    : "hover:bg-darkgray"
                }`}
                onClick={() => handleBtnClick(item)}
                animate={selectedBtn === item.value ? { y: -2.5 } : { y: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="opacity-50">{item.id}</h3>
                <h3 className="uppercase">{item.title}</h3>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-4 gap-10 uppercase pb-8">
        <div className="border border-white/20 h-12 md:h-[88px] lg:h-32 flex md:flex-col items-center justify-between md:items-stretch md:justify-center px-4">
          <h4 className="text-white/50">Rotation time</h4>
          <h2 className="text-white">{planetData.rotation}</h2>
        </div>
        <div className="border border-white/20 h-12 md:h-[88px] lg:h-32 flex md:flex-col items-center justify-between md:items-stretch md:justify-center px-4">
          <h4 className="text-white/50">Revolution Time</h4>
          <h2 className="text-white">{planetData.revolution}</h2>
        </div>
        <div className="border border-white/20 h-12 md:h-[88px] lg:h-32 flex md:flex-col items-center justify-between md:items-stretch md:justify-center px-4">
          <h4 className="text-white/50">Radius</h4>
          <h2 className="text-white">{planetData.radius}</h2>
        </div>
        <div className="border border-white/20 h-12 md:h-[88px] lg:h-32 flex md:flex-col items-center justify-between md:items-stretch md:justify-center px-4">
          <h4 className="text-white/50">Average Temp.</h4>
          <h2 className="text-white">{planetData.temperature}</h2>
        </div>
      </div>
    </div>
  );
};

export default PlanetDetails;
