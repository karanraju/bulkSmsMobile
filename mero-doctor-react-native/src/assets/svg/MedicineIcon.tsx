import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const MedicineIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 19}
    height={props.width || 19}
    fill="none"
    viewBox="0 0 25 24"
    {...props}
  >
    <Path
      stroke={props.color? props.color : "#1E1E1E"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.7}
      strokeWidth={2}
      d="M8.85 16.4a4.6 4.6 0 0 1-6.5-6.5l7.8-7.8a4.6 4.6 0 0 1 6.5 6.5M6.249 5.999l4.25 4.25"
    />
    <Path
      stroke={props.color? props.color : "#1E1E1E"}
      strokeLinecap="round"
      strokeLinejoin="round"
      // strokeOpacity={0.7}
      strokeWidth={2}
      d="M17.5 15v4.5m-2.25-2.25h4.5m3.75-1.5a7.67 7.67 0 0 1-6 7.5 7.67 7.67 0 0 1-6-7.5V13.5A1.5 1.5 0 0 1 13 12h9a1.5 1.5 0 0 1 1.5 1.5v2.25Z"
    />
  </Svg>
)
export default MedicineIcon
