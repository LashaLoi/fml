import React, { CSSProperties, PropsWithChildren } from "react";
import StarBorder from "./StarBorder";

type ElectricBorderProps = PropsWithChildren<{
  color?: string;
  speed?: number;
  chaos?: number;
  thickness?: number;
  className?: string;
  style?: CSSProperties;
}>;

const ElectricBorder: React.FC<ElectricBorderProps> = ({
  children,
}: ElectricBorderProps) => (
  <div className="border-2 border-yellow-300 rounded-lg">{children}</div>
);

export default ElectricBorder;
