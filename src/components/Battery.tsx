import * as React from 'react';
import Svg, {
  Defs,
  G,
  LinearGradient,
  Mask,
  Path,
  Rect,
  Stop,
} from 'react-native-svg';
import {convertToNumber} from '../utils';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const Battery = ({...props}) => {
  const value = 80;
  const calcD1 = convertToNumber(value, 6, 284);
  const calcD2 = convertToNumber(value, 16.5, 273.5);
  const calcD3 = convertToNumber(value, 17, 273.5);
  const calcH1 = convertToNumber(value, 9.1, 281.3);

  const d1 = `M17.9965 14.5H163.552L${calcD1} 36.4381V125.345L5.77429 126.5V38.7474L17.9965 14.5Z`;
  const d2 = `M16.5 14.5H${calcD2}V33.5V87.5H16.5V35.5V14.5Z`;
  const d3 = `M8.5 111.403V124.5C8.5 125.605 9.39543 126.5 10.5 126.5H${calcH1}V111.383C${calcH1} 111.13 176.452 110.879 176.359 110.644L${calcD3} 88.7618C167.365 88 166.629 87.5 165.809 87.5H19.7109C18.9059 87.5 18.1794 87.9826 17.8673 88.7247L8.65638 110.628C8.55317 110.874 8.5 111.137 8.5 111.403Z`;
  // d="M8.5 111.403V124.5C8.5 125.605 9.39543 126.5 10.5 126.5H176.5V111.383C176.5 111.13 176.452 110.879 176.359 110.644L167.668 88.7618C167.365 88 166.629 87.5 165.809 87.5H19.7109C18.9059 87.5 18.1794 87.9826 17.8673 88.7247L8.65638 110.628C8.55317 110.874 8.5 111.137 8.5 111.403Z"

  return (
    <Svg width={288} height={135} viewBox="0 0 288 135" fill="none" {...props}>
      <G filter="url(#filter0_bi_301_656)">
        <Path
          d="M8.513 111.403L8.93756 124.564C8.97237 125.643 9.85705 126.5 10.9365 126.5H279.5C280.605 126.5 281.5 125.605 281.5 124.5V111.351C281.5 111.119 281.46 110.888 281.381 110.67L273.477 88.8197C273.191 88.0277 272.439 87.5 271.597 87.5H18.8757C18.0471 87.5 17.3043 88.0109 17.008 88.7847L8.64425 110.623C8.54904 110.872 8.50442 111.137 8.513 111.403Z"
          fill="white"
          fillOpacity={0.2}
          //@ts-ignore
          style={{
            mixBlendMode: 'overlay',
          }}
        />
        <Path
          d="M8.513 111.403L8.93756 124.564C8.97237 125.643 9.85705 126.5 10.9365 126.5H279.5C280.605 126.5 281.5 125.605 281.5 124.5V111.351C281.5 111.119 281.46 110.888 281.381 110.67L273.477 88.8197C273.191 88.0277 272.439 87.5 271.597 87.5H18.8757C18.0471 87.5 17.3043 88.0109 17.008 88.7847L8.64425 110.623C8.54904 110.872 8.50442 111.137 8.513 111.403Z"
          stroke="url(#paint0_linear_301_656)"
          //@ts-ignore
          style={{
            mixBlendMode: 'overlay',
          }}
        />
      </G>
      <G filter="url(#filter1_f_301_656)">
        <Path
          d="M7.5 110.5H281.5V115.5H7.5V110.5Z"
          fill="black"
          fillOpacity={0.17}
          //@ts-ignore
          style={{
            mixBlendMode: 'overlay',
          }}
        />
      </G>
      <G filter="url(#filter2_i_301_656)">
        <Path d={d3} fill="url(#paint1_linear_301_656)" />
      </G>
      <G filter="url(#filter3_if_301_656)">
        <Path d={d3} fill="url(#paint2_linear_301_656)" />
      </G>
      <Mask
        id="mask0_301_656"
        //@ts-ignore
        style={{
          maskType: 'alpha',
        }}
        maskUnits="userSpaceOnUse"
        x={8}
        y={87}
        width={168}
        height={40}>
        <Path
          d="M8.53433 111.365L8.0731 124.429C8.03315 125.561 8.93961 126.5 10.0718 126.5H174C175.105 126.5 176 125.605 176 124.5V111.381C176 111.129 175.952 110.88 175.86 110.645L167.197 88.7638C166.895 88.001 166.158 87.5 165.338 87.5H19.7277C18.9218 87.5 18.1947 87.9836 17.8831 88.7269L8.68857 110.663C8.59512 110.886 8.54286 111.124 8.53433 111.365Z"
          fill="url(#paint3_linear_301_656)"
        />
      </Mask>
      <G mask="url(#mask0_301_656)">
        <G filter="url(#filter4_f_301_656)">
          <Rect
            x={0.5}
            y={110.5}
            width={292}
            height={5}
            fill="black"
            fillOpacity={0.04}
            //@ts-ignore
            style={{
              mixBlendMode: 'overlay',
            }}
          />
        </G>
      </G>
      <Path d={d1} fill="url(#paint4_linear_301_656)" fillOpacity={0.2} />
      <G filter="url(#filter5_f_301_656)">
        <Path d={d2} fill="url(#paint5_linear_301_656)" fillOpacity={0.3} />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_301_656"
          x1={145}
          y1={87.5}
          x2={145}
          y2={126.5}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="white" stopOpacity={0} />
          <Stop offset={1} stopColor="white" stopOpacity={0.6} />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_301_656"
          x1={92.5}
          y1={87.5}
          x2={92.5}
          y2={126.5}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#2FB8FF" />
          <Stop offset={1} stopColor="#9EECD9" />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_301_656"
          x1={92.5}
          y1={87.5}
          x2={92.5}
          y2={126.5}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#2FB8FF" />
          <Stop offset={1} stopColor="#9EECD9" />
        </LinearGradient>
        <LinearGradient
          id="paint3_linear_301_656"
          x1={157.941}
          y1={87.5}
          x2={157.941}
          y2={126.5}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#76AA6E" />
          <Stop offset={0.346154} stopColor="#204A25" />
          <Stop offset={0.628205} stopColor="#1E4B20" />
          <Stop offset={1} stopColor="#3B8527" />
        </LinearGradient>
        <LinearGradient
          id="paint4_linear_301_656"
          x1={92.4195}
          y1={9.78421}
          x2={91.2428}
          y2={144.973}
          gradientUnits="userSpaceOnUse">
          <Stop offset={0.195856} stopColor="#2FB8FF" stopOpacity={0} />
          <Stop offset={0.546579} stopColor="#4BC6F5" stopOpacity={0.4} />
          <Stop offset={0.83609} stopColor="#6BD4EB" stopOpacity={0.7} />
          <Stop offset={1} stopColor="#85E0E1" />
        </LinearGradient>
        <LinearGradient
          id="paint5_linear_301_656"
          x1={76.6765}
          y1={18.9401}
          x2={76.5603}
          y2={103.987}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#EBEEFE" stopOpacity={0} />
          <Stop offset={0.409309} stopColor="#8DE1EB" stopOpacity={0.5} />
          <Stop offset={0.674333} stopColor="#8FB6E6" stopOpacity={0.7} />
          <Stop offset={0.895165} stopColor="#5DAAB3" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};
export default Battery;
