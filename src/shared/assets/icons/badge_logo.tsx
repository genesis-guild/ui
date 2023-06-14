import { IconProps } from 'shared/assets/types'

export const BadgeLogo = ({ ...props }: IconProps): JSX.Element => {
  return (
    <svg {...props} fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M25.8632 0H29.5917L24.3328 5.21562H8.95659L7.43643 6.72326L13.4349 12.6723H19.6798L18.0364 11.0424H14.1025L11.6271 8.59762L13.5171 6.72326H21.1486L27.0341 12.5908H25.9453L30.6702 17.2767H18.0775L18.7452 17.9389L11.2779 17.9083L0 6.72326L6.77907 0H14.3388L15.3659 1.01868H24.836L25.8632 0Z'
        fill='white'
      />
      <path
        d='M27.1368 24H23.4083L28.6672 18.7844H44.0434L45.5636 17.2767L39.5651 11.3277H33.3202L34.9636 12.9576H38.8975L41.3729 15.4024L39.4829 17.2767H31.8514L27.6093 13.039H28.6981L22.3298 6.73345H34.9225L34.2548 6.06112L41.7221 6.09168L53 17.2767L46.2209 24H38.6612L37.6341 22.9813H28.164L27.1368 24Z'
        fill='white'
      />
    </svg>
  )
}
