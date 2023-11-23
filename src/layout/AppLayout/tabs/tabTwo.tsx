import * as React from 'react';
import Svg, {Defs, LinearGradient, Path, Stop} from 'react-native-svg';
const TabTwo = ({color = null, ...props}) => (
  <Svg width={45} height={44} viewBox="0 0 45 44" fill="none" {...props}>
    <Path
      d="M15.2051 23.1309C15.2051 23.5508 15.5371 23.8633 15.9863 23.8633H21.7578L18.7305 31.9395C18.3105 33.043 19.4629 33.6289 20.1953 32.7305L29.502 21.3047C29.6875 21.0703 29.7852 20.8555 29.7852 20.6211C29.7852 20.1914 29.4531 19.8789 29.0039 19.8789H23.2324L26.2598 11.8125C26.6797 10.6992 25.5273 10.1133 24.7949 11.0117L15.4883 22.4473C15.3027 22.6719 15.2051 22.8867 15.2051 23.1309Z"
      fill="url(#paint0_linear_302_1233)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_302_1233"
        x1={22.5}
        y1={0}
        x2={22.5}
        y2={44}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor={color || '#2FB8FF'} />
        <Stop offset={1} stopColor={color || '#9EECD9'} />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default TabTwo;
