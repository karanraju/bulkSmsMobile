// import * as React from "react"
// import Svg, { SvgProps, Path } from "react-native-svg"
// const RevenueIcon = (props: SvgProps) => (
//   <Svg
//     xmlns="http://www.w3.org/2000/svg"
//     width={23}
//     height={23}
//     fill="none"
//     {...props}
//   >
//     <Path
//       fill={props.color?props.color:"#1E1E1E"}
//       strokeOpacity={0.7}
//       strokeWidth={1.5}
//       d="M1.5 11.5c0-4.714 0-7.071 1.464-8.536C4.43 1.5 6.786 1.5 11.5 1.5c4.714 0 7.071 0 8.535 1.464C21.5 4.43 21.5 6.786 21.5 11.5c0 4.714 0 7.071-1.465 8.535C18.572 21.5 16.214 21.5 11.5 21.5s-7.071 0-8.536-1.465C1.5 18.572 1.5 16.214 1.5 11.5Z"
//     />
//     <Path
//       fill={props.color?props.color:"#1E1E1E"}
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeOpacity={0.7}
//       strokeWidth={1.5}
//       d="m6.5 13.5 2.293-2.293a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 0 1.414 0L16.5 9.5m0 0V12m0-2.5H14"
//     />
//   </Svg>
// )
// export default RevenueIcon
import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={23}
    fill="none"
    {...props}
  >
    <Path
      stroke={props.color?props.color:"#1E1E1E"}
      strokeOpacity={0.7}
      strokeWidth={1.5}
      d="M1.5 11.5c0-4.714 0-7.071 1.464-8.536C4.43 1.5 6.786 1.5 11.5 1.5c4.714 0 7.071 0 8.535 1.464C21.5 4.43 21.5 6.786 21.5 11.5c0 4.714 0 7.071-1.465 8.535C18.572 21.5 16.214 21.5 11.5 21.5s-7.071 0-8.536-1.465C1.5 18.572 1.5 16.214 1.5 11.5Z"
    />
    <Path
      stroke={props.color?props.color:"#1E1E1E"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.7}
      strokeWidth={1.5}
      d="m6.5 13.5 2.293-2.293a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 0 1.414 0L16.5 9.5m0 0V12m0-2.5H14"
    />
  </Svg>
)
export default SvgComponent
