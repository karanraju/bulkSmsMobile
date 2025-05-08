import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const HelloIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="none"
    {...props}
  >
    <Path fill="#000" d="M0 24.18h24v-24H0v24Z" />
  </Svg>
)
export default HelloIcon
