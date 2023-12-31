import * as React from 'react';
import Svg, {Defs, LinearGradient, Path, Stop} from 'react-native-svg';
const LockIcon = ({...props}) => (
  <Svg width={14} height={21} viewBox="0 0 14 21" fill="none" {...props}>
    <Path
      d="M2.3418 20.0391H11.6484C13.1719 20.0391 13.9531 19.2383 13.9531 17.5879V10.5273C13.9531 9.07227 13.3281 8.27148 12.1172 8.11523V5.83008C12.1172 2.27539 9.74414 0.361328 7 0.361328C4.24609 0.361328 1.88281 2.27539 1.88281 5.83008V8.11523C0.662109 8.27148 0.0371094 9.0625 0.0371094 10.5273V17.5879C0.0371094 19.2383 0.818359 20.0391 2.3418 20.0391ZM3.92383 5.68359C3.92383 3.52539 5.31055 2.31445 7 2.31445C8.67969 2.31445 10.0859 3.52539 10.0859 5.68359L10.0762 8.0957H3.92383V5.68359Z"
      fill="url(#paint0_linear_456_129)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_456_129"
        x1={7}
        y1={-1.5}
        x2={7}
        y2={22.5}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#2FB8FF" />
        <Stop offset={1} stopColor="#9EECD9" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default LockIcon;
