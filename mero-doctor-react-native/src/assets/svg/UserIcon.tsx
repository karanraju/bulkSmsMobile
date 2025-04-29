import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const UserIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      stroke={props.color? props.color:"#1E1E1E"}
      strokeLinejoin="round"
      strokeOpacity={0.7}
      strokeWidth={1.5}
      d="M2.667 12a2.667 2.667 0 0 1 2.666-2.666h5.334A2.667 2.667 0 0 1 13.333 12 1.333 1.333 0 0 1 12 13.334H4A1.334 1.334 0 0 1 2.667 12Z"
    />
    <Path
      stroke={props.color? props.color:"#1E1E1E"}
      strokeOpacity={0.7}
      strokeWidth={1.5}
      d="M8 6.667a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
    />
  </Svg>
)
export default UserIcon
