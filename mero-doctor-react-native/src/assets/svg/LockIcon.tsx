import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const LockIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <Path
      stroke="#1E1E1E"
      strokeOpacity={0.7}
      d="M1 9.333c0-1.728 0-2.593.527-3.13.527-.536 1.376-.536 3.073-.536h4.8c1.697 0 2.546 0 3.073.537C13 6.74 13 7.605 13 9.334c0 1.728 0 2.592-.527 3.129C11.946 13 11.097 13 9.4 13H4.6c-1.697 0-2.546 0-3.073-.537C1 11.926 1 11.062 1 9.333Z"
    />
    <Path
      stroke="#1E1E1E"
      strokeLinecap="round"
      strokeOpacity={0.7}
      d="M3.667 5.667V4.5c0-.928.35-1.818.976-2.475A3.255 3.255 0 0 1 7 1c.884 0 1.732.369 2.357 1.025a3.59 3.59 0 0 1 .976 2.475v1.167"
      opacity={0.5}
    />
  </Svg>
)
export default LockIcon
