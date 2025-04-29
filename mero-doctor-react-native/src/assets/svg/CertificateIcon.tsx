import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const CertificateIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={22}
    fill="none"
    {...props}
  >
    <Path
      stroke={props.color || "#1E1E1E"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.7}
      strokeWidth={1.5}
      d="M12.5 1.5V3c0 1.414 0 2.121.44 2.56.438.44 1.145.44 2.56.44H17"
    />
    <Path
      stroke={props.color || "#1E1E1E"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.7}
      strokeWidth={1.5}
      d="M5.5 10h8m-8 3h8m-8 3h4.17M1.5 15V7c0-2.828 0-4.243.879-5.121C3.257 1 4.672 1 7.5 1h4.172c.408 0 .613 0 .797.076.183.076.328.22.617.51l3.828 3.828c.29.29.434.434.51.618.076.183.076.388.076.796V15c0 2.828 0 4.243-.879 5.121C15.743 21 14.328 21 11.5 21h-4c-2.828 0-4.243 0-5.121-.879C1.5 19.243 1.5 17.828 1.5 15Z"
    />
  </Svg>
)
export default CertificateIcon
