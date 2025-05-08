import * as React from "react"
import Svg, { SvgProps, Rect, Path } from "react-native-svg"
const CloseButtonIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <Rect width={32} height={32} fill="#1E1E1E" fillOpacity={0.05} rx={16} />
    <Rect
      width={31}
      height={31}
      x={0.5}
      y={0.5}
      stroke="#1E1E1E"
      strokeOpacity={0.2}
      rx={15.5}
    />
    <Path
      fill="#1E1E1E"
      fillOpacity={0.8}
      d="M11.79 10.294 16 14.505l4.189-4.189a1.005 1.005 0 0 1 .72-.316 1.09 1.09 0 0 1 1.018 1.481.982.982 0 0 1-.222.33L17.462 16l4.243 4.243c.18.176.286.414.295.665A1.09 1.09 0 0 1 20.909 22a1.003 1.003 0 0 1-.753-.294L16 17.494l-4.2 4.2a1.002 1.002 0 0 1-.709.305 1.09 1.09 0 0 1-1.018-1.481.981.981 0 0 1 .222-.33L14.538 16l-4.243-4.244a.981.981 0 0 1-.295-.665A1.09 1.09 0 0 1 11.091 10c.262.003.513.11.698.294Z"
    />
  </Svg>
)
export default CloseButtonIcon
