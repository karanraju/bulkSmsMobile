// import * as React from "react"
// import Svg, { SvgProps, Path } from "react-native-svg"
// const VitalsIcon = (props: SvgProps) => (
//   <Svg
//     xmlns="http://www.w3.org/2000/svg"
//     width={19}
//     height={20}
//     fill="none"
//     {...props}
//   >
//     <Path
//       fill={props.color? props.color : "#1E1E1E"}
//       fillOpacity={0.7}
//       d="M16.75 2h-4.18c-.42-1.16-1.52-2-2.82-2-1.3 0-2.4.84-2.82 2H2.75a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Zm-7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm-7 12h3.11l1.51-2.85.76 5.77 3.69-4.71L13.64 14h3.11v4h-14v-4Zm14-1.54h-2.47l-2.6-2.6-2.49 3.19-.94-6.97-3.33 6.38H2.75V4h2v1h10V4h2v8.46Z"
//     />
//   </Svg>
// )
// export default VitalsIcon


import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const VitalsIcon = (props: SvgProps) => {
  // Get dimensions from props or use defaults
  const width = props.width || 19;
  const height = props.height || 20;
  
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 19 20"
      fill="none"
      {...props}
    >
      <Path
        fill={props.color || "#1E1E1E"}
        // fillOpacity={0.7}
        d="M16.75 2h-4.18c-.42-1.16-1.52-2-2.82-2-1.3 0-2.4.84-2.82 2H2.75a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Zm-7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm-7 12h3.11l1.51-2.85.76 5.77 3.69-4.71L13.64 14h3.11v4h-14v-4Zm14-1.54h-2.47l-2.6-2.6-2.49 3.19-.94-6.97-3.33 6.38H2.75V4h2v1h10V4h2v8.46Z"
      />
    </Svg>
  );
};

export default VitalsIcon;