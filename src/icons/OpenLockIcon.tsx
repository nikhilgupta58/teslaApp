import * as React from 'react';
import Svg, {Defs, LinearGradient, Path, Stop} from 'react-native-svg';
const OpenLockIcon = ({...props}) => (
  <Svg width={21} height={21} viewBox="0 0 21 21" fill="none" {...props}>
    <Path
      d="M2.58984 20.5098H11.8965C13.3711 20.5098 14.1328 19.7285 14.1328 18.1367V11.0664C14.1328 9.69922 13.5566 8.92773 12.4434 8.75195V6.27148C12.4434 4.09375 13.8203 2.87305 15.5098 2.87305C17.1992 2.87305 18.5859 4.09375 18.5859 6.27148V8.26367C18.5859 9.02539 19.0352 9.42578 19.6113 9.42578C20.1875 9.42578 20.6367 9.04492 20.6367 8.26367V6.4375C20.6367 2.7168 18.127 0.910156 15.5098 0.910156C12.8926 0.910156 10.3926 2.7168 10.3926 6.4375V8.71289H2.58984C1.11523 8.71289 0.353516 9.48438 0.353516 11.0664V18.1367C0.353516 19.7285 1.11523 20.5098 2.58984 20.5098Z"
      fill="url(#paint0_linear_302_2059)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_302_2059"
        x1={10.5}
        y1={-1}
        x2={10.5}
        y2={23}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#2FB8FF" />
        <Stop offset={1} stopColor="#9EECD9" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default OpenLockIcon;
