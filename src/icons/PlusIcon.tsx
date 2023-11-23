import * as React from 'react';
import Svg, {Defs, LinearGradient, Path, Stop} from 'react-native-svg';
const PlusIcon = ({...props}) => (
  <Svg width={31} height={31} viewBox="0 0 31 31" fill="none" {...props}>
    <Path
      d="M0.628906 15.3087C0.628906 16.5568 1.66602 17.5763 2.89648 17.5763H13.2324V27.9122C13.2324 29.1603 14.252 30.1798 15.5 30.1798C16.748 30.1798 17.7676 29.1603 17.7676 27.9122V17.5763H28.1035C29.3516 17.5763 30.3711 16.5568 30.3711 15.3087C30.3711 14.0607 29.3516 13.0411 28.1035 13.0411H17.7676V2.7052C17.7676 1.47473 16.748 0.437622 15.5 0.437622C14.252 0.437622 13.2324 1.47473 13.2324 2.7052V13.0411H2.89648C1.66602 13.0411 0.628906 14.0607 0.628906 15.3087Z"
      fill="url(#paint0_linear_333_78)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_333_78"
        x1={15.5}
        y1={-5.99988}
        x2={15.5}
        y2={37.0001}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#2FB8FF" />
        <Stop offset={1} stopColor="#9EECD9" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default PlusIcon;
