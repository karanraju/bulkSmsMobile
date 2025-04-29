import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const TickIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={10}
    fill="none"
    {...props}
  >
    <Path
      stroke={props.color? props.color: "#00B3A6"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.8}
      strokeWidth={1.5}
      d="M1.333 6.667s1 0 2.334 2.333c0 0 3.706-6.111 7-7.333"
    />
  </Svg>
)
export default TickIcon
