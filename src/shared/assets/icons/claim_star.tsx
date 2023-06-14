import { IconProps } from 'shared/assets/types'

export const ClaimStar = ({
  isWhite,
  ...props
}: IconProps & { isWhite?: boolean }): JSX.Element => {
  return (
    <svg {...props} fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M22.5 9.66999C22.4368 9.48708 22.322 9.32642 22.1693 9.20749C22.0167 9.08857 21.8328 9.01649 21.64 8.99999L15.95 8.16999L13.4 2.99999C13.3181 2.83092 13.1902 2.68833 13.0311 2.58857C12.8719 2.4888 12.6878 2.43588 12.5 2.43588C12.3121 2.43588 12.1281 2.4888 11.9689 2.58857C11.8097 2.68833 11.6819 2.83092 11.6 2.99999L9.04998 8.15999L3.35998 8.99999C3.1749 9.0263 3.0009 9.10396 2.85773 9.22415C2.71455 9.34435 2.60794 9.50227 2.54998 9.67999C2.49692 9.85367 2.49216 10.0385 2.53621 10.2147C2.58025 10.3909 2.67144 10.5517 2.79998 10.68L6.92998 14.68L5.92998 20.36C5.8896 20.5484 5.90453 20.7445 5.97296 20.9246C6.04139 21.1048 6.16041 21.2613 6.31571 21.3754C6.471 21.4895 6.65595 21.5563 6.84831 21.5677C7.04066 21.5792 7.23224 21.5348 7.39998 21.44L12.5 18.77L17.6 21.44C17.7403 21.5192 17.8988 21.5605 18.06 21.56C18.2718 21.5607 18.4784 21.4942 18.65 21.37C18.8051 21.2589 18.9252 21.1056 18.9961 20.9284C19.067 20.7512 19.0857 20.5575 19.05 20.37L18.05 14.69L22.18 10.69C22.3244 10.5677 22.4311 10.4069 22.4877 10.2263C22.5444 10.0458 22.5486 9.85287 22.5 9.66999Z'
        fill='url(#paint0_linear_522_13926)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_522_13926'
          x1='22.5336'
          y1='2.43588'
          x2='3.97827'
          y2='21.6195'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor={isWhite ? '#ffffff' : '#FFE603'} />
          <stop offset='0.701939' stopColor={isWhite ? '#ffffff' : '#E2481A'} />
          <stop offset='1' stopColor={isWhite ? '#ffffff' : '#DB2020'} />
        </linearGradient>
      </defs>
    </svg>
  )
}
