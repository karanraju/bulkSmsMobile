import React from 'react';
import { Svg, Path } from 'react-native-svg';

type RightArrowProps = {
  height: number;
  width: number;
  color?:string
};

const LeftArrow = ({ height, width,color}: RightArrowProps) => {
  return (
    <Svg
      width={width || 16}
      height={height || 16 }
      viewBox="0 0 5 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
    <Path
      stroke={color? color: "#1E1E1E"}
      strokeLinecap="round"
      strokeOpacity={0.7}
      d="M4.793.752 1.207 5l3.586 4.248"
    />
    </Svg>
  );
};

export default LeftArrow;
