"use client";

import { motion } from "framer-motion";
import { AuroraBackground } from "./aurora-background";
import { useTimer } from "./hooks";
import { Counter } from "./counter";
import { TextGenerateEffect } from "./text-fade";

export default function Home() {
  const { days, hours, minutes, seconds } = useTimer();

  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 sm:mx-10 mx-0"
      >
        <TextGenerateEffect words="ФОРУМ МОЛОДЕЖНЫХ ЛИДЕРОВ 2025" />
        <div className="gap-4 flex justify-center items-center sm:flex-row flex-col mt-4">
          <Counter value={days} text="Д" />
          <Counter value={hours} text="Ч" />
          <Counter value={minutes} text="M" />
          <Counter value={seconds} text="C" />
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
