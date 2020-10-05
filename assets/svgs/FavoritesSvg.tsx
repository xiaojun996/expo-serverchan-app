import React from 'react'
import { Svg, Path } from 'react-native-svg'

function SvgComponent(props: { width: number; height: number; color?: string; style?: object }) {
  return (
    <Svg viewBox="0 0 1024 1024" {...props}>
      <Path
        d="M702.31 774.707l-187.955-77.414a26.086 26.086 0 00-20.019 0l-187.955 77.414c-17.306 7.117-36.352-5.58-36.352-24.32V250.522c0-14.541 11.776-26.317 26.317-26.317h416c14.54 0 26.316 11.776 26.316 26.317v499.865c0 18.74-18.995 31.488-36.352 24.32z"
        fill={props.color || '#88def9'}
      />
      <Path
        d="M242.125 879.462c-10.445 0-20.839-3.072-29.85-9.062a53.555 53.555 0 01-23.808-44.595V195.584c0-29.594 24.064-53.658 53.658-53.658h524.441c29.594 0 53.658 24.064 53.658 53.658v630.17a53.627 53.627 0 01-23.808 44.595 53.586 53.586 0 01-50.278 5.017L509.184 777.78a12.673 12.673 0 00-9.677 0l-236.953 97.587c-6.605 2.714-13.517 4.096-20.43 4.096zm0-696.576a12.698 12.698 0 00-12.698 12.698v630.17c0 6.092 3.943 9.42 5.632 10.547 1.69 1.126 6.247 3.533 11.879 1.177l236.953-97.587a53.3 53.3 0 0140.858 0l236.953 97.587c5.632 2.356 10.19-.05 11.879-1.177 1.69-1.127 5.632-4.455 5.632-10.547v-630.17a12.698 12.698 0 00-12.698-12.698h-524.39z"
        fill="#55524F"
      />
      <Path
        d="M412.262 633.651a30.759 30.759 0 01-18.124-5.888c-10.855-7.885-15.36-21.709-11.213-34.457l28.262-86.938-73.933-53.76c-10.854-7.885-15.36-21.709-11.212-34.458a30.735 30.735 0 0129.286-21.299h91.392l28.262-86.937c4.148-12.75 15.924-21.3 29.338-21.3s25.19 8.55 29.338 21.3l28.262 86.937h91.392c13.414 0 25.19 8.55 29.338 21.3 4.147 12.748-.359 26.572-11.213 34.457l-73.984 53.76 28.262 86.938c4.147 12.748-.358 26.572-11.213 34.457a30.73 30.73 0 01-36.25 0l-73.932-53.76-73.933 53.709c-5.427 3.942-11.776 5.94-18.125 5.94zm92.058-103.014c6.349 0 12.698 1.945 18.125 5.939l54.681 39.731L556.236 512c-4.146-12.749.36-26.573 11.214-34.458l54.681-39.73h-67.584c-13.414 0-25.19-8.551-29.286-21.3l-20.941-64.256-20.89 64.256a30.75 30.75 0 01-29.337 21.3h-67.584l54.681 39.73c10.855 7.885 15.36 21.71 11.213 34.458l-20.89 64.256 54.682-39.731c5.427-3.891 11.776-5.888 18.125-5.888zm148.992-92.826zm-158.618-115.2z"
        fill="#55524F"
      />
    </Svg>
  )
}

export default SvgComponent
