import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const QRIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      fill="#1E1E1E"
      fillOpacity={0.7}
      d="M.5 7.167h6.667V.5H.5v6.667Zm1.667-5H5.5V5.5H2.167V2.167ZM.5 15.5h6.667V8.833H.5V15.5Zm1.667-5H5.5v3.333H2.167V10.5ZM8.833.5v6.667H15.5V.5H8.833Zm5 5H10.5V2.167h3.333V5.5ZM8.842 8.833h1.666V10.5H8.842V8.833Zm1.666 1.667h1.667v1.667h-1.667V10.5Zm-1.666 1.667h1.666v1.666H8.842v-1.666Zm3.333 0h1.667v1.666h-1.667v-1.666Zm1.667 1.666h1.666V15.5h-1.666v-1.667Zm-3.334 0h1.667V15.5h-1.667v-1.667Zm1.667-5h1.667V10.5h-1.667V8.833Zm1.667 1.667h1.666v1.667h-1.666V10.5Z"
    />
  </Svg>
)
export default QRIcon
