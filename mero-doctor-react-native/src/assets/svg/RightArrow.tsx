import React from 'react';
import { Svg, Path } from 'react-native-svg';

type RightArrowProps = {
  height: number;
  width: number;
  color?:string
};

const RightArrow = ({ height, width,color}: RightArrowProps) => {
  return (
    <Svg
      width={width || 16}
      height={height || 16 }
      viewBox="0 0 5 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M0.707031 9.74805L4.29297 5.5L0.707031 1.25195"
        // stroke="#1E1E1E"
        stroke={color? color: "#1E1E1E"}
        strokeOpacity="0.7"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default RightArrow;
