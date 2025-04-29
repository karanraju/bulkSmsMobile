import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const CalendarHospital = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={15}
    fill="none"
    {...props}>
    <Path
      fill="#1E1E1E"
      fillOpacity={0.7}
      fillRule="evenodd"
      d="M3.554.6a.5.5 0 0 1 .5.5v.977h4.423a.5.5 0 0 1 0 1H4.054v.977a.5.5 0 1 1-1 0V1.1a.5.5 0 0 1 .5-.5Zm6.892 0a.5.5 0 0 1 .5.5v.977h1.47A1.485 1.485 0 0 1 13.9 3.562v9.354a1.485 1.485 0 0 1-1.485 1.484H1.585A1.485 1.485 0 0 1 .1 12.915V3.563a1.485 1.485 0 0 1 1.485-1.485.5.5 0 1 1 0 1 .485.485 0 0 0-.485.485v9.354a.485.485 0 0 0 .485.484h10.83a.485.485 0 0 0 .485-.485V3.563a.485.485 0 0 0-.485-.485h-1.469v.977a.5.5 0 0 1-1 0V1.1a.5.5 0 0 1 .5-.5Z"
      clipRule="evenodd"
    />
    <Path
      fill="#1E1E1E"
      fillOpacity={0.7}
      fillRule="evenodd"
      d="M5.489 4.892a.997.997 0 0 1 .705-.292H7.81a.997.997 0 0 1 .998.997v.898h.896a.997.997 0 0 1 .997.997v1.616a.997.997 0 0 1-.997.997h-.897v.898a.997.997 0 0 1-.998.997H6.193a.997.997 0 0 1-.997-.997v-.898h-.899a.997.997 0 0 1-.997-.997V7.492a.997.997 0 0 1 .997-.997h.9v-.898c0-.264.105-.518.292-.705Zm.708.708v1.395a.5.5 0 0 1-.5.5H4.3v1.61h1.396a.5.5 0 0 1 .5.5V11h1.61V9.605a.5.5 0 0 1 .5-.5H9.7v-1.61H8.307a.5.5 0 0 1-.5-.5V5.6h-1.61Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default CalendarHospital;
