import { Theme } from '@mui/material/styles'

const gradient = {
  primary: {
    _1: '#8850FE',
    _2: '#5114D2',
  },
  secondary: {
    _1: '#DC400F',
    _2: '#FFEB3A',
  },
}

export const custom: Theme['custom'] = {
  colors: {
    gradient,
    primary: {
      enable: `linear-gradient(225deg, ${gradient.primary._1} 0%, ${gradient.primary._2} 100%)`,
      hover: `linear-gradient(225deg, ${gradient.primary._2} 0%, ${gradient.primary._1} 100%)`,
      press: '#5B26CC',
      loading: `linear-gradient(225deg, ${gradient.primary._1} 0%, ${gradient.primary._2} 100%)`,
      disable: '#320C82',
    },
    secondary: {
      enable: `linear-gradient(89.4deg,  ${gradient.secondary._1} 0%, ${gradient.secondary._2} 100%)`,
      hover: `linear-gradient(89.4deg, ${gradient.secondary._2} 0%,  ${gradient.secondary._1} 100%)`,
      press: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), linear-gradient(89.4deg, ${gradient.secondary._2} 0%,  ${gradient.secondary._1} 100%)`,
      loading: `linear-gradient(89.4deg,  ${gradient.secondary._1} 0%, #FFEB3A 100%)`,
      disable: `linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), linear-gradient(89.4deg,  ${gradient.secondary._1} 0%, ${gradient.secondary._2} 100%)`,
    },
    surface1: {
      enable: '#131419',
      hover: '#23252E',
      press: '#090A0D',
      loading: '#131419',
      disable: '#090A0D',
    },
    surface2: {
      enable: '#1C1E26',
      hover: '#36373B',
      press: '#131419',
      loading: '#1C1E26',
      disable: '#131419',
    },
    surface3: {
      enable: '#2B2D33',
      hover: '#494A4F',
      press: '#1C1E26',
      loading: '#2B2D33',
      disable: '#1C1E26',
    },
    neutral: {
      background: '#0B0B0D',
      outline: '#363840',
      secondary_icon: '#6B7280',
      text_dark: '#ABAEB3',
      text_secondary: '#C4C7CC',
    },
    accent: {
      _1: 'linear-gradient(225.35deg, #FFE603 0%, #E2481A 67.69%, #DB2020 96.43%)',
      _2: 'linear-gradient(95.65deg, #06FFA5 0.98%, #1781E2 50.49%, #FF00B8 100%)',
      _3: 'linear-gradient(95.65deg, #6100FF 0.98%, #BB4BFF 100%)',
      _4: 'linear-gradient(238.62deg, #0AFF6C -9.5%, #06721D 97.11%)',
      _5: 'linear-gradient(263.57deg, #1E77C9 1.27%, #12B6EA 91.7%)',
      _6: 'linear-gradient(263.57deg, #999999 1.27%, #626262 91.7%)',
      _7: 'linear-gradient(244.74deg, #477AFD 0%, #0B5FDC 97.17%)',
    },
    effects: {
      overlay: 'rgba(11, 11, 13, 0.7);',
      shadow_s: '2px 4px 8px #0B0B0D',
      shadow_m: '4px 8px 12px rgba(5, 5, 5, 0.6)',
      shadow_xs: '2px 4px 4px rgba(11, 11, 13, 0.5)',
    },
    systems: {
      error: '#C70C0C',
    },
  },
}
