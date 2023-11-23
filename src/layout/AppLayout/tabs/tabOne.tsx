import * as React from 'react';
import Svg, {Defs, LinearGradient, Path, Stop} from 'react-native-svg';
const TabOne = ({color = null, ...props}: any) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M7 5H17L22 11.5V19H19L18 17H6L5 19H2V11.5L7 5Z"
      stroke="url(#paint0_linear_336_145)"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M17 15H7L6 17H18L17 15Z"
      stroke="url(#paint1_linear_336_145)"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2 9H4L6 12H18L20 9H22"
      stroke="url(#paint2_linear_336_145)"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_336_145"
        x1={12}
        y1={5}
        x2={12}
        y2={19}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor={color || '#2FB8FF'} />
        <Stop offset={1} stopColor={color || '#9EECD9'} />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_336_145"
        x1={12}
        y1={15}
        x2={12}
        y2={17}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor={color || '#2FB8FF'} />
        <Stop offset={1} stopColor={color || '#9EECD9'} />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_336_145"
        x1={12}
        y1={9}
        x2={12}
        y2={12}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor={color || '#2FB8FF'} />
        <Stop offset={1} stopColor={color || '#9EECD9'} />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default TabOne;
