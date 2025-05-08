// import * as React from "react"
// import Svg, { SvgProps, Path } from "react-native-svg"
// const StarIcon = (props: SvgProps) => (
//   <Svg
//     xmlns="http://www.w3.org/2000/svg"
//     width={16}
//     height={15}
//     fill="none"
//     {...props}
//   >
//     <Path
//       fill="#F6911E"
//       fillOpacity={0.8}
//       d="m8 0 1.796 5.528h5.813l-4.703 3.416 1.796 5.528L8 11.056l-4.702 3.416 1.796-5.528L.392 5.528h5.812L8 0Z"
//     />
//   </Svg>
// )
// export default StarIcon

import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const StarIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={10}
    fill="none"
    {...props}
  >
    <Path
      fill="#F6911E"
      fillOpacity={0.8}
      d="M5.924.61c-.342-.813-1.507-.813-1.849 0l-.877 2.083-2.276.18c-.887.07-1.247 1.166-.57 1.74L2.084 6.08l-.53 2.196c-.206.856.736 1.533 1.496 1.074L5 8.175l1.948 1.177c.76.459 1.703-.218 1.496-1.075l-.53-2.195 1.734-1.47c.677-.572.317-1.667-.57-1.738L6.8 2.694 5.924.61Z"
    />
  </Svg>
)
export default StarIcon
