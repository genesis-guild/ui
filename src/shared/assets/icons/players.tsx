import { IconProps } from 'shared/assets/types'

export const Players = ({ ...props }: IconProps) => {
  return (
    <svg {...props} fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M16.21 12.71C17.1904 11.9387 17.906 10.8809 18.2572 9.68394C18.6085 8.48697 18.5779 7.21027 18.1698 6.03147C17.7617 4.85267 16.9963 3.83039 15.9801 3.10686C14.9639 2.38332 13.7474 1.99451 12.5 1.99451C11.2525 1.99451 10.0361 2.38332 9.01993 3.10686C8.00374 3.83039 7.23834 4.85267 6.83021 6.03147C6.42208 7.21027 6.39151 8.48697 6.74276 9.68394C7.09401 10.8809 7.8096 11.9387 8.79 12.71C7.11007 13.383 5.64428 14.4994 4.54889 15.9399C3.45349 17.3805 2.76956 19.0913 2.57 20.89C2.55555 21.0213 2.56711 21.1542 2.60402 21.2811C2.64093 21.4079 2.70246 21.5263 2.78511 21.6293C2.95202 21.8375 3.19478 21.9708 3.46 22C7 22 17.0412 22 21.58 22C21.8421 21.9698 22.0817 21.8373 22.2466 21.6313C22.4114 21.4252 22.4881 21.1624 22.46 20.9C22.2595 19.0962 21.5719 17.381 20.4708 15.9382C19.3698 14.4954 17.8969 13.3795 16.21 12.71Z'
        fill='url(#paint0_linear_686_2247)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_686_2247'
          x1='2.56396'
          y1='4.18261'
          x2='24.0119'
          y2='6.29405'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#6100FF' />
          <stop offset='1' stop-color='#BB4BFF' />
        </linearGradient>
      </defs>
    </svg>
  )
}
