import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const StarIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={15}
    fill="none"
    {...props}
  >
    <Path
      fill="#F6911E"
      fillOpacity={0.8}
      d="m8 0 1.796 5.528h5.813l-4.703 3.416 1.796 5.528L8 11.056l-4.702 3.416 1.796-5.528L.392 5.528h5.812L8 0Z"
    />
  </Svg>
)
export default StarIcon
