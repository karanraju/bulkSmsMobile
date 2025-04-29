import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const DocumentIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={22}
    fill="none"
    {...props}
  >
    <Path
      stroke={props.color? props.color : "#1E1E1E"}
      strokeLinecap="round"
      strokeLinejoin="round"
      // strokeOpacity={0.7}
      strokeWidth={2}
      d="M5.75 10h8m-8 3h8m-8 3h4.17m-8.17-1V7c0-2.828 0-4.243.879-5.121C3.507 1 4.922 1 7.75 1h4.172c.408 0 .613 0 .797.076.183.076.328.22.617.51l3.828 3.828c.29.29.434.434.51.618.076.183.076.388.076.796V15c0 2.828 0 4.243-.879 5.121-.878.879-2.293.879-5.121.879h-4c-2.828 0-4.243 0-5.121-.879-.879-.878-.879-2.293-.879-5.121Z"
    />
  </Svg>
)
export default DocumentIcon
