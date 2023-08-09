import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const Plus = (props) => (
  <Svg
    width={44}
    height={44}
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={22} cy={22} r={22} fill="#fff" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22 11.5a1.5 1.5 0 011.5 1.5v7.5H31a1.5 1.5 0 010 3h-7.5V31a1.5 1.5 0 01-3 0v-7.5H13a1.5 1.5 0 010-3h7.5V13a1.5 1.5 0 011.5-1.5z"
      fill="#5603AD"
    />
  </Svg>
);
