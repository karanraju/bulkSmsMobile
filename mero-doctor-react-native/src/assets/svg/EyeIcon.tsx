import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const EyeIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      stroke="#1E1E1E"
      strokeOpacity={0.7}
      strokeWidth={1.5}
      d="M2.229 10.747C1.521 9.827 1.166 9.366 1.166 8c0-1.367.355-1.826 1.063-2.747 1.414-1.836 3.786-3.92 7.27-3.92 3.486 0 5.857 2.084 7.272 3.92.708.922 1.062 1.381 1.062 2.747 0 1.367-.354 1.826-1.062 2.747-1.415 1.837-3.786 3.92-7.271 3.92s-5.857-2.083-7.271-3.92Z"
      opacity={0.5}
    />
    <Path
      stroke="#1E1E1E"
      strokeOpacity={0.7}
      strokeWidth={1.5}
      d="M12 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
    />
  </Svg>
)
export default EyeIcon
