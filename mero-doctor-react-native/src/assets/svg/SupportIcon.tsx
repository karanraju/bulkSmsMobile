import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SupportIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      stroke="#1E1E1E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.8}
      strokeWidth={1.5}
      d="M16.667 9.167a6.666 6.666 0 1 0-13.334 0"
    />
    <Path
      stroke="#1E1E1E"
      strokeOpacity={0.8}
      strokeWidth={1.5}
      d="M16.667 15v.417A1.666 1.666 0 0 1 15 17.083h-2.917M1.667 12.865v-1.563a1.667 1.667 0 0 1 1.262-1.617l1.45-.363A.5.5 0 0 1 5 9.807v4.552a.5.5 0 0 1-.622.486l-1.45-.363a1.666 1.666 0 0 1-1.261-1.616v-.001Zm16.666 0v-1.563a1.666 1.666 0 0 0-1.262-1.617l-1.45-.363a.5.5 0 0 0-.62.485v4.552a.5.5 0 0 0 .62.486l1.45-.363a1.666 1.666 0 0 0 1.262-1.616v-.001Z"
    />
    <Path
      stroke="#1E1E1E"
      strokeOpacity={0.8}
      strokeWidth={1.5}
      d="M11.25 18.333h-2.5a1.25 1.25 0 1 1 0-2.5h2.5a1.25 1.25 0 1 1 0 2.5Z"
    />
  </Svg>
)
export default SupportIcon
