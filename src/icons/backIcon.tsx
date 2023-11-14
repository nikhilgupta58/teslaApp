import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function BackIcon({...props}) {
  return (
    <Svg width={10} height={15} viewBox="0 0 10 15" fill="none" {...props}>
      <Path
        d="M.53 7.507c0 .34.124.622.398.888l6.392 6.25c.207.216.473.324.78.324.623 0 1.12-.498 1.12-1.12 0-.316-.124-.59-.348-.814L3.194 7.5l5.678-5.52c.224-.225.349-.507.349-.814C9.22.542 8.723.053 8.1.053c-.316 0-.574.1-.781.315L.928 6.618c-.274.266-.39.548-.398.889z"
        fill="#EBEBF5"
        fillOpacity={0.6}
      />
    </Svg>
  );
}

export default BackIcon;
