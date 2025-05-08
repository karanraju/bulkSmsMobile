import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const GlobeIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      stroke="#1E1E1E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.7}
      strokeWidth={1.5}
      d="M1.333 7.84a6.667 6.667 0 1 0 13.333 0 6.667 6.667 0 0 0-13.333 0Z"
    />
    <Path
      stroke="#1E1E1E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.7}
      strokeWidth={1.5}
      d="M8.667 1.206s2 2.633 2 6.633-2 6.634-2 6.634m-1.334 0s-2-2.634-2-6.634 2-6.633 2-6.633m-5.58 8.967h12.494M1.753 5.506h12.493"
    />
  </Svg>
)
export default GlobeIcon
