import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const LabIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke={props.color? props.color : "#1E1E1E"}
      strokeLinecap="round"
      strokeLinejoin="round"
      // strokeOpacity={0.7}
      strokeWidth={2}
      d="M6.297 9.375a3 3 0 0 0 2.121-.879m-2.121.879a3 3 0 0 1-2.121-.879m2.12.879v2.25m2.122-3.129a3 3 0 0 0 .879-2.121m-.879 2.121 1.59 1.591m-.711-3.712a3 3 0 0 0-.879-2.121m.879 2.121h2.25M8.418 4.254a3 3 0 0 0-2.121-.879m2.121.879 1.59-1.591m-3.711.712a3 3 0 0 0-2.121.879m2.12-.879v-2.25m-2.12 3.129a3 3 0 0 0-.88 2.121m.88-2.121L2.585 2.663m.712 3.712a3 3 0 0 0 .879 2.121m-.88-2.121h-2.25m3.13 2.121-1.591 1.591m3.212-8.962h1m2.859 1.184.707.707m1.184 2.859v1m-1.184 2.859-.707.707m-2.86 1.184h-1m-2.858-1.184-.707-.707M1.047 6.875v-1M2.23 3.016l.707-.707M18.396 9.1a6.135 6.135 0 0 1 .315 9.07 6.4 6.4 0 0 1-8.941 0 6.2 6.2 0 0 1-1.558-2.52"
    />
    <Path
      stroke={props.color? props.color : "#1E1E1E"}
      strokeLinecap="round"
      strokeLinejoin="round"
      // strokeOpacity={0.7}
      strokeWidth={2}
      d="M16.4 11.054a.913.913 0 0 1-1.276 0L13.85 9.8a.877.877 0 0 1 0-1.254l3.832-3.764a.915.915 0 0 1 1.277 0l1.277 1.255a.873.873 0 0 1 0 1.254L16.4 11.054Z"
    />
    <Path
      stroke={props.color? props.color : "#1E1E1E"}
      strokeLinecap="round"
      strokeLinejoin="round"
      // strokeOpacity={0.7}
      strokeWidth={1.5}
      d="m19.418 5.236 2.59-2.592m0 0-1.445-1.445m1.445 1.445 1.445 1.445M6.047 15.65h5.058m-4.27 7.225h13.728m-6.503-2.89v2.89"
    />
  </Svg>
)
export default LabIcon
