// import React from 'react';
// import {Svg, Path} from 'react-native-svg';

// const HomeIcon: React.FC<any> = ({
//   width,
//   height,
//   fill = '#FF0000',
//   xmlns = 'http://www.w3.org/2000/svg',
// }) => {
//   return (
//     <Svg
//       width={width}
//       height={height}
//       viewBox="0 0 25 24"
//       fill="none"
//       xmlns={xmlns}>
//       <Path
//         fill-rule="evenodd"
//         clip-rule="evenodd"
//         d="M11.8861 1.21065C12.2472 0.929784 12.7528 0.929784 13.1139 1.21065L22.1139 8.21065C22.3575 8.4001 22.5 8.69141 22.5 9V20C22.5 20.7957 22.1839 21.5587 21.6213 22.1213C21.0587 22.6839 20.2957 23 19.5 23H5.5C4.70435 23 3.94129 22.6839 3.37868 22.1213C2.81607 21.5587 2.5 20.7957 2.5 20V9C2.5 8.69141 2.64247 8.4001 2.88606 8.21065L11.8861 1.21065ZM4.5 9.48908V20C4.5 20.2652 4.60536 20.5196 4.79289 20.7071C4.98043 20.8946 5.23478 21 5.5 21H19.5C19.7652 21 20.0196 20.8946 20.2071 20.7071C20.3946 20.5196 20.5 20.2652 20.5 20V9.48908L12.5 3.26686L4.5 9.48908Z"
//         fill="#FF0000"
//       />
//       <Path
//         fill-rule="evenodd"
//         clip-rule="evenodd"
//         d="M8.5 12C8.5 11.4477 8.94772 11 9.5 11H15.5C16.0523 11 16.5 11.4477 16.5 12V22C16.5 22.5523 16.0523 23 15.5 23C14.9477 23 14.5 22.5523 14.5 22V13H10.5V22C10.5 22.5523 10.0523 23 9.5 23C8.94772 23 8.5 22.5523 8.5 22V12Z"
//         fill="#FF0000"
//       />
//     </Svg>
//   );
// };

// export default HomeIcon;

import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <Path
      fill={props.color?props.color:"#1E1E1E"}
      // props.color?:props.color:"#1E1E1E"
      fillOpacity={0.7}
      fillRule="evenodd"
      d="M11.886 1.71a1 1 0 0 1 1.228 0l9 7a1 1 0 0 1 .386.79v11a3 3 0 0 1-3 3h-14a3 3 0 0 1-3-3v-11a1 1 0 0 1 .386-.79l9-7ZM4.5 9.99V20.5a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9.99l-8-6.223-8 6.222Z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color?props.color:"#1E1E1E"}
      fillOpacity={0.7}
      fillRule="evenodd"
      d="M8.5 12.5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0v-9h-4v9a1 1 0 1 1-2 0v-10Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default SvgComponent
