import React from 'react'
import { Svg, Path } from 'react-native-svg'

function SvgComponent(props: { width: number; height: number; color?: string; style?: object }) {
  return (
    <Svg viewBox="0 0 1024 1024" {...props}>
      <Path
        d="M456.70400000000006 696.422a248.371 248.371 0 10496.742 0 248.371 248.371 0 10-496.742 0zM165.581 236.493a62.566 62.566 0 10125.133 0 62.566 62.566 0 10-125.133 0zM807.168 180.634a33.74 33.74 0 1067.482 0 33.74 33.74 0 10-67.482 0z"
        fill={props.color || '#88DEF9'}
      />
      <Path
        d="M737.126 911.053H617.472c-11.315 0-20.48-9.165-20.48-20.48v-197.94c0-27.852-22.989-50.483-51.2-50.483h-38.656c-28.211 0-51.2 22.63-51.2 50.484v197.939c0 11.315-9.165 20.48-20.48 20.48H315.75c-50.79 0-92.16-41.011-92.16-91.443V566.118h-54.476c-20.89 0-39.476-12.39-47.36-31.641-7.988-19.354-3.687-40.55 11.212-55.296l357.325-354.355c19.917-19.764 52.378-19.764 72.346 0l103.475 102.656a20.475 20.475 0 01.102 28.979 20.475 20.475 0 01-28.979.102L533.76 153.907a10.445 10.445 0 00-14.643 0L161.792 508.211c-4.045 4.045-3.123 8.397-2.202 10.65.768 1.894 3.277 6.246 9.524 6.246h74.956c11.316 0 20.48 9.165 20.48 20.48v273.971c0 27.853 22.99 50.484 51.2 50.484h99.175v-177.46c0-50.432 41.37-91.443 92.16-91.443h38.656c50.79 0 92.16 41.011 92.16 91.443v177.46h99.174c28.211 0 51.2-22.63 51.2-50.484v-273.97c0-11.316 9.165-20.48 20.48-20.48h74.957c6.246 0 8.755-4.353 9.523-6.247.922-2.253 1.843-6.605-2.201-10.65L730.317 348.826a20.429 20.429 0 01-6.042-14.439l-.665-139.213c0-.102-.154-10.035-10.24-10.035h-59.341c-11.315 0-20.48-9.165-20.48-20.48s9.165-20.48 20.48-20.48h59.34c35.175 0 51.098 29.696 51.2 50.842l.615 130.713L919.91 479.181c14.9 14.745 19.2 35.942 11.213 55.296a51.031 51.031 0 01-47.36 31.641h-54.477V819.61c0 50.38-41.37 91.443-92.16 91.443z"
        fill="#55524F"
      />
    </Svg>
  )
}

export default SvgComponent
