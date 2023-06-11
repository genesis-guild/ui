import { useTheme, Button, Typography } from '@mui/material'
import { getLvlColor } from 'shared/utils/getLvlColor'
import {
  Background,
  BadgeLevel,
  BadgeTitle,
  Container,
  Cube,
  CubeLogo,
} from './style'
import { AccountLvl } from 'shared/components/profile_picture/types'
import { ProfileCube } from 'shared/assets/icons/profile_cube'
import { BadgeLogoContainer } from 'shared/assets/icons/badge_logo_container'
import { BadgeLogo } from 'shared/assets/icons/badge_logo'

export const Badge: React.FC = () => {
  const theme = useTheme()
  const accountLvl = AccountLvl.NoLvl
  const color = getLvlColor(theme, accountLvl)

  if (accountLvl === AccountLvl.NoLvl) {
    return (
      <Background color={theme.custom.colors.primary.enable}>
        <Container>
          <BadgeTitle color={theme.custom.colors.primary.enable}>
            <Cube>
              <BadgeLogoContainer width={114} height={114} />
            </Cube>
            <CubeLogo>
              <BadgeLogo width={53} height={24} />
            </CubeLogo>
            <BadgeLogo width={196} height={90} />
            <BadgeLevel>
              <Typography variant='h4'>LVL 1</Typography>
            </BadgeLevel>
          </BadgeTitle>
          <Button variant='contained'>
            <Typography variant='button'>CLAIM BADGE</Typography>
          </Button>
        </Container>
      </Background>
    )
  }

  return (
    <Background color={color}>
      <Container>
        <BadgeTitle color={color}>
          <Typography variant='h1' sx={{ textAlign: 'center' }}>
            SILVER BADGE
          </Typography>
          <Cube>
            <ProfileCube account_lvl={accountLvl} width={114} height={114} />
          </Cube>
          <BadgeLevel>
            <Typography variant='h4'>LVL {accountLvl}</Typography>
          </BadgeLevel>
        </BadgeTitle>
        <Button
          variant='contained'
          sx={{
            padding: '16px 70px',
            background: color,
            borderRadius: '15px',
            width: '100%',
            '&:hover': {
              background: theme.custom.colors.primary.hover,
            },
          }}
        >
          <Typography variant='button'>VIEW PROFILE</Typography>
        </Button>
      </Container>
    </Background>
  )
}
