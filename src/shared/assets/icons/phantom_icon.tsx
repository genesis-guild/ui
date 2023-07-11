import { IconProps } from 'shared/assets/types'

export const PhantomIcon = ({ ...props }: IconProps): JSX.Element => {
  return (
    <svg
      {...props}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
        fill='url(#paint0_linear_958_28764)'
      />
      <path
        d='M19.1588 12.122H17.3959C17.3959 8.52941 14.4734 5.61719 10.868 5.61719C7.30727 5.61719 4.41234 8.45811 4.34148 11.9892C4.26818 15.6392 7.70473 18.8087 11.3682 18.8087H11.829C15.0588 18.8087 19.3876 16.2893 20.064 13.2197C20.1889 12.6539 19.7404 12.122 19.1588 12.122ZM8.2483 12.2821C8.2483 12.7625 7.85395 13.1554 7.37182 13.1554C6.88968 13.1554 6.49536 12.7623 6.49536 12.2821V10.8692C6.49536 10.3888 6.88968 9.99582 7.37182 9.99582C7.85395 9.99582 8.2483 10.3888 8.2483 10.8692V12.2821ZM11.2917 12.2821C11.2917 12.7625 10.8974 13.1554 10.4153 13.1554C9.93312 13.1554 9.53883 12.7623 9.53883 12.2821V10.8692C9.53883 10.3888 9.9333 9.99582 10.4153 9.99582C10.8974 9.99582 11.2917 10.3888 11.2917 10.8692V12.2821Z'
        fill='url(#paint1_linear_958_28764)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_958_28764'
          x1='12'
          y1='2'
          x2='12'
          y2='22'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#534BB1' />
          <stop offset='1' stopColor='#551BF9' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_958_28764'
          x1='12.2126'
          y1='5.61719'
          x2='12.2126'
          y2='18.8087'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='white' />
          <stop offset='1' stopColor='white' stopOpacity='0.82' />
        </linearGradient>
      </defs>
    </svg>
  )
}
