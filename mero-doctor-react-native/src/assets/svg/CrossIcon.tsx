import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const CrossIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#1E1E1E"
      fillOpacity={0.7}
      d="M5 20v-5H0V5h5V0h10v5h5v10h-5v5H5ZM2 9h5c.167 0 .325.042.475.125.15.083.267.192.35.325l.875 1.3 1.35-4.05c.067-.2.187-.367.362-.5s.37-.2.588-.2c.167 0 .325.042.475.125.15.083.267.192.35.325l1.7 2.55H18V7h-5V2H7v5H2v2Zm5 9h6v-5h5v-2h-5a.964.964 0 0 1-.475-.125 1.177 1.177 0 0 1-.375-.325l-.85-1.3-1.35 4.05c-.067.2-.192.367-.375.5a.999.999 0 0 1-.6.2.964.964 0 0 1-.475-.125.942.942 0 0 1-.35-.325L6.45 11H2v2h5v5Z"
    />
  </Svg>
)
export default CrossIcon
