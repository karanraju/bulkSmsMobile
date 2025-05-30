import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ScanIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M1.27 8C.84 8 .5 7.66.5 7.23V4.92A4.93 4.93 0 0 1 5.42 0h2.31c.43 0 .77.34.77.77s-.34.77-.77.77H5.42c-1.87 0-3.38 1.52-3.38 3.38v2.31c0 .43-.35.77-.77.77ZM19.73 8a.77.77 0 0 1-.77-.77V4.92c0-1.87-1.52-3.38-3.38-3.38h-2.31a.77.77 0 0 1 0-1.54h2.31a4.93 4.93 0 0 1 4.92 4.92v2.31c0 .43-.34.77-.77.77ZM15.58 20h-1.39a.77.77 0 0 1 0-1.54h1.39c1.87 0 3.38-1.52 3.38-3.38V13.7a.77.77 0 0 1 1.54 0v1.38A4.93 4.93 0 0 1 15.58 20ZM7.73 20H5.42A4.93 4.93 0 0 1 .5 15.08v-2.31c0-.43.34-.77.77-.77s.77.34.77.77v2.31c0 1.87 1.52 3.38 3.38 3.38h2.31a.77.77 0 0 1 0 1.54ZM16.96 9.23H4.04a.77.77 0 0 0 0 1.54H16.96a.77.77 0 0 0 0-1.54ZM5.4 11.94v.33c0 1.66 1.34 3 3 3h4.2c1.66 0 3-1.34 3-3v-.33c0-.12-.09-.21-.21-.21H5.61c-.12 0-.21.09-.21.21ZM5.4 8.06v-.33c0-1.66 1.34-3 3-3h4.2c1.66 0 3 1.34 3 3v.33c0 .12-.09.21-.21.21H5.61c-.12 0-.21-.09-.21-.21Z"
    />
  </Svg>
)
export default ScanIcon
