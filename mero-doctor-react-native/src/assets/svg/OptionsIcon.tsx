import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const OptionsIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={4}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      fill="#1E1E1E"
      fillOpacity={0.7}
      d="M.125 2.75a1.875 1.875 0 1 1 3.75 0 1.875 1.875 0 0 1-3.75 0Zm0 6.25a1.875 1.875 0 1 1 3.75 0 1.875 1.875 0 0 1-3.75 0Zm0 6.25a1.875 1.875 0 1 1 3.75 0 1.875 1.875 0 0 1-3.75 0Z"
    />
  </Svg>
)
export default OptionsIcon
