import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const GrowIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={29}
    height={18}
    fill="none"
    {...props}>
    <Path
      fill="#00B3A6"
      fillOpacity={0.1}
      d="M.5 9a9 9 0 0 1 9-9h10a9 9 0 1 1 0 18h-10a9 9 0 0 1-9-9Z"
    />
    <Path
      fill="#00B3A6"
      d="M8.086 14.72a.5.5 0 1 0 .828.56l-.828-.56ZM20.5 3l-4.967 2.943 5.032 2.83L20.5 3Zm-4.818 8.566.435.245-.435-.245Zm-3.89-1.444-.414-.28.415.28ZM8.915 15.28l3.293-4.878-.829-.56-3.292 4.878.828.56Zm4.189-4.734.263.936.963-.27-.263-.937-.963.271Zm3.014 1.265 2.613-4.644-.872-.49-2.612 4.644.871.49Zm-2.75-.33c.36 1.286 2.096 1.494 2.75.33l-.871-.49a.5.5 0 0 1-.917-.11l-.963.27Zm-1.16-1.08a.5.5 0 0 1 .896.145l.963-.27c-.346-1.23-1.973-1.493-2.688-.434l.83.56Z"
    />
  </Svg>
);
export default GrowIcon;
