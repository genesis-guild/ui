import { IconProps } from 'shared/assets/types'

export const BadgeLogoContainer = ({ ...props }: IconProps): JSX.Element => {
  return (
    <svg
      {...props}
      viewBox='0 0 114 127'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g filter='url(#filter0_d_201_15377)'>
        <path
          d='M54.9643 1.17532C56.224 0.448028 57.776 0.44803 59.0357 1.17532L104.328 27.3247C105.587 28.052 106.363 29.3961 106.363 30.8506V83.1494C106.363 84.6039 105.587 85.948 104.328 86.6753L59.0357 112.825C57.776 113.552 56.224 113.552 54.9643 112.825L9.67226 86.6753C8.41256 85.948 7.63655 84.6039 7.63655 83.1494V30.8506C7.63655 29.3961 8.41256 28.052 9.67227 27.3247L54.9643 1.17532Z'
          fill='#1C1E26'
        />
        <path
          d='M55.9819 8.26064C56.6118 7.897 57.3878 7.897 58.0176 8.26064L98.7003 31.7488C99.3301 32.1124 99.7182 32.7845 99.7182 33.5118V80.4881C99.7182 81.2153 99.3301 81.8874 98.7003 82.251L58.0176 105.739C57.3878 106.103 56.6118 106.103 55.9819 105.739L15.2993 82.251C14.6694 81.8874 14.2814 81.2153 14.2814 80.488V33.5118C14.2814 32.7845 14.6694 32.1124 15.2993 31.7488L55.9819 8.26064Z'
          fill='url(#paint0_linear_201_15377)'
        />
        <g filter='url(#filter1_d_201_15377)'>
          <path
            d='M55.9823 13.7417C56.6122 13.3781 57.3882 13.3781 58.0181 13.7417L93.9542 34.4895C94.5841 34.8531 94.9721 35.5251 94.9721 36.2524V77.7479C94.9721 78.4752 94.5841 79.1473 93.9542 79.5109L58.0181 100.259C57.3882 100.622 56.6122 100.622 55.9823 100.259L20.0462 79.5109C19.4163 79.1473 19.0283 78.4752 19.0283 77.7479V36.2524C19.0283 35.5251 19.4163 34.8531 20.0462 34.4895L55.9823 13.7417Z'
            fill='url(#paint1_linear_201_15377)'
          />
        </g>
      </g>
      <defs>
        <filter
          id='filter0_d_201_15377'
          x='1.52958'
          y='0.629852'
          width='110.941'
          height='125.972'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='7.125' />
          <feGaussianBlur stdDeviation='3.05357' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.275 0 0 0 0 0.265833 0 0 0 0 0.265833 0 0 0 0.6 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow_201_15377'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_201_15377'
            result='shape'
          />
        </filter>
        <filter
          id='filter1_d_201_15377'
          x='11.9033'
          y='6.34396'
          width='90.1938'
          height='101.312'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset />
          <feGaussianBlur stdDeviation='3.5625' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.02 0 0 0 0 0.02 0 0 0 0 0.02 0 0 0 0.5 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow_201_15377'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_201_15377'
            result='shape'
          />
        </filter>
        <linearGradient
          id='paint0_linear_201_15377'
          x1='106.327'
          y1='7.67298'
          x2='7.67285'
          y2='99.2801'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#555555' />
          <stop offset='1' stopColor='#191919' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_201_15377'
          x1='94.9721'
          y1='13.154'
          x2='8.17922'
          y2='88.3189'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#8850FE' />
          <stop offset='1' stopColor='#5114D2' />
        </linearGradient>
      </defs>
    </svg>
  )
}
