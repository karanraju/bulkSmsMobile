import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const DoctorIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    // height={props.height? props.height:16}
    // width={props.width? props.width: 15}
    height={30}
    width={30}
    fill="none"
    {...props}
  >
    <Path
      fill="#1E1E1E"
      fillOpacity={0.7}
      fillRule="evenodd"
      d="M11.598 4.254c0 1.442-.359 3.323-.91 3.038a3.334 3.334 0 0 1-6.505-.642c-.547-.957-1.264-2.875.58-4.37.034-.01.054-.1.084-.233C4.96 1.545 5.214.43 6.809.644c1.23.164 4.788.799 4.788 3.61Zm-1.586.91s-.189.55-.012 1.164a2.5 2.5 0 0 1-4.998.082c.06-.229.06-.617.06-1.048 0-.778-.002-1.696.355-2.07 2.495 1.662 4.595 1.872 4.595 1.872Z"
      clipRule="evenodd"
    />
    <Path
      fill="#1E1E1E"
      fillOpacity={0.7}
      d="M2.917 13.5c0-.45.238-.846.597-1.066a9.164 9.164 0 0 1-.25-1.854c-1.76.69-3.264 1.894-3.264 3.158V16h15v-2.262c0-1.21-1.38-2.365-3.04-3.067v.011a6.73 6.73 0 0 1-.035.827c-.025.26-.062.519-.107.741h.265a.416.416 0 0 1 .373.23l.417.834c.029.058.044.121.044.186v.833a.416.416 0 0 1-.417.417h-.833v-.833h.416v-.319l-.257-.515h-1.152l-.257.515v.319h.416v.833H10a.416.416 0 0 1-.417-.417V13.5c0-.065.015-.128.044-.186l.417-.834a.416.416 0 0 1 .373-.23h.548l.027-.12c.042-.196.079-.444.104-.701a5.95 5.95 0 0 0 .03-.723 2.058 2.058 0 0 0-.02-.26c-.01-.06-.018-.086-.02-.092v-.001h.001a9.19 9.19 0 0 0-.67-.181c-.21-.048-.427.24-.521.42H5l-.036-.07c-.088-.175-.197-.392-.38-.35-.161.036-.322.078-.482.124a2.914 2.914 0 0 0-.007.22c.002.23.024.512.06.797a8.152 8.152 0 0 0 .175.947 1.25 1.25 0 1 1-1.413 1.24Z"
    />
    <Path
      fill="#1E1E1E"
      fillOpacity={0.7}
      d="M4.583 13.5a.42.42 0 0 1-.416.423.42.42 0 0 1-.417-.423.42.42 0 0 1 .417-.423.42.42 0 0 1 .416.423Z"
    />
  </Svg>
)
export default DoctorIcon
