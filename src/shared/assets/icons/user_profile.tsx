import { IconProps } from '../types'

export const UserProfile = ({ ...props }: IconProps) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g filter='url(#filter0_d_718_20255)'>
        <path
          d='M143.322 110.187C153.403 102.255 160.762 91.3788 164.373 79.0703C167.985 66.7618 167.671 53.6335 163.474 41.512C159.277 29.3904 151.407 18.8784 140.957 11.4383C130.508 3.99817 117.999 0 105.172 0C92.3444 0 79.8359 3.99817 69.3865 11.4383C58.9371 18.8784 51.0665 29.3904 46.8697 41.512C42.6729 53.6335 42.3585 66.7618 45.9704 79.0703C49.5823 91.3788 56.9408 102.255 67.0221 110.187C49.7475 117.108 34.6748 128.587 23.4109 143.4C12.147 158.214 5.11413 175.806 3.06203 194.302C2.91348 195.652 3.03237 197.019 3.41191 198.323C3.79144 199.628 4.42418 200.844 5.27401 201.904C6.99032 204.045 9.48666 205.416 12.2139 205.716C48.6156 205.716 151.87 205.716 198.541 205.716C201.237 205.406 203.701 204.043 205.396 201.924C207.091 199.805 207.879 197.103 207.59 194.405C205.529 175.856 198.458 158.219 187.136 143.383C175.814 128.547 160.668 117.071 143.322 110.187Z'
          fill='white'
        />
      </g>
      <defs>
        <filter
          id='filter0_d_718_20255'
          x='0.220436'
          y='0'
          width={props.width}
          height={props.height}
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dx='2.77956' dy='5.55913' />
          <feGaussianBlur stdDeviation='2.77956' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.09 0 0 0 0 0.0916667 0 0 0 0 0.1 0 0 0 0.3 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow_718_20255'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_718_20255'
            result='shape'
          />
        </filter>
      </defs>
    </svg>
  )
}
