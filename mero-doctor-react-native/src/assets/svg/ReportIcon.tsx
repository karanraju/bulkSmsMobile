import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ReportIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      stroke="#1E1E1E"
      strokeOpacity={0.7}
      strokeWidth={1.5}
      d="M1.333 7.84c0-3.143 0-4.714.976-5.691.978-.976 2.548-.976 5.69-.976 3.144 0 4.715 0 5.69.976.978.977.978 2.548.978 5.69 0 3.143 0 4.714-.977 5.69-.975.977-2.547.977-5.69.977-3.143 0-4.714 0-5.69-.976-.977-.976-.977-2.548-.977-5.69Z"
    />
    <Path
      stroke="#1E1E1E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.7}
      strokeWidth={1.5}
      d="m4.667 9.173 1.528-1.53a.667.667 0 0 1 .943 0l1.057 1.058a.667.667 0 0 0 .943 0l2.195-2.195m0 0v1.667m0-1.667H9.666"
    />
  </Svg>
)
export default ReportIcon
