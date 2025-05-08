import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const WatchIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={11}
    fill="none"
    {...props}
  >
    <Path
      fill="#1E1E1E"
      fillOpacity={0.7}
      d="M5 .5a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 1a.5.5 0 0 1 .497.442L5.5 3v2.293l1.354 1.353a.5.5 0 0 1-.66.749l-.048-.041-1.5-1.5a.5.5 0 0 1-.141-.288L4.5 5.5V3a.5.5 0 0 1 .5-.5Z"
    />
  </Svg>
)
export default WatchIcon
