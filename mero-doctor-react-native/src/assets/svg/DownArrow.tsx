import React from 'react';
import {Svg, Path} from 'react-native-svg'; // For React Native projects

const DownArrow = () => {
  return (
    <Svg
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M9.24805 4.79297L5 1.20703L0.751953 4.79297"
        stroke="white"
        stroke-linecap="round"
      />
    </Svg>
  );
};

export default DownArrow;
