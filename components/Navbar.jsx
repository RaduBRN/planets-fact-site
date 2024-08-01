"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { data } from "@/static/data";
import IconHamburger from "./Icons/IconHamburger";
import { returnColorScheme } from "@/utils/colors";
import { useState } from "react";
import IconChevron from "./Icons/IconChevron";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="text-white uppercase flex flex-col lg:flex-row gap-6 justify-between px-0 md:px-6 py-0 md:py-6 items-center md:border-b border-[#979797]/20">
      <div className="flex items-center justify-between md:justify-center w-full md:w-auto px-6 md:px-0 py-6 md:py-0 border-b md:border-b-0 border-[#979797]/20">
        <Link
          href={"/"}
          className="font-medium text-[28px] tracking-[-1.05px] font-antonio"
        >
          The Planets
        </Link>
        <IconHamburger
          className={`${
            !menuOpen && "opacity-25"
          } block md:hidden cursor-pointer`}
          toggleMenu={setMenuOpen}
        />
      </div>
      <div className="hidden md:flex gap-8 text-white/75 justify-center">
        {data.map((item) => (
          <Link
            key={item.name}
            href={`/${item.name.toLowerCase()}`}
            className={`relative text-[11px] leading-[25px] tracking-[1px] hover:text-white before:invisible before:hover:visible before:block before:relative lg:before:bg-${returnColorScheme(
              item.name
            )} before:w-full before:-top-[calc(45.5px-15px)] before:h-1`}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            layout
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              duration: 0.5,
            }}
            className="flex flex-col divide-y divide-white/10 first:pt-0 pb-4 md:hidden w-full bg-darkblue overflow-hidden px-6 border-b border-[#979797]/20"
          >
            {data.map((item) => (
              <Link
                key={item.name}
                href={item.name.toLowerCase()}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between py-4"
              >
                <div className="flex gap-4">
                  <div
                    className={`w-5 h-5 bg-${returnColorScheme(
                      item.name
                    )} rounded-full`}
                  />
                  <span className="font-bold text-[15px] leading-[25px] tracking-[1.36px]">
                    {item.name}
                  </span>
                </div>
                <IconChevron />
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
