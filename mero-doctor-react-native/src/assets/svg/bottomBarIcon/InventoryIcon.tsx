import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const InventoryIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={19}
    fill="none"
    {...props}
  >
    <Path
      fill={props.color ? props.color:"#1E1E1E"}
      fillOpacity={0.7}
      d="m9.5 15.5 4-4-1.4-1.4-1.6 1.6V7.5h-2v4.2l-1.6-1.6-1.4 1.4 4 4Zm-7-10v11h14v-11h-14Zm0 13c-.55 0-1.02-.196-1.412-.587A1.93 1.93 0 0 1 .5 16.5V4.025c0-.233.038-.458.113-.675.075-.217.188-.417.337-.6L2.2 1.225c.183-.233.412-.413.687-.538.275-.125.562-.188.863-.187h11.5c.3 0 .588.063.863.188s.504.304.687.537l1.25 1.525c.15.183.263.383.338.6.075.217.113.442.112.675V16.5c0 .55-.196 1.021-.587 1.413a1.92 1.92 0 0 1-1.413.587h-14Zm.4-15h13.2l-.85-1H3.75l-.85 1Z"
    />
  </Svg>
)
export default InventoryIcon
