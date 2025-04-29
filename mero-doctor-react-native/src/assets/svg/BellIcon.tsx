import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const BellIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={19}
    fill="none"
    {...props}
  >
    <Path
      fill="#1E1E1E"
      fillOpacity={0.7}
      d="M6.333 16.5h3.334c0 .917-.75 1.667-1.667 1.667s-1.667-.75-1.667-1.667Zm9.167-1.667v.834H.5v-.834l1.667-1.666v-5a5.8 5.8 0 0 1 4.166-5.584v-.25c0-.916.75-1.666 1.667-1.666s1.667.75 1.667 1.666v.25a5.8 5.8 0 0 1 4.166 5.584v5l1.667 1.666Zm-3.333-6.666A4.126 4.126 0 0 0 8 4a4.126 4.126 0 0 0-4.167 4.167V14h8.334V8.167Z"
    />
  </Svg>
)
export default BellIcon
