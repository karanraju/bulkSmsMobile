import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const DoctorListIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      fill={props.color || "#1990FE"}
      d="M13.833 2.5H10.35A2.509 2.509 0 0 0 8 .833c-1.083 0-2 .7-2.35 1.667H2.167A1.667 1.667 0 0 0 .5 4.167v11.666A1.667 1.667 0 0 0 2.167 17.5h11.666a1.667 1.667 0 0 0 1.667-1.667V4.167A1.667 1.667 0 0 0 13.833 2.5ZM8 2.5a.833.833 0 1 1 0 1.667A.833.833 0 0 1 8 2.5Zm-5.833 10h2.591l1.259-2.375.633 4.808 3.075-3.925 1.517 1.492h2.591v3.333H2.167V12.5Zm11.666-1.283h-2.058L9.608 9.05l-2.075 2.658L6.75 5.9l-2.775 5.317H2.167v-7.05h1.666V5h8.334v-.833h1.666v7.05Z"
    />
  </Svg>
)
export default DoctorListIcon
