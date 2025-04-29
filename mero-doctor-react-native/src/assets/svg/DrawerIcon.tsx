import * as React from "react";
import Svg, { SvgProps, Rect, Path } from "react-native-svg";

const DrawerIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32" // keeps the original viewbox for scaling
    {...props} // now width and height will come from props
  >
    <Rect width={32} height={32} fill="#fff" rx={8} />
    <Rect
      width={31}
      height={31}
      x={0.5}
      y={0.5}
      stroke="#1E1E1E"
      strokeOpacity={0.1}
      rx={7.5}
    />
    <Path
      fill="#1E1E1E"
      fillOpacity={0.8}
      d="M21.667 19.333a1 1 0 0 1 .096 1.995l-.096.005H11a1 1 0 0 1-.096-1.995l.096-.005h10.667Zm0-4.667a1 1 0 0 1 0 2H11a1 1 0 1 1 0-2h10.667Zm0-4.666a1 1 0 1 1 0 2H11a1 1 0 0 1 0-2h10.667Z"
    />
  </Svg>
);

export default DrawerIcon;
