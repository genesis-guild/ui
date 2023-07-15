import styled from '@emotion/styled'
import { Button as MuiButton, Typography } from '@mui/material'

import { ClaimStar } from 'shared/assets/icons'

interface ClaimBadgeButtonProps {
  isActive?: boolean
}

const Button = styled(MuiButton)<ClaimBadgeButtonProps>`
  position: relative;
  overflow: hidden !important;
  &:before {
    content: '';
    width: 16px;
    height: 44px;
    position: absolute;

    left: -36px;
    background: ${({ theme }) => theme.custom.colors.accent._1};
    transform: rotate(-140deg);
    animation: ${({ isActive }) =>
      isActive ? 'none' : 'runningLine 6s linear infinite'};
    filter: blur(10px);
  }
  @keyframes runningLine {
    0% {
      left: -36px;
    }
    20% {
      left: 200px;
    }

    100% {
      left: 200px;
    }
  }
`

export const ClaimBadgeButton: React.FC<ClaimBadgeButtonProps> = ({
  isActive,
}) => {
  return (
    <Button
      variant='contained'
      color='tertiary'
      sx={theme => ({
        padding: '10px 16px',
        borderRadius: '10px',
        background: isActive ? theme.custom.colors.accent._1 : undefined,
        '&:hover': {
          background: isActive ? theme.custom.colors.accent._1 : undefined,
        },
      })}
      startIcon={<ClaimStar width={24} height={24} isWhite={isActive} />}
      isActive={isActive}
    >
      <Typography variant='links'>Claim Badge</Typography>
    </Button>
  )
}
