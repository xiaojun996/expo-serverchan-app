import React from 'react'
import { Svg, Path } from 'react-native-svg'

function SvgComponent(props: { width: number; height: number; color?: string }) {
  return (
    <Svg viewBox="0 0 1024 1024" {...props}>
      <Path
        d="M322.71400000000006 407.5a174.643 174.643 0 10349.286 0 174.643 174.643 0 10-349.286 0z"
        fill={props.color || '#88DEF9'}
      />
      <Path
        d="M497.357 599.45c-122.778 0-222.669-99.892-222.669-222.67s99.891-222.617 222.669-222.617 222.669 99.891 222.669 222.618-99.943 222.669-222.67 222.669zm0-404.327c-100.199 0-181.709 81.51-181.709 181.658s81.51 181.709 181.709 181.709 181.709-81.51 181.709-181.71-81.562-181.657-181.71-181.657z"
        fill="#55524F"
      />
      <Path
        d="M497.357 502.682c-36.506 0-70.759-14.183-96.563-39.988a20.521 20.521 0 010-28.979 20.521 20.521 0 0128.979 0c18.073 18.074 42.086 28.007 67.635 28.007s49.562-9.933 67.635-28.007a20.521 20.521 0 0128.98 0 20.521 20.521 0 010 28.98c-25.908 25.804-60.212 39.987-96.666 39.987z"
        fill="#55524F"
      />
      <Path
        d="M714.7 628.838c55.655 29.133 92.57 60.928 112.897 91.75 21.197 32.154-7.936 70.606-53.914 70.606H235.162c-44.8 0-74.804-37.07-55.04-68.813 36.352-58.317 121.241-132.608 318.003-132.608 0 .051 119.04-11.981 216.576 39.065z"
        fill={props.color || '#88DEF9'}
      />
      <Path
        d="M787.149 867.686H221.696c-29.491 0-56.371-14.95-71.987-40.038-15.411-24.73-16.947-55.04-4.199-81.05 42.138-85.708 137.472-187.904 352.308-187.904 11.315 0 20.48 9.165 20.48 20.48s-9.165 20.48-20.48 20.48c-193.741 0-278.58 89.754-315.546 165.018-6.605 13.414-5.786 28.518 2.202 41.318 8.09 12.954 22.016 20.736 37.222 20.736H787.2c15.565 0 29.082-7.577 37.12-20.838 8.038-13.21 8.55-29.389 1.331-43.213-25.037-48.077-62.208-86.374-110.49-113.715a20.48 20.48 0 0120.173-35.635c55.245 31.334 97.844 75.213 126.618 130.457 13.875 26.624 12.851 57.805-2.662 83.354-15.412 25.344-42.343 40.55-72.141 40.55z"
        fill="#55524F"
      />
    </Svg>
  )
}

export default SvgComponent
