import { IconProps } from 'shared/assets/types'

export const Games = ({ ...props }: IconProps) => {
  return (
    <svg {...props} fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M17.5 4C20.8137 4 23.5 6.68629 23.5 10V14C23.5 17.3137 20.8137 20 17.5 20H7.5C4.18629 20 1.5 17.3137 1.5 14V10C1.5 6.68629 4.18629 4 7.5 4H17.5ZM10.5 9H8.5V11H6.5V13H8.499L8.5 15H10.5L10.499 13H12.5V11H10.5V9ZM18.5 13H16.5V15H18.5V13ZM16.5 9H14.5V11H16.5V9Z'
        fill='url(#paint0_linear_686_2257)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_686_2257'
          x1='23.5'
          y1='4'
          x2='1.35462'
          y2='18.3654'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#477AFD' />
          <stop offset='1' stop-color='#0B5FDC' />
        </linearGradient>
      </defs>
    </svg>
  )
}
