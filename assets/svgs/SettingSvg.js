import React from 'react'
import { Svg, Path } from 'react-native-svg'

function SvgComponent(props) {
  return (
    <Svg className="prefix__icon" viewBox="0 0 1024 1024" {...props}>
      <Path
        d="M791.245 469.862c-1.075-7.936-6.963-14.13-14.643-16.384-28.007-8.14-48.487-33.945-48.487-64.563 0-11.776 3.021-22.886 8.346-32.512 3.891-7.065 3.584-15.718-1.28-22.118-15.36-20.224-33.383-38.349-53.453-53.914-6.451-4.966-15.206-5.325-22.323-1.331a67.02 67.02 0 01-32.666 8.5c-30.976 0-56.985-20.942-64.819-49.409-2.15-7.782-8.397-13.875-16.384-14.95-13.005-1.792-26.214-2.765-39.731-2.765-12.442 0-24.679.82-36.66 2.406-8.038 1.024-14.284 7.117-16.383 14.9-7.68 28.723-33.792 49.868-64.922 49.868-12.442 0-24.013-3.379-33.997-9.267-7.117-4.198-16.025-3.942-22.579 1.024a289.536 289.536 0 00-53.146 52.736c-5.12 6.605-5.324 15.565-1.075 22.733 5.94 9.984 9.37 21.658 9.37 34.15 0 31.488-21.658 57.908-50.944 65.178-7.936 1.997-14.183 8.243-15.258 16.384a288.9 288.9 0 00-2.509 37.888 288.9 288.9 0 002.51 37.888c1.074 8.14 7.27 14.387 15.257 16.384 29.235 7.27 50.944 33.69 50.944 65.178 0 12.492-3.43 24.166-9.37 34.15-4.25 7.168-4.045 16.18 1.075 22.733 15.36 19.763 33.23 37.53 53.146 52.736 6.554 5.017 15.462 5.222 22.58 1.024a66.722 66.722 0 0133.996-9.267c31.13 0 57.242 21.145 64.922 49.868 2.099 7.834 8.345 13.876 16.384 14.9 12.032 1.536 24.268 2.406 36.659 2.406 13.465 0 26.726-.973 39.731-2.765 8.038-1.126 14.234-7.168 16.384-14.95 7.782-28.467 33.843-49.408 64.82-49.408 11.878 0 22.988 3.072 32.665 8.499 7.117 3.994 15.872 3.635 22.323-1.331 20.122-15.514 38.093-33.69 53.453-53.914 4.864-6.4 5.222-15.053 1.28-22.118a67.026 67.026 0 01-8.346-32.512c0-30.618 20.48-56.474 48.487-64.563 7.68-2.253 13.619-8.448 14.643-16.384a289.275 289.275 0 002.56-38.452c0-13.21-.87-26.06-2.56-38.656zM505.856 637.901c-71.526 0-129.536-58.01-129.536-129.536 0-71.578 58.01-129.536 129.536-129.536 71.578 0 129.536 58.01 129.536 129.536S577.382 637.9 505.856 637.9z"
        fill="#96e9ff"
      />
      <Path
        d="M505.805 661.146c-84.224 0-152.781-68.557-152.781-152.781s68.506-152.781 152.78-152.781 152.782 68.557 152.782 152.78-68.506 152.782-152.781 152.782zm0-264.602c-61.645 0-111.821 50.176-111.821 111.82s50.176 111.822 111.82 111.822 111.822-50.176 111.822-111.821S567.5 396.544 505.805 396.544z"
        fill="#55524F"
      />
      <Path
        d="M505.805 885.197c-21.965 0-44.39-1.997-66.611-5.99a20.47 20.47 0 01-16.845-18.74c-2.253-32.717-29.696-58.368-62.515-58.368-15.258 0-30.004 5.632-41.524 15.821a20.49 20.49 0 01-25.139 1.587 378.42 378.42 0 01-96.87-96.153 20.495 20.495 0 011.536-25.344 62.72 62.72 0 0016.077-41.78c0-33.433-26.164-60.928-59.597-62.566a20.547 20.547 0 01-19.149-16.742c-4.147-22.528-6.246-45.568-6.246-68.506s2.099-45.926 6.246-68.506a20.45 20.45 0 0119.149-16.742c33.433-1.638 59.597-29.133 59.597-62.566 0-15.412-5.684-30.208-16.077-41.78a20.429 20.429 0 01-1.536-25.344 376.791 376.791 0 0196.87-96.153 20.419 20.419 0 0125.14 1.587c11.52 10.189 26.265 15.82 41.523 15.82 32.819 0 60.262-25.65 62.515-58.367a20.47 20.47 0 0116.845-18.74c45.926-8.191 91.699-7.884 137.164.717 9.114 1.741 15.924 9.319 16.59 18.535 2.508 32.46 29.951 57.907 62.463 57.907 14.695 0 29.03-5.222 40.346-14.694a20.531 20.531 0 0124.883-1.127 378.399 378.399 0 0196.358 97.075 20.531 20.531 0 01-1.126 24.679 62.776 62.776 0 00-14.438 40.038 62.464 62.464 0 0056.78 62.464c9.114.87 16.59 7.68 18.228 16.691 4.147 22.58 6.297 45.67 6.297 68.66s-2.099 46.08-6.297 68.659a20.495 20.495 0 01-18.228 16.691c-32.358 3.02-56.78 29.9-56.78 62.464 0 14.592 5.12 28.826 14.438 40.038a20.531 20.531 0 011.126 24.679 378.399 378.399 0 01-96.358 97.075 20.531 20.531 0 01-24.883-1.126c-11.315-9.472-25.6-14.695-40.346-14.695-32.563 0-60.006 25.447-62.464 57.907a20.46 20.46 0 01-16.589 18.535c-23.45 4.147-47.155 6.4-70.553 6.4zm-45.056-44.032c31.59 4.3 62.617 4.096 93.952-.512 11.008-45.722 52.48-79.514 100.761-79.514 18.842 0 37.325 5.171 53.35 14.797 25.14-19.046 47.31-41.472 66.202-66.765-9.472-15.923-14.592-34.304-14.592-52.992 0-48.333 32.564-89.037 77.978-100.505 2.202-15.668 3.328-31.488 3.328-47.31s-1.126-31.64-3.328-47.308c-45.414-11.469-77.978-52.173-77.978-100.506 0-18.739 5.12-37.068 14.592-52.992a336.61 336.61 0 00-66.201-66.764 103.767 103.767 0 01-53.35 14.796c-48.282 0-89.754-33.843-100.762-79.513-31.283-4.608-62.362-4.813-93.952-.512-10.803 46.029-52.275 80.025-100.915 80.025-19.712 0-38.861-5.632-55.348-16.076a336.364 336.364 0 00-65.894 65.382 103.127 103.127 0 0116.282 55.654c0 49.51-34.765 91.188-81.716 101.274a337.47 337.47 0 000 93.082c47.002 10.086 81.716 51.763 81.716 101.273 0 19.815-5.684 39.117-16.282 55.655a334.945 334.945 0 0065.894 65.382c16.487-10.445 35.636-16.077 55.348-16.077 48.64 0 90.112 33.997 100.915 80.026z"
        fill="#55524F"
      />
    </Svg>
  )
}

export default SvgComponent