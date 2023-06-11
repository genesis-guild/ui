import { AccountLvl } from 'shared/components/profile_picture/types'
import { IconProps } from '../types'

export const ProfileCube = ({ account_lvl }: { account_lvl: AccountLvl }) => {
  switch (account_lvl) {
    case AccountLvl._1:
      return (
        <svg
          width='29'
          height='32'
          viewBox='0 0 29 32'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g filter='url(#filter0_d_508_20217)'>
            <path
              d='M12.75 0.721688C13.5235 0.275106 14.4765 0.275106 15.25 0.721688L24.8744 6.27831C25.6479 6.72489 26.1244 7.55021 26.1244 8.44338V19.5566C26.1244 20.4498 25.6479 21.2751 24.8744 21.7217L15.25 27.2783C14.4765 27.7249 13.5235 27.7249 12.75 27.2783L3.12564 21.7217C2.35214 21.2751 1.87564 20.4498 1.87564 19.5566V8.44338C1.87564 7.55021 2.35214 6.72489 3.12564 6.27831L12.75 0.721688Z'
              fill='url(#paint0_linear_508_20217)'
            />
            <path
              d='M12.9997 2.46212C13.6185 2.10485 14.3809 2.10485 14.9997 2.46212L23.4919 7.36511C24.1107 7.72237 24.4919 8.38263 24.4919 9.09716V18.9031C24.4919 19.6177 24.1107 20.2779 23.4919 20.6352L14.9997 25.5382C14.3809 25.8955 13.6185 25.8955 12.9997 25.5382L4.50743 20.6352C3.88863 20.2779 3.50743 19.6177 3.50743 18.9031V9.09716C3.50743 8.38263 3.88863 7.72237 4.50743 7.36511L12.9997 2.46212Z'
              fill='url(#paint1_linear_508_20217)'
            />
            <g filter='url(#filter1_d_508_20217)'>
              <path
                d='M13.2498 3.66446C13.7139 3.39651 14.2857 3.39651 14.7498 3.66446L22.5762 8.18305C23.0403 8.451 23.3262 8.94619 23.3262 9.48209V18.5193C23.3262 19.0552 23.0403 19.5504 22.5762 19.8183L14.7498 24.3369C14.2857 24.6048 13.7139 24.6048 13.2498 24.3369L5.42334 19.8183C4.95924 19.5504 4.67334 19.0552 4.67334 18.5193V9.48209C4.67334 8.94619 4.95924 8.451 5.42334 8.18305L13.2498 3.66446Z'
                fill='white'
              />
            </g>
            <mask
              id='mask0_508_20217'
              maskUnits='userSpaceOnUse'
              x='4'
              y='3'
              width='20'
              height='22'
            >
              <path
                d='M13.7503 3.37481C13.905 3.28549 14.0956 3.28549 14.2503 3.37481L23.0767 8.47075C23.2314 8.56006 23.3267 8.72513 23.3267 8.90376V19.0956C23.3267 19.2743 23.2314 19.4393 23.0767 19.5287L14.2503 24.6246C14.0956 24.7139 13.905 24.7139 13.7503 24.6246L5.42383 19.8173C4.95973 19.5494 4.67383 19.0542 4.67383 18.5183V8.90376C4.67383 8.72513 4.76913 8.56006 4.92383 8.47075L13.7503 3.37481Z'
                fill='#7D9FFF'
              />
            </mask>
            <g mask='url(#mask0_508_20217)'>
              <path
                d='M4.58643 19.2414V10.3393C4.58643 9.57127 5.41629 9.08993 6.08295 9.47126L12.3564 13.0598C13.3818 13.6463 14.0422 14.7106 14.1124 15.8899L14.6451 24.8399C14.657 25.0395 14.4414 25.1716 14.269 25.0703L4.70983 19.4569C4.63338 19.412 4.58643 19.33 4.58643 19.2414Z'
                fill='url(#paint2_linear_508_20217)'
              />
            </g>
            <mask
              id='mask1_508_20217'
              maskUnits='userSpaceOnUse'
              x='4'
              y='3'
              width='20'
              height='22'
            >
              <path
                d='M13.7503 3.37481C13.905 3.28549 14.0956 3.28549 14.2503 3.37481L23.0767 8.47075C23.2314 8.56006 23.3267 8.72513 23.3267 8.90376V18.5183C23.3267 19.0542 23.0408 19.5494 22.5767 19.8173L14.2503 24.6246C14.0956 24.7139 13.905 24.7139 13.7503 24.6246L4.92383 19.5287C4.76913 19.4393 4.67383 19.2743 4.67383 19.0956V8.90376C4.67383 8.72513 4.76913 8.56006 4.92383 8.47075L13.7503 3.37481Z'
                fill='#7D9FFF'
              />
            </mask>
            <g mask='url(#mask1_508_20217)'>
              <path
                d='M23.4141 19.2395V10.3393C23.4141 9.57127 22.5842 9.08993 21.9175 9.47126L15.7628 12.9919C14.673 13.6152 14.0006 14.7745 14.0006 16.03V24.3381C14.0006 24.5301 14.2081 24.6504 14.3747 24.5551L23.2882 19.4565C23.366 19.4119 23.4141 19.3291 23.4141 19.2395Z'
                fill='#3D7BFA'
              />
              <path
                d='M23.4141 19.2395V10.3393C23.4141 9.57127 22.5842 9.08993 21.9175 9.47126L15.7628 12.9919C14.673 13.6152 14.0006 14.7745 14.0006 16.03V24.3381C14.0006 24.5301 14.2081 24.6504 14.3747 24.5551L23.2882 19.4565C23.366 19.4119 23.4141 19.3291 23.4141 19.2395Z'
                fill='url(#paint3_linear_508_20217)'
              />
            </g>
            <path
              d='M11.5811 16.4219L12.3375 16.9262L11.0728 17.4868L7.95325 15.4071L7.58765 15.5692L8.57894 17.8312L9.84592 18.6759L9.57433 18.0562L8.77622 17.5241L8.36676 16.5931L8.82129 16.3916L10.3696 17.4238L11.341 19.6507L11.1202 19.5035L11.901 21.2852L9.34618 19.582L9.45651 19.8338L7.94271 18.8164L6.07894 14.5634L7.70932 13.8407L9.24303 14.8632L9.41278 15.2505L11.3341 16.5314L11.5811 16.4219Z'
              fill='white'
            />
            <path
              d='M17.0272 20.5535L16.2744 21.0553L17.3362 19.0629L20.4406 16.9933L20.7475 16.4173L19.5364 15.7595L18.2756 16.6001L18.6074 16.7803L19.4016 16.2508L19.9014 16.5197L19.5199 17.2358L17.979 18.263L17.1226 17.7902L17.3424 17.6437L16.0566 16.9478L18.5991 15.2528L18.4643 15.1771L19.9719 14.1796L22.2489 15.4164L20.8803 17.9848L19.354 19.0023L19.1466 18.8896L17.2345 20.1643L17.0272 20.5535Z'
              fill='white'
            />
          </g>
          <defs>
            <filter
              id='filter0_d_508_20217'
              x='-0.92562'
              y='0'
              width='31.7025'
              height='31.7025'
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
              <feOffset dx='0.92562' dy='1.85124' />
              <feGaussianBlur stdDeviation='0.92562' />
              <feComposite in2='hardAlpha' operator='out' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0.09 0 0 0 0 0.0916667 0 0 0 0 0.1 0 0 0 0.3 0'
              />
              <feBlend
                mode='normal'
                in2='BackgroundImageFix'
                result='effect1_dropShadow_508_20217'
              />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='effect1_dropShadow_508_20217'
                result='shape'
              />
            </filter>
            <filter
              id='filter1_d_508_20217'
              x='2.92334'
              y='1.71387'
              width='22.1528'
              height='24.5742'
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
              <feOffset />
              <feGaussianBlur stdDeviation='0.875' />
              <feComposite in2='hardAlpha' operator='out' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0.02 0 0 0 0 0.02 0 0 0 0 0.02 0 0 0 0.5 0'
              />
              <feBlend
                mode='normal'
                in2='BackgroundImageFix'
                result='effect1_dropShadow_508_20217'
              />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='effect1_dropShadow_508_20217'
                result='shape'
              />
            </filter>
            <linearGradient
              id='paint0_linear_508_20217'
              x1='28'
              y1='3.5'
              x2='0.177149'
              y2='6.63567'
              gradientUnits='userSpaceOnUse'
            >
              <stop stop-color='#999999' />
              <stop offset='1' stop-color='#626262' />
            </linearGradient>
            <linearGradient
              id='paint1_linear_508_20217'
              x1='26.115'
              y1='1.88477'
              x2='1.88428'
              y2='24.3848'
              gradientUnits='userSpaceOnUse'
            >
              <stop stop-color='#555555' />
              <stop offset='1' stop-color='#191919' />
            </linearGradient>
            <linearGradient
              id='paint2_linear_508_20217'
              x1='14.673'
              y1='8.61523'
              x2='0.480388'
              y2='16.48'
              gradientUnits='userSpaceOnUse'
            >
              <stop stop-color='#C9C9C9' />
              <stop offset='1' stop-color='#5B5B5B' />
            </linearGradient>
            <linearGradient
              id='paint3_linear_508_20217'
              x1='14.0006'
              y1='8.61523'
              x2='27.4608'
              y2='15.802'
              gradientUnits='userSpaceOnUse'
            >
              <stop stop-color='#E9E9E9' />
              <stop offset='1' stop-color='#8C8C8C' />
            </linearGradient>
          </defs>
        </svg>
      )
    case AccountLvl._2:
      return (
        <svg
          width='29'
          height='32'
          viewBox='0 0 29 32'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g filter='url(#filter0_d_508_20366)'>
            <path
              d='M12.75 0.721688C13.5235 0.275106 14.4765 0.275106 15.25 0.721688L24.8744 6.27831C25.6479 6.72489 26.1244 7.55021 26.1244 8.44338V19.5566C26.1244 20.4498 25.6479 21.2751 24.8744 21.7217L15.25 27.2783C14.4765 27.7249 13.5235 27.7249 12.75 27.2783L3.12564 21.7217C2.35214 21.2751 1.87564 20.4498 1.87564 19.5566V8.44338C1.87564 7.55021 2.35214 6.72489 3.12564 6.27831L12.75 0.721688Z'
              fill='url(#paint0_linear_508_20366)'
            />
            <path
              d='M12.9997 2.46212C13.6185 2.10485 14.3809 2.10485 14.9997 2.46212L23.4919 7.36511C24.1107 7.72237 24.4919 8.38263 24.4919 9.09716V18.9031C24.4919 19.6177 24.1107 20.2779 23.4919 20.6352L14.9997 25.5382C14.3809 25.8955 13.6185 25.8955 12.9997 25.5382L4.50743 20.6352C3.88863 20.2779 3.50743 19.6177 3.50743 18.9031V9.09716C3.50743 8.38263 3.88863 7.72237 4.50743 7.36511L12.9997 2.46212Z'
              fill='#0B0B0D'
            />
            <g filter='url(#filter1_d_508_20366)'>
              <path
                d='M13.2498 3.66446C13.7139 3.39651 14.2857 3.39651 14.7498 3.66446L22.5762 8.18305C23.0403 8.451 23.3262 8.94619 23.3262 9.48209V18.5193C23.3262 19.0552 23.0403 19.5504 22.5762 19.8183L14.7498 24.3369C14.2857 24.6048 13.7139 24.6048 13.2498 24.3369L5.42334 19.8183C4.95924 19.5504 4.67334 19.0552 4.67334 18.5193V9.48209C4.67334 8.94619 4.95924 8.451 5.42334 8.18305L13.2498 3.66446Z'
                fill='white'
              />
              <path
                d='M13.2498 3.66446C13.7139 3.39651 14.2857 3.39651 14.7498 3.66446L22.5762 8.18305C23.0403 8.451 23.3262 8.94619 23.3262 9.48209V18.5193C23.3262 19.0552 23.0403 19.5504 22.5762 19.8183L14.7498 24.3369C14.2857 24.6048 13.7139 24.6048 13.2498 24.3369L5.42334 19.8183C4.95924 19.5504 4.67334 19.0552 4.67334 18.5193V9.48209C4.67334 8.94619 4.95924 8.451 5.42334 8.18305L13.2498 3.66446Z'
                fill='#67FF9A'
              />
            </g>
            <mask
              id='mask0_508_20366'
              maskUnits='userSpaceOnUse'
              x='4'
              y='3'
              width='20'
              height='22'
            >
              <path
                d='M13.7503 3.37383C13.905 3.28451 14.0956 3.28451 14.2503 3.37383L23.0767 8.46977C23.2314 8.55909 23.3267 8.72415 23.3267 8.90278V19.0947C23.3267 19.2733 23.2314 19.4384 23.0767 19.5277L14.2503 24.6236C14.0956 24.7129 13.905 24.7129 13.7503 24.6236L5.42383 19.8164C4.95973 19.5484 4.67383 19.0532 4.67383 18.5173V8.90278C4.67383 8.72415 4.76913 8.55909 4.92383 8.46977L13.7503 3.37383Z'
                fill='url(#paint1_linear_508_20366)'
              />
            </mask>
            <g mask='url(#mask0_508_20366)'>
              <path
                d='M4.58643 19.2404V10.3383C4.58643 9.57029 5.41629 9.08895 6.08295 9.47029L12.3564 13.0588C13.3818 13.6453 14.0422 14.7096 14.1124 15.8889L14.6451 24.8389C14.657 25.0385 14.4414 25.1706 14.269 25.0693L4.70983 19.456C4.63338 19.4111 4.58643 19.329 4.58643 19.2404Z'
                fill='url(#paint2_linear_508_20366)'
              />
            </g>
            <mask
              id='mask1_508_20366'
              maskUnits='userSpaceOnUse'
              x='4'
              y='3'
              width='20'
              height='22'
            >
              <path
                d='M13.7503 3.37383C13.905 3.28451 14.0956 3.28451 14.2503 3.37383L23.0767 8.46977C23.2314 8.55909 23.3267 8.72415 23.3267 8.90278V18.5173C23.3267 19.0532 23.0408 19.5484 22.5767 19.8164L14.2503 24.6236C14.0956 24.7129 13.905 24.7129 13.7503 24.6236L4.92383 19.5277C4.76913 19.4384 4.67383 19.2733 4.67383 19.0947V8.90278C4.67383 8.72415 4.76913 8.55909 4.92383 8.46977L13.7503 3.37383Z'
                fill='url(#paint3_linear_508_20366)'
              />
            </mask>
            <g mask='url(#mask1_508_20366)'>
              <path
                d='M23.4141 19.2385V10.3383C23.4141 9.57029 22.5842 9.08895 21.9175 9.47029L15.7628 12.9909C14.673 13.6142 14.0006 14.7735 14.0006 16.029V24.3371C14.0006 24.5291 14.2081 24.6494 14.3747 24.5541L23.2882 19.4555C23.366 19.411 23.4141 19.3282 23.4141 19.2385Z'
                fill='url(#paint4_linear_508_20366)'
              />
            </g>
            <path
              d='M11.5811 16.4219L12.3375 16.9262L11.0728 17.4868L7.95325 15.4071L7.58765 15.5692L8.57894 17.8312L9.84592 18.6759L9.57433 18.0562L8.77622 17.5241L8.36676 16.5931L8.82129 16.3916L10.3696 17.4238L11.341 19.6507L11.1202 19.5035L11.901 21.2852L9.34618 19.582L9.45651 19.8338L7.94271 18.8164L6.07894 14.5634L7.70932 13.8407L9.24303 14.8632L9.41278 15.2505L11.3341 16.5314L11.5811 16.4219Z'
              fill='white'
            />
            <path
              d='M17.0272 20.5535L16.2744 21.0553L17.3362 19.0629L20.4406 16.9933L20.7475 16.4173L19.5364 15.7595L18.2756 16.6001L18.6074 16.7803L19.4016 16.2508L19.9014 16.5197L19.5199 17.2358L17.979 18.263L17.1226 17.7902L17.3424 17.6437L16.0566 16.9478L18.5991 15.2528L18.4643 15.1771L19.9719 14.1796L22.2489 15.4164L20.8803 17.9848L19.354 19.0023L19.1466 18.8896L17.2345 20.1643L17.0272 20.5535Z'
              fill='white'
            />
          </g>
          <defs>
            <filter
              id='filter0_d_508_20366'
              x='-0.92562'
              y='0'
              width='31.7025'
              height='31.7025'
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
              <feOffset dx='0.92562' dy='1.85124' />
              <feGaussianBlur stdDeviation='0.92562' />
              <feComposite in2='hardAlpha' operator='out' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0.09 0 0 0 0 0.0916667 0 0 0 0 0.1 0 0 0 0.3 0'
              />
              <feBlend
                mode='normal'
                in2='BackgroundImageFix'
                result='effect1_dropShadow_508_20366'
              />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='effect1_dropShadow_508_20366'
                result='shape'
              />
            </filter>
            <filter
              id='filter1_d_508_20366'
              x='2.92334'
              y='1.71387'
              width='22.1528'
              height='24.5742'
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
              <feOffset />
              <feGaussianBlur stdDeviation='0.875' />
              <feComposite in2='hardAlpha' operator='out' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0.02 0 0 0 0 0.02 0 0 0 0 0.02 0 0 0 0.5 0'
              />
              <feBlend
                mode='normal'
                in2='BackgroundImageFix'
                result='effect1_dropShadow_508_20366'
              />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='effect1_dropShadow_508_20366'
                result='shape'
              />
            </filter>
            <linearGradient
              id='paint0_linear_508_20366'
              x1='27.9974'
              y1='-7.02665'
              x2='-7.03017'
              y2='14.3377'
              gradientUnits='userSpaceOnUse'
            >
              <stop stop-color='#0AFF6C' />
              <stop offset='1' stop-color='#06721D' />
            </linearGradient>
            <linearGradient
              id='paint1_linear_508_20366'
              x1='23.325'
              y1='-2.17562'
              x2='-1.70626'
              y2='11.0462'
              gradientUnits='userSpaceOnUse'
            >
              <stop stop-color='#0AFF6C' />
              <stop offset='1' stop-color='#06721D' />
            </linearGradient>
            <linearGradient
              id='paint2_linear_508_20366'
              x1='14.672'
              y1='4.42529'
              x2='-0.569822'
              y2='10.0428'
              gradientUnits='userSpaceOnUse'
            >
              <stop stop-color='#0AFF6C' />
              <stop offset='1' stop-color='#06721D' />
            </linearGradient>
            <linearGradient
              id='paint3_linear_508_20366'
              x1='23.325'
              y1='-2.17562'
              x2='-1.70626'
              y2='11.0462'
              gradientUnits='userSpaceOnUse'
            >
              <stop stop-color='#0AFF6C' />
              <stop offset='1' stop-color='#06721D' />
            </linearGradient>
            <linearGradient
              id='paint4_linear_508_20366'
              x1='14.0015'
              y1='4.56042'
              x2='28.3463'
              y2='9.65899'
              gradientUnits='userSpaceOnUse'
            >
              <stop stop-color='#0AFF6C' />
              <stop offset='1' stop-color='#06721D' />
            </linearGradient>
          </defs>
        </svg>
      )
    case AccountLvl._3:
      return (
        <svg
          width='29'
          height='32'
          viewBox='0 0 29 32'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g filter='url(#filter0_d_508_20397)'>
            <path
              d='M12.75 0.721688C13.5235 0.275106 14.4765 0.275106 15.25 0.721688L24.8744 6.27831C25.6479 6.72489 26.1244 7.55021 26.1244 8.44338V19.5566C26.1244 20.4498 25.6479 21.2751 24.8744 21.7217L15.25 27.2783C14.4765 27.7249 13.5235 27.7249 12.75 27.2783L3.12564 21.7217C2.35214 21.2751 1.87564 20.4498 1.87564 19.5566V8.44338C1.87564 7.55021 2.35214 6.72489 3.12564 6.27831L12.75 0.721688Z'
              fill='url(#paint0_linear_508_20397)'
            />
            <path
              d='M12.9997 2.46212C13.6185 2.10485 14.3809 2.10485 14.9997 2.46212L23.4919 7.36511C24.1107 7.72237 24.4919 8.38263 24.4919 9.09716V18.9031C24.4919 19.6177 24.1107 20.2779 23.4919 20.6352L14.9997 25.5382C14.3809 25.8955 13.6185 25.8955 12.9997 25.5382L4.50743 20.6352C3.88863 20.2779 3.50743 19.6177 3.50743 18.9031V9.09716C3.50743 8.38263 3.88863 7.72237 4.50743 7.36511L12.9997 2.46212Z'
              fill='#0B0B0D'
            />
            <g filter='url(#filter1_d_508_20397)'>
              <path
                d='M13.2498 3.66446C13.7139 3.39651 14.2857 3.39651 14.7498 3.66446L22.5762 8.18305C23.0403 8.451 23.3262 8.94619 23.3262 9.48209V18.5193C23.3262 19.0552 23.0403 19.5504 22.5762 19.8183L14.7498 24.3369C14.2857 24.6048 13.7139 24.6048 13.2498 24.3369L5.42334 19.8183C4.95924 19.5504 4.67334 19.0552 4.67334 18.5193V9.48209C4.67334 8.94619 4.95924 8.451 5.42334 8.18305L13.2498 3.66446Z'
                fill='#8AC5FF'
              />
            </g>
            <mask
              id='mask0_508_20397'
              maskUnits='userSpaceOnUse'
              x='4'
              y='3'
              width='20'
              height='22'
            >
              <path
                d='M13.7503 3.37383C13.905 3.28451 14.0956 3.28451 14.2503 3.37383L23.0767 8.46977C23.2314 8.55909 23.3267 8.72415 23.3267 8.90278V19.0947C23.3267 19.2733 23.2314 19.4384 23.0767 19.5277L14.2503 24.6236C14.0956 24.7129 13.905 24.7129 13.7503 24.6236L5.42383 19.8164C4.95973 19.5484 4.67383 19.0532 4.67383 18.5173V8.90278C4.67383 8.72415 4.76913 8.55909 4.92383 8.46977L13.7503 3.37383Z'
                fill='url(#paint1_linear_508_20397)'
              />
            </mask>
            <g mask='url(#mask0_508_20397)'>
              <path
                d='M4.58643 19.2404V10.3383C4.58643 9.57029 5.41629 9.08895 6.08295 9.47029L12.3564 13.0588C13.3818 13.6453 14.0422 14.7096 14.1124 15.8889L14.6451 24.8389C14.657 25.0385 14.4414 25.1706 14.269 25.0693L4.70983 19.456C4.63338 19.4111 4.58643 19.329 4.58643 19.2404Z'
                fill='url(#paint2_linear_508_20397)'
              />
            </g>
            <mask
              id='mask1_508_20397'
              maskUnits='userSpaceOnUse'
              x='4'
              y='3'
              width='20'
              height='22'
            >
              <path
                d='M13.7503 3.37383C13.905 3.28451 14.0956 3.28451 14.2503 3.37383L23.0767 8.46977C23.2314 8.55909 23.3267 8.72415 23.3267 8.90278V18.5173C23.3267 19.0532 23.0408 19.5484 22.5767 19.8164L14.2503 24.6236C14.0956 24.7129 13.905 24.7129 13.7503 24.6236L4.92383 19.5277C4.76913 19.4384 4.67383 19.2733 4.67383 19.0947V8.90278C4.67383 8.72415 4.76913 8.55909 4.92383 8.46977L13.7503 3.37383Z'
                fill='url(#paint3_linear_508_20397)'
              />
            </mask>
            <g mask='url(#mask1_508_20397)'>
              <path
                d='M23.4141 19.2385V10.3383C23.4141 9.57029 22.5842 9.08895 21.9175 9.47029L15.7628 12.9909C14.673 13.6142 14.0006 14.7735 14.0006 16.029V24.3371C14.0006 24.5291 14.2081 24.6494 14.3747 24.5541L23.2882 19.4555C23.366 19.411 23.4141 19.3282 23.4141 19.2385Z'
                fill='url(#paint4_linear_508_20397)'
              />
            </g>
            <path
              d='M11.5811 16.4219L12.3375 16.9262L11.0728 17.4868L7.95325 15.4071L7.58765 15.5692L8.57894 17.8312L9.84592 18.6759L9.57433 18.0562L8.77622 17.5241L8.36676 16.5931L8.82129 16.3916L10.3696 17.4238L11.341 19.6507L11.1202 19.5035L11.901 21.2852L9.34618 19.582L9.45651 19.8338L7.94271 18.8164L6.07894 14.5634L7.70932 13.8407L9.24303 14.8632L9.41278 15.2505L11.3341 16.5314L11.5811 16.4219Z'
              fill='white'
            />
            <path
              d='M17.0272 20.5535L16.2744 21.0553L17.3362 19.0629L20.4406 16.9933L20.7475 16.4173L19.5364 15.7595L18.2756 16.6001L18.6074 16.7803L19.4016 16.2508L19.9014 16.5197L19.5199 17.2358L17.979 18.263L17.1226 17.7902L17.3424 17.6437L16.0566 16.9478L18.5991 15.2528L18.4643 15.1771L19.9719 14.1796L22.2489 15.4164L20.8803 17.9848L19.354 19.0023L19.1466 18.8896L17.2345 20.1643L17.0272 20.5535Z'
              fill='white'
            />
          </g>
          <defs>
            <filter
              id='filter0_d_508_20397'
              x='-0.92562'
              y='0'
              width='31.7025'
              height='31.7025'
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
              <feOffset dx='0.92562' dy='1.85124' />
              <feGaussianBlur stdDeviation='0.92562' />
              <feComposite in2='hardAlpha' operator='out' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0.09 0 0 0 0 0.0916667 0 0 0 0 0.1 0 0 0 0.3 0'
              />
              <feBlend
                mode='normal'
                in2='BackgroundImageFix'
                result='effect1_dropShadow_508_20397'
              />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='effect1_dropShadow_508_20397'
                result='shape'
              />
            </filter>
            <filter
              id='filter1_d_508_20397'
              x='2.92334'
              y='1.71387'
              width='22.1528'
              height='24.5742'
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
              <feOffset />
              <feGaussianBlur stdDeviation='0.875' />
              <feComposite in2='hardAlpha' operator='out' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0.02 0 0 0 0 0.02 0 0 0 0 0.02 0 0 0 0.5 0'
              />
              <feBlend
                mode='normal'
                in2='BackgroundImageFix'
                result='effect1_dropShadow_508_20397'
              />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='effect1_dropShadow_508_20397'
                result='shape'
              />
            </filter>
            <linearGradient
              id='paint0_linear_508_20397'
              x1='28'
              y1='3.5'
              x2='0.177149'
              y2='6.63567'
              gradientUnits='userSpaceOnUse'
            >
              <stop stop-color='#1E77C9' />
              <stop offset='1' stop-color='#12B6EA' />
            </linearGradient>
            <linearGradient
              id='paint1_linear_508_20397'
              x1='23.3267'
              y1='5.9218'
              x2='4.73354'
              y2='7.73653'
              gradientUnits='userSpaceOnUse'
            >
              <stop stop-color='#1E77C9' />
              <stop offset='1' stop-color='#12B6EA' />
            </linearGradient>
            <linearGradient
              id='paint2_linear_508_20397'
              x1='14.673'
              y1='10.7008'
              x2='4.56979'
              y2='11.3888'
              gradientUnits='userSpaceOnUse'
            >
              <stop stop-color='#1E77C9' />
              <stop offset='1' stop-color='#12B6EA' />
            </linearGradient>
            <linearGradient
              id='paint3_linear_508_20397'
              x1='23.3267'
              y1='5.9218'
              x2='4.73354'
              y2='7.73653'
              gradientUnits='userSpaceOnUse'
            >
              <stop stop-color='#1E77C9' />
              <stop offset='1' stop-color='#12B6EA' />
            </linearGradient>
            <linearGradient
              id='paint4_linear_508_20397'
              x1='14.0006'
              y1='10.6335'
              x2='23.4326'
              y2='11.2529'
              gradientUnits='userSpaceOnUse'
            >
              <stop stop-color='#1E77C9' />
              <stop offset='1' stop-color='#12B6EA' />
            </linearGradient>
          </defs>
        </svg>
      )
    case AccountLvl._4:
      return (
        <svg
          width='29'
          height='32'
          viewBox='0 0 29 32'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g filter='url(#filter0_d_508_20428)'>
            <path
              d='M12.75 0.721688C13.5235 0.275106 14.4765 0.275106 15.25 0.721688L24.8744 6.27831C25.6479 6.72489 26.1244 7.55021 26.1244 8.44338V19.5566C26.1244 20.4498 25.6479 21.2751 24.8744 21.7217L15.25 27.2783C14.4765 27.7249 13.5235 27.7249 12.75 27.2783L3.12564 21.7217C2.35214 21.2751 1.87564 20.4498 1.87564 19.5566V8.44338C1.87564 7.55021 2.35214 6.72489 3.12564 6.27831L12.75 0.721688Z'
              fill='url(#paint0_linear_508_20428)'
            />
            <path
              d='M12.9997 2.46212C13.6185 2.10485 14.3809 2.10485 14.9997 2.46212L23.4919 7.36511C24.1107 7.72237 24.4919 8.38263 24.4919 9.09716V18.9031C24.4919 19.6177 24.1107 20.2779 23.4919 20.6352L14.9997 25.5382C14.3809 25.8955 13.6185 25.8955 12.9997 25.5382L4.50743 20.6352C3.88863 20.2779 3.50743 19.6177 3.50743 18.9031V9.09716C3.50743 8.38263 3.88863 7.72237 4.50743 7.36511L12.9997 2.46212Z'
              fill='#0B0B0D'
            />
            <g filter='url(#filter1_d_508_20428)'>
              <path
                d='M13.2498 3.66446C13.7139 3.39651 14.2857 3.39651 14.7498 3.66446L22.5762 8.18305C23.0403 8.451 23.3262 8.94619 23.3262 9.48209V18.5193C23.3262 19.0552 23.0403 19.5504 22.5762 19.8183L14.7498 24.3369C14.2857 24.6048 13.7139 24.6048 13.2498 24.3369L5.42334 19.8183C4.95924 19.5504 4.67334 19.0552 4.67334 18.5193V9.48209C4.67334 8.94619 4.95924 8.451 5.42334 8.18305L13.2498 3.66446Z'
                fill='#FCE04F'
              />
            </g>
            <mask
              id='mask0_508_20428'
              maskUnits='userSpaceOnUse'
              x='4'
              y='3'
              width='20'
              height='22'
            >
              <path
                d='M13.7503 3.37383C13.905 3.28451 14.0956 3.28451 14.2503 3.37383L23.0767 8.46977C23.2314 8.55909 23.3267 8.72415 23.3267 8.90278V19.0947C23.3267 19.2733 23.2314 19.4384 23.0767 19.5277L14.2503 24.6236C14.0956 24.7129 13.905 24.7129 13.7503 24.6236L5.42383 19.8164C4.95973 19.5484 4.67383 19.0532 4.67383 18.5173V8.90278C4.67383 8.72415 4.76913 8.55909 4.92383 8.46977L13.7503 3.37383Z'
                fill='url(#paint1_linear_508_20428)'
              />
            </mask>
            <g mask='url(#mask0_508_20428)'>
              <path
                d='M4.58643 19.2404V10.3383C4.58643 9.57029 5.41629 9.08895 6.08295 9.47029L12.3564 13.0588C13.3818 13.6453 14.0422 14.7096 14.1124 15.8889L14.6451 24.8389C14.657 25.0385 14.4414 25.1706 14.269 25.0693L4.70983 19.456C4.63338 19.4111 4.58643 19.329 4.58643 19.2404Z'
                fill='url(#paint2_linear_508_20428)'
              />
            </g>
            <mask
              id='mask1_508_20428'
              maskUnits='userSpaceOnUse'
              x='4'
              y='3'
              width='20'
              height='22'
            >
              <path
                d='M13.7503 3.37383C13.905 3.28451 14.0956 3.28451 14.2503 3.37383L23.0767 8.46977C23.2314 8.55909 23.3267 8.72415 23.3267 8.90278V18.5173C23.3267 19.0532 23.0408 19.5484 22.5767 19.8164L14.2503 24.6236C14.0956 24.7129 13.905 24.7129 13.7503 24.6236L4.92383 19.5277C4.76913 19.4384 4.67383 19.2733 4.67383 19.0947V8.90278C4.67383 8.72415 4.76913 8.55909 4.92383 8.46977L13.7503 3.37383Z'
                fill='url(#paint3_linear_508_20428)'
              />
            </mask>
            <g mask='url(#mask1_508_20428)'>
              <path
                d='M23.4141 19.2385V10.3383C23.4141 9.57029 22.5842 9.08895 21.9175 9.47029L15.7628 12.9909C14.673 13.6142 14.0006 14.7735 14.0006 16.029V24.3371C14.0006 24.5291 14.2081 24.6494 14.3747 24.5541L23.2882 19.4555C23.366 19.411 23.4141 19.3282 23.4141 19.2385Z'
                fill='url(#paint4_linear_508_20428)'
              />
            </g>
            <path
              d='M11.5811 16.4219L12.3375 16.9262L11.0728 17.4868L7.95325 15.4071L7.58765 15.5692L8.57894 17.8312L9.84592 18.6759L9.57433 18.0562L8.77622 17.5241L8.36676 16.5931L8.82129 16.3916L10.3696 17.4238L11.341 19.6507L11.1202 19.5035L11.901 21.2852L9.34618 19.582L9.45651 19.8338L7.94271 18.8164L6.07894 14.5634L7.70932 13.8407L9.24303 14.8632L9.41278 15.2505L11.3341 16.5314L11.5811 16.4219Z'
              fill='white'
            />
            <path
              d='M17.0272 20.5535L16.2744 21.0553L17.3362 19.0629L20.4406 16.9933L20.7475 16.4173L19.5364 15.7595L18.2756 16.6001L18.6074 16.7803L19.4016 16.2508L19.9014 16.5197L19.5199 17.2358L17.979 18.263L17.1226 17.7902L17.3424 17.6437L16.0566 16.9478L18.5991 15.2528L18.4643 15.1771L19.9719 14.1796L22.2489 15.4164L20.8803 17.9848L19.354 19.0023L19.1466 18.8896L17.2345 20.1643L17.0272 20.5535Z'
              fill='white'
            />
          </g>
          <defs>
            <filter
              id='filter0_d_508_20428'
              x='-0.92562'
              y='0'
              width='31.7025'
              height='31.7025'
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
              <feOffset dx='0.92562' dy='1.85124' />
              <feGaussianBlur stdDeviation='0.92562' />
              <feComposite in2='hardAlpha' operator='out' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0.09 0 0 0 0 0.0916667 0 0 0 0 0.1 0 0 0 0.3 0'
              />
              <feBlend
                mode='normal'
                in2='BackgroundImageFix'
                result='effect1_dropShadow_508_20428'
              />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='effect1_dropShadow_508_20428'
                result='shape'
              />
            </filter>
            <filter
              id='filter1_d_508_20428'
              x='2.92334'
              y='1.71387'
              width='22.1528'
              height='24.5742'
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
              <feOffset />
              <feGaussianBlur stdDeviation='0.875' />
              <feComposite in2='hardAlpha' operator='out' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0.02 0 0 0 0 0.02 0 0 0 0 0.02 0 0 0 0.5 0'
              />
              <feBlend
                mode='normal'
                in2='BackgroundImageFix'
                result='effect1_dropShadow_508_20428'
              />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='effect1_dropShadow_508_20428'
                result='shape'
              />
            </filter>
            <linearGradient
              id='paint0_linear_508_20428'
              x1='28'
              y1='0'
              x2='0.833332'
              y2='26.8333'
              gradientUnits='userSpaceOnUse'
            >
              <stop stop-color='#FFE603' />
              <stop offset='0.701939' stop-color='#E2481A' />
              <stop offset='1' stop-color='#DB2020' />
            </linearGradient>
            <linearGradient
              id='paint1_linear_508_20428'
              x1='23.3267'
              y1='5.9218'
              x2='4.73354'
              y2='7.73653'
              gradientUnits='userSpaceOnUse'
            >
              <stop stop-color='#1E77C9' />
              <stop offset='1' stop-color='#12B6EA' />
            </linearGradient>
            <linearGradient
              id='paint2_linear_508_20428'
              x1='14.673'
              y1='8.61426'
              x2='0.417245'
              y2='17.1228'
              gradientUnits='userSpaceOnUse'
            >
              <stop stop-color='#FFE603' />
              <stop offset='0.701939' stop-color='#E2481A' />
              <stop offset='1' stop-color='#DB2020' />
            </linearGradient>
            <linearGradient
              id='paint3_linear_508_20428'
              x1='23.3267'
              y1='5.9218'
              x2='4.73354'
              y2='7.73653'
              gradientUnits='userSpaceOnUse'
            >
              <stop stop-color='#1E77C9' />
              <stop offset='1' stop-color='#12B6EA' />
            </linearGradient>
            <linearGradient
              id='paint4_linear_508_20428'
              x1='14.0006'
              y1='8.61426'
              x2='27.5541'
              y2='16.4155'
              gradientUnits='userSpaceOnUse'
            >
              <stop stop-color='#FFE603' />
              <stop offset='0.701939' stop-color='#E2481A' />
              <stop offset='1' stop-color='#DB2020' />
            </linearGradient>
          </defs>
        </svg>
      )
    case AccountLvl._5:
      return (
        <svg
          width='29'
          height='32'
          viewBox='0 0 29 32'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g filter='url(#filter0_d_508_20459)'>
            <path
              d='M12.75 0.721688C13.5235 0.275106 14.4765 0.275106 15.25 0.721688L24.8744 6.27831C25.6479 6.72489 26.1244 7.55021 26.1244 8.44338V19.5566C26.1244 20.4498 25.6479 21.2751 24.8744 21.7217L15.25 27.2783C14.4765 27.7249 13.5235 27.7249 12.75 27.2783L3.12564 21.7217C2.35214 21.2751 1.87564 20.4498 1.87564 19.5566V8.44338C1.87564 7.55021 2.35214 6.72489 3.12564 6.27831L12.75 0.721688Z'
              fill='url(#paint0_linear_508_20459)'
            />
            <path
              d='M12.9997 2.46212C13.6185 2.10485 14.3809 2.10485 14.9997 2.46212L23.4919 7.36511C24.1107 7.72237 24.4919 8.38263 24.4919 9.09716V18.9031C24.4919 19.6177 24.1107 20.2779 23.4919 20.6352L14.9997 25.5382C14.3809 25.8955 13.6185 25.8955 12.9997 25.5382L4.50743 20.6352C3.88863 20.2779 3.50743 19.6177 3.50743 18.9031V9.09716C3.50743 8.38263 3.88863 7.72237 4.50743 7.36511L12.9997 2.46212Z'
              fill='#0B0B0D'
            />
            <g filter='url(#filter1_d_508_20459)'>
              <path
                d='M13.2498 3.66446C13.7139 3.39651 14.2857 3.39651 14.7498 3.66446L22.5762 8.18305C23.0403 8.451 23.3262 8.94619 23.3262 9.48209V18.5193C23.3262 19.0552 23.0403 19.5504 22.5762 19.8183L14.7498 24.3369C14.2857 24.6048 13.7139 24.6048 13.2498 24.3369L5.42334 19.8183C4.95924 19.5504 4.67334 19.0552 4.67334 18.5193V9.48209C4.67334 8.94619 4.95924 8.451 5.42334 8.18305L13.2498 3.66446Z'
                fill='#C396F5'
              />
            </g>
            <mask
              id='mask0_508_20459'
              maskUnits='userSpaceOnUse'
              x='4'
              y='3'
              width='20'
              height='22'
            >
              <path
                d='M13.7503 3.37383C13.905 3.28451 14.0956 3.28451 14.2503 3.37383L23.0767 8.46977C23.2314 8.55909 23.3267 8.72415 23.3267 8.90278V19.0947C23.3267 19.2733 23.2314 19.4384 23.0767 19.5277L14.2503 24.6236C14.0956 24.7129 13.905 24.7129 13.7503 24.6236L5.42383 19.8164C4.95973 19.5484 4.67383 19.0532 4.67383 18.5173V8.90278C4.67383 8.72415 4.76913 8.55909 4.92383 8.46977L13.7503 3.37383Z'
                fill='url(#paint1_linear_508_20459)'
              />
            </mask>
            <g mask='url(#mask0_508_20459)'>
              <path
                d='M4.58643 19.2404V10.3383C4.58643 9.57029 5.41629 9.08895 6.08295 9.47029L12.3564 13.0588C13.3818 13.6453 14.0422 14.7096 14.1124 15.8889L14.6451 24.8389C14.657 25.0385 14.4414 25.1706 14.269 25.0693L4.70983 19.456C4.63338 19.4111 4.58643 19.329 4.58643 19.2404Z'
                fill='url(#paint2_linear_508_20459)'
              />
            </g>
            <mask
              id='mask1_508_20459'
              maskUnits='userSpaceOnUse'
              x='4'
              y='3'
              width='20'
              height='22'
            >
              <path
                d='M13.7503 3.37383C13.905 3.28451 14.0956 3.28451 14.2503 3.37383L23.0767 8.46977C23.2314 8.55909 23.3267 8.72415 23.3267 8.90278V18.5173C23.3267 19.0532 23.0408 19.5484 22.5767 19.8164L14.2503 24.6236C14.0956 24.7129 13.905 24.7129 13.7503 24.6236L4.92383 19.5277C4.76913 19.4384 4.67383 19.2733 4.67383 19.0947V8.90278C4.67383 8.72415 4.76913 8.55909 4.92383 8.46977L13.7503 3.37383Z'
                fill='url(#paint3_linear_508_20459)'
              />
            </mask>
            <g mask='url(#mask1_508_20459)'>
              <path
                d='M23.4141 19.2385V10.3383C23.4141 9.57029 22.5842 9.08895 21.9175 9.47029L15.7628 12.9909C14.673 13.6142 14.0006 14.7735 14.0006 16.029V24.3371C14.0006 24.5291 14.2081 24.6494 14.3747 24.5541L23.2882 19.4555C23.366 19.411 23.4141 19.3282 23.4141 19.2385Z'
                fill='url(#paint4_linear_508_20459)'
              />
            </g>
            <path
              d='M11.5811 16.4219L12.3375 16.9262L11.0728 17.4868L7.95325 15.4071L7.58765 15.5692L8.57894 17.8312L9.84592 18.6759L9.57433 18.0562L8.77622 17.5241L8.36676 16.5931L8.82129 16.3916L10.3696 17.4238L11.341 19.6507L11.1202 19.5035L11.901 21.2852L9.34618 19.582L9.45651 19.8338L7.94271 18.8164L6.07894 14.5634L7.70932 13.8407L9.24303 14.8632L9.41278 15.2505L11.3341 16.5314L11.5811 16.4219Z'
              fill='white'
            />
            <path
              d='M17.0272 20.5535L16.2744 21.0553L17.3362 19.0629L20.4406 16.9933L20.7475 16.4173L19.5364 15.7595L18.2756 16.6001L18.6074 16.7803L19.4016 16.2508L19.9014 16.5197L19.5199 17.2358L17.979 18.263L17.1226 17.7902L17.3424 17.6437L16.0566 16.9478L18.5991 15.2528L18.4643 15.1771L19.9719 14.1796L22.2489 15.4164L20.8803 17.9848L19.354 19.0023L19.1466 18.8896L17.2345 20.1643L17.0272 20.5535Z'
              fill='white'
            />
          </g>
          <defs>
            <filter
              id='filter0_d_508_20459'
              x='-0.92562'
              y='0'
              width='31.7025'
              height='31.7025'
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
              <feOffset dx='0.92562' dy='1.85124' />
              <feGaussianBlur stdDeviation='0.92562' />
              <feComposite in2='hardAlpha' operator='out' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0.09 0 0 0 0 0.0916667 0 0 0 0 0.1 0 0 0 0.3 0'
              />
              <feBlend
                mode='normal'
                in2='BackgroundImageFix'
                result='effect1_dropShadow_508_20459'
              />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='effect1_dropShadow_508_20459'
                result='shape'
              />
            </filter>
            <filter
              id='filter1_d_508_20459'
              x='2.92334'
              y='1.71387'
              width='22.1528'
              height='24.5742'
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
              <feOffset />
              <feGaussianBlur stdDeviation='0.875' />
              <feComposite in2='hardAlpha' operator='out' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0.02 0 0 0 0 0.02 0 0 0 0 0.02 0 0 0 0.5 0'
              />
              <feBlend
                mode='normal'
                in2='BackgroundImageFix'
                result='effect1_dropShadow_508_20459'
              />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='effect1_dropShadow_508_20459'
                result='shape'
              />
            </filter>
            <linearGradient
              id='paint0_linear_508_20459'
              x1='-6.4887e-08'
              y1='3.0625'
              x2='30.1723'
              y2='6.0483'
              gradientUnits='userSpaceOnUse'
            >
              <stop stop-color='#6100FF' />
              <stop offset='1' stop-color='#BB4BFF' />
            </linearGradient>
            <linearGradient
              id='paint1_linear_508_20459'
              x1='23.3267'
              y1='5.9218'
              x2='4.73354'
              y2='7.73653'
              gradientUnits='userSpaceOnUse'
            >
              <stop stop-color='#1E77C9' />
              <stop offset='1' stop-color='#12B6EA' />
            </linearGradient>
            <linearGradient
              id='paint2_linear_508_20459'
              x1='4.58643'
              y1='10.44'
              x2='15.5228'
              y2='11.0939'
              gradientUnits='userSpaceOnUse'
            >
              <stop stop-color='#6100FF' />
              <stop offset='1' stop-color='#BB4BFF' />
            </linearGradient>
            <linearGradient
              id='paint3_linear_508_20459'
              x1='23.3267'
              y1='5.9218'
              x2='4.73354'
              y2='7.73653'
              gradientUnits='userSpaceOnUse'
            >
              <stop stop-color='#1E77C9' />
              <stop offset='1' stop-color='#12B6EA' />
            </linearGradient>
            <linearGradient
              id='paint4_linear_508_20459'
              x1='23.4141'
              y1='10.3811'
              x2='13.2049'
              y2='10.9698'
              gradientUnits='userSpaceOnUse'
            >
              <stop stop-color='#6100FF' />
              <stop offset='1' stop-color='#BB4BFF' />
            </linearGradient>
          </defs>
        </svg>
      )
    case AccountLvl._6:
      return (
        <svg
          width='29'
          height='32'
          viewBox='0 0 29 32'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g filter='url(#filter0_d_508_20490)'>
            <path
              d='M12.75 0.721688C13.5235 0.275106 14.4765 0.275106 15.25 0.721688L24.8744 6.27831C25.6479 6.72489 26.1244 7.55021 26.1244 8.44338V19.5566C26.1244 20.4498 25.6479 21.2751 24.8744 21.7217L15.25 27.2783C14.4765 27.7249 13.5235 27.7249 12.75 27.2783L3.12564 21.7217C2.35214 21.2751 1.87564 20.4498 1.87564 19.5566V8.44338C1.87564 7.55021 2.35214 6.72489 3.12564 6.27831L12.75 0.721688Z'
              fill='url(#paint0_linear_508_20490)'
            />
            <path
              d='M12.9997 2.46212C13.6185 2.10485 14.3809 2.10485 14.9997 2.46212L23.4919 7.36511C24.1107 7.72237 24.4919 8.38263 24.4919 9.09716V18.9031C24.4919 19.6177 24.1107 20.2779 23.4919 20.6352L14.9997 25.5382C14.3809 25.8955 13.6185 25.8955 12.9997 25.5382L4.50743 20.6352C3.88863 20.2779 3.50743 19.6177 3.50743 18.9031V9.09716C3.50743 8.38263 3.88863 7.72237 4.50743 7.36511L12.9997 2.46212Z'
              fill='#0B0B0D'
            />
            <g filter='url(#filter1_d_508_20490)'>
              <path
                d='M13.2498 3.66446C13.7139 3.39651 14.2857 3.39651 14.7498 3.66446L22.5762 8.18305C23.0403 8.451 23.3262 8.94619 23.3262 9.48209V18.5193C23.3262 19.0552 23.0403 19.5504 22.5762 19.8183L14.7498 24.3369C14.2857 24.6048 13.7139 24.6048 13.2498 24.3369L5.42334 19.8183C4.95924 19.5504 4.67334 19.0552 4.67334 18.5193V9.48209C4.67334 8.94619 4.95924 8.451 5.42334 8.18305L13.2498 3.66446Z'
                fill='url(#paint1_radial_508_20490)'
              />
            </g>
            <mask
              id='mask0_508_20490'
              maskUnits='userSpaceOnUse'
              x='4'
              y='3'
              width='20'
              height='22'
            >
              <path
                d='M13.7503 3.37383C13.905 3.28451 14.0956 3.28451 14.2503 3.37383L23.0767 8.46977C23.2314 8.55909 23.3267 8.72415 23.3267 8.90278V19.0947C23.3267 19.2733 23.2314 19.4384 23.0767 19.5277L14.2503 24.6236C14.0956 24.7129 13.905 24.7129 13.7503 24.6236L5.42383 19.8164C4.95973 19.5484 4.67383 19.0532 4.67383 18.5173V8.90278C4.67383 8.72415 4.76913 8.55909 4.92383 8.46977L13.7503 3.37383Z'
                fill='url(#paint2_linear_508_20490)'
              />
            </mask>
            <g mask='url(#mask0_508_20490)'>
              <path
                d='M4.58643 19.2404V10.3383C4.58643 9.57029 5.41629 9.08895 6.08295 9.47029L12.3564 13.0588C13.3818 13.6453 14.0422 14.7096 14.1124 15.8889L14.6451 24.8389C14.657 25.0385 14.4414 25.1706 14.269 25.0693L4.70983 19.456C4.63338 19.4111 4.58643 19.329 4.58643 19.2404Z'
                fill='url(#paint3_linear_508_20490)'
              />
            </g>
            <mask
              id='mask1_508_20490'
              maskUnits='userSpaceOnUse'
              x='4'
              y='3'
              width='20'
              height='22'
            >
              <path
                d='M13.7503 3.37383C13.905 3.28451 14.0956 3.28451 14.2503 3.37383L23.0767 8.46977C23.2314 8.55909 23.3267 8.72415 23.3267 8.90278V18.5173C23.3267 19.0532 23.0408 19.5484 22.5767 19.8164L14.2503 24.6236C14.0956 24.7129 13.905 24.7129 13.7503 24.6236L4.92383 19.5277C4.76913 19.4384 4.67383 19.2733 4.67383 19.0947V8.90278C4.67383 8.72415 4.76913 8.55909 4.92383 8.46977L13.7503 3.37383Z'
                fill='url(#paint4_linear_508_20490)'
              />
            </mask>
            <g mask='url(#mask1_508_20490)'>
              <path
                d='M23.4141 19.2385V10.3383C23.4141 9.57029 22.5842 9.08895 21.9175 9.47029L15.7628 12.9909C14.673 13.6142 14.0006 14.7735 14.0006 16.029V24.3371C14.0006 24.5291 14.2081 24.6494 14.3747 24.5541L23.2882 19.4555C23.366 19.411 23.4141 19.3282 23.4141 19.2385Z'
                fill='url(#paint5_linear_508_20490)'
              />
            </g>
            <path
              d='M11.5811 16.4219L12.3375 16.9262L11.0728 17.4868L7.95325 15.4071L7.58765 15.5692L8.57894 17.8312L9.84592 18.6759L9.57433 18.0562L8.77622 17.5241L8.36676 16.5931L8.82129 16.3916L10.3696 17.4238L11.341 19.6507L11.1202 19.5035L11.901 21.2852L9.34618 19.582L9.45651 19.8338L7.94271 18.8164L6.07894 14.5634L7.70932 13.8407L9.24303 14.8632L9.41278 15.2505L11.3341 16.5314L11.5811 16.4219Z'
              fill='white'
            />
            <path
              d='M17.0272 20.5535L16.2744 21.0553L17.3362 19.0629L20.4406 16.9933L20.7475 16.4173L19.5364 15.7595L18.2756 16.6001L18.6074 16.7803L19.4016 16.2508L19.9014 16.5197L19.5199 17.2358L17.979 18.263L17.1226 17.7902L17.3424 17.6437L16.0566 16.9478L18.5991 15.2528L18.4643 15.1771L19.9719 14.1796L22.2489 15.4164L20.8803 17.9848L19.354 19.0023L19.1466 18.8896L17.2345 20.1643L17.0272 20.5535Z'
              fill='white'
            />
          </g>
          <defs>
            <filter
              id='filter0_d_508_20490'
              x='-0.92562'
              y='0'
              width='31.7025'
              height='31.7025'
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
              <feOffset dx='0.92562' dy='1.85124' />
              <feGaussianBlur stdDeviation='0.92562' />
              <feComposite in2='hardAlpha' operator='out' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0.09 0 0 0 0 0.0916667 0 0 0 0 0.1 0 0 0 0.3 0'
              />
              <feBlend
                mode='normal'
                in2='BackgroundImageFix'
                result='effect1_dropShadow_508_20490'
              />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='effect1_dropShadow_508_20490'
                result='shape'
              />
            </filter>
            <filter
              id='filter1_d_508_20490'
              x='2.92334'
              y='1.71387'
              width='22.1528'
              height='24.5742'
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
              <feOffset />
              <feGaussianBlur stdDeviation='0.875' />
              <feComposite in2='hardAlpha' operator='out' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0.02 0 0 0 0 0.02 0 0 0 0 0.02 0 0 0 0.5 0'
              />
              <feBlend
                mode='normal'
                in2='BackgroundImageFix'
                result='effect1_dropShadow_508_20490'
              />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='effect1_dropShadow_508_20490'
                result='shape'
              />
            </filter>
            <linearGradient
              id='paint0_linear_508_20490'
              x1='-6.4887e-08'
              y1='3.0625'
              x2='30.1723'
              y2='6.0483'
              gradientUnits='userSpaceOnUse'
            >
              <stop stop-color='#06FFA5' />
              <stop offset='0.5' stop-color='#1781E2' />
              <stop offset='1' stop-color='#FF00B8' />
            </linearGradient>
            <radialGradient
              id='paint1_radial_508_20490'
              cx='0'
              cy='0'
              r='1'
              gradientUnits='userSpaceOnUse'
              gradientTransform='translate(13.9998 15.1786) rotate(45.8023) scale(13.3782 73.5238)'
            >
              <stop stop-color='#06FFA5' />
              <stop offset='0.5' stop-color='#1781E2' />
              <stop offset='1' stop-color='#FF00B8' />
            </radialGradient>
            <linearGradient
              id='paint2_linear_508_20490'
              x1='23.3267'
              y1='5.9218'
              x2='4.73354'
              y2='7.73653'
              gradientUnits='userSpaceOnUse'
            >
              <stop stop-color='#1E77C9' />
              <stop offset='1' stop-color='#12B6EA' />
            </linearGradient>
            <linearGradient
              id='paint3_linear_508_20490'
              x1='4.58643'
              y1='10.44'
              x2='15.5228'
              y2='11.0939'
              gradientUnits='userSpaceOnUse'
            >
              <stop stop-color='#06FFA5' />
              <stop offset='0.5' stop-color='#1781E2' />
              <stop offset='1' stop-color='#FF00B8' />
            </linearGradient>
            <linearGradient
              id='paint4_linear_508_20490'
              x1='23.3267'
              y1='5.9218'
              x2='4.73354'
              y2='7.73653'
              gradientUnits='userSpaceOnUse'
            >
              <stop stop-color='#1E77C9' />
              <stop offset='1' stop-color='#12B6EA' />
            </linearGradient>
            <linearGradient
              id='paint5_linear_508_20490'
              x1='23.4141'
              y1='10.3811'
              x2='13.2049'
              y2='10.9698'
              gradientUnits='userSpaceOnUse'
            >
              <stop stop-color='#06FFA5' />
              <stop offset='0.5' stop-color='#1781E2' />
              <stop offset='1' stop-color='#FF00B8' />
            </linearGradient>
          </defs>
        </svg>
      )
    default:
      return (
        <svg
          width='29'
          height='32'
          viewBox='0 0 29 32'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g filter='url(#filter0_d_609_20274)'>
            <path
              d='M12.75 0.721688C13.5235 0.275106 14.4765 0.275106 15.25 0.721688L24.8744 6.27831C25.6479 6.72489 26.1244 7.55021 26.1244 8.44338V19.5566C26.1244 20.4498 25.6479 21.2751 24.8744 21.7217L15.25 27.2783C14.4765 27.7249 13.5235 27.7249 12.75 27.2783L3.12564 21.7217C2.35214 21.2751 1.87564 20.4498 1.87564 19.5566V8.44338C1.87564 7.55021 2.35214 6.72489 3.12564 6.27831L12.75 0.721688Z'
              fill='#2B2D33'
            />
            <path
              d='M13.2542 15.7933V15.6548C13.2578 15.0121 13.3181 14.5007 13.4353 14.1207C13.5561 13.7408 13.7265 13.4354 13.9467 13.2045C14.1669 12.9702 14.435 12.7553 14.751 12.56C14.9676 12.4251 15.1612 12.2777 15.3316 12.1179C15.5056 11.9545 15.6424 11.7734 15.7418 11.5746C15.8412 11.3722 15.8909 11.1467 15.8909 10.8981C15.8909 10.6175 15.8252 10.3743 15.6938 10.1683C15.5625 9.96236 15.3849 9.80256 15.1612 9.68892C14.941 9.57528 14.6942 9.51847 14.4208 9.51847C14.1686 9.51847 13.9289 9.57351 13.7017 9.68359C13.4779 9.79013 13.2915 9.95348 13.1424 10.1737C12.9968 10.3903 12.9151 10.6655 12.8973 10.9993H11.001C11.0188 10.3246 11.1821 9.75994 11.4911 9.3054C11.8036 8.85085 12.2155 8.50994 12.7269 8.28267C13.2418 8.0554 13.81 7.94176 14.4314 7.94176C15.1097 7.94176 15.7063 8.06072 16.2212 8.29865C16.7397 8.53658 17.1427 8.87571 17.4304 9.31605C17.7215 9.75284 17.8671 10.2713 17.8671 10.8714C17.8671 11.2763 17.8014 11.6385 17.6701 11.9581C17.5422 12.2777 17.3593 12.5618 17.1214 12.8104C16.8835 13.0589 16.6012 13.2809 16.2745 13.4762C15.9868 13.6538 15.7507 13.8384 15.566 14.0302C15.3849 14.2219 15.25 14.4474 15.1612 14.7067C15.0759 14.9624 15.0316 15.2784 15.028 15.6548V15.7933H13.2542ZM14.1811 19.1172C13.8615 19.1172 13.5862 19.0036 13.3554 18.7763C13.1246 18.549 13.0092 18.272 13.0092 17.9453C13.0092 17.6257 13.1246 17.3523 13.3554 17.125C13.5862 16.8977 13.8615 16.7841 14.1811 16.7841C14.4971 16.7841 14.7706 16.8977 15.0014 17.125C15.2358 17.3523 15.3529 17.6257 15.3529 17.9453C15.3529 18.1619 15.2979 18.359 15.1878 18.5366C15.0813 18.7141 14.9392 18.8562 14.7617 18.9627C14.5877 19.0657 14.3941 19.1172 14.1811 19.1172Z'
              fill='white'
            />
          </g>
          <defs>
            <filter
              id='filter0_d_609_20274'
              x='-0.92562'
              y='0'
              width='31.7025'
              height='31.7025'
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
              <feOffset dx='0.92562' dy='1.85124' />
              <feGaussianBlur stdDeviation='0.92562' />
              <feComposite in2='hardAlpha' operator='out' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0.09 0 0 0 0 0.0916667 0 0 0 0 0.1 0 0 0 0.3 0'
              />
              <feBlend
                mode='normal'
                in2='BackgroundImageFix'
                result='effect1_dropShadow_609_20274'
              />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='effect1_dropShadow_609_20274'
                result='shape'
              />
            </filter>
          </defs>
        </svg>
      )
  }
}
