import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export const LeftArrow = (props) => (
  <Svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M18 24l-8-8 8-8"
      stroke="#5603AD"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
