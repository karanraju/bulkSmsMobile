import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const GraphIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      // fill="#1E1E1E"
      fill={props.color? props.color : "#1E1E1E"}
      fillOpacity={0.8}
      d="M19.5 11.75a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v6.75h-1.5V2.25c0-.728-.002-1.2-.048-1.546-.044-.325-.115-.427-.172-.484-.057-.057-.159-.128-.484-.172C12.449.002 11.978 0 11.25 0c-.728 0-1.2.002-1.546.048-.325.044-.427.115-.484.172-.057.057-.128.159-.172.484C9.002 1.051 9 1.522 9 2.25V18.5H7.5V6.75A.75.75 0 0 0 6.75 6h-3a.75.75 0 0 0-.75.75V18.5H1.25a.75.75 0 1 0 0 1.5h20a.75.75 0 1 0 0-1.5H19.5v-6.75Z"
    />
  </Svg>
)
export default GraphIcon
