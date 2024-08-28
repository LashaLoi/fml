import { MotionValue, motion, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const fontSize = 30;
const padding = 15;
const height = fontSize + padding;

export function Counter({ value, text }: { value: number; text: string }) {
  return (
    <div
      style={{ fontSize }}
      className="dark:text-white text-gray-900 flex items-center"
    >
      <div className="flex space-x-3 overflow-hidden rounded px-2 leading-none">
        {value > 100 && <Digit place={100} value={value} />}
        <Digit place={10} value={value} />
        <Digit place={1} value={value} />
      </div>
      <div>{text}</div>
    </div>
  );
}

function Digit({ place, value }: { place: number; value: number }) {
  const valueRoundedToPlace = Math.floor(value / place);
  const animatedValue = useSpring(valueRoundedToPlace);

  useEffect(() => {
    animatedValue.set(valueRoundedToPlace);
  }, [animatedValue, valueRoundedToPlace]);

  return (
    <div style={{ height }} className="relative w-[1ch] tabular-nums">
      {Array(10)
        .fill(0)
        .map((_, i) => (
          <Number key={i} mv={animatedValue} number={i} />
        ))}
    </div>
  );
}

function Number({ mv, number }: { mv: MotionValue; number: number }) {
  let y = useTransform(mv, (latest) => {
    let placeValue = latest % 10;
    let offset = (10 + number - placeValue) % 10;

    let memo = offset * height;

    if (offset > 5) {
      memo -= 10 * height;
    }

    return memo;
  });

  return (
    <motion.span
      style={{ y }}
      className="absolute inset-0 flex items-center justify-center"
    >
      {number}
    </motion.span>
  );
}
