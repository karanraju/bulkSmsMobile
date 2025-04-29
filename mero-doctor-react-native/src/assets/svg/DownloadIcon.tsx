import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const DownloadIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <Path
      fill="#1E1E1E"
      fillOpacity={0.7}
      d="M7 10.334 2.833 6.167 4 4.959l2.167 2.166V.333h1.667v6.792L10 4.958l1.167 1.209L7 10.334Zm-5 3.333c-.458 0-.85-.163-1.177-.49A1.608 1.608 0 0 1 .333 12V9.5H2V12h10V9.5h1.667V12c0 .459-.163.851-.49 1.178a1.6 1.6 0 0 1-1.177.489H2Z"
    />
  </Svg>
)
export default DownloadIcon
