import { Button, useTheme } from '@mui/material'

import { JoinDiscordLogo, Medium, Telegram, Twitter } from 'shared/assets/icons'

import { Container, Elipse, Socials } from './styles'

export const JoinDiscord: React.FC = () => {
  const theme = useTheme()

  return (
    <Container>
      <Elipse />
      <Elipse />
      <Elipse />
      <JoinDiscordLogo width={392} height={185} />
      <Button
        variant='contained'
        size='large'
        sx={{ p: '16px 52px', mt: '8px' }}
      >
        Join in Discord
      </Button>
      <Socials>
        <Button
          variant='contained'
          sx={{
            padding: '8px',
            borderRadius: '50%',
            minWidth: 0,
            background: theme.custom.colors.accent._5,
          }}
        >
          <Telegram width={20} height={20} />
        </Button>
        <Button
          variant='contained'
          sx={{
            padding: '8px',
            borderRadius: '50%',
            minWidth: 0,
            background: theme.custom.colors.surface3.enable,
            '&:hover': {
              background: theme.custom.colors.surface3.enable,
            },
          }}
        >
          <Medium width={20} height={20} />
        </Button>
        <Button
          variant='contained'
          sx={{
            padding: '8px',
            borderRadius: '50%',
            minWidth: 0,
            background: theme.custom.colors.accent._7,
          }}
        >
          <Twitter width={20} height={20} />
        </Button>
      </Socials>
    </Container>
  )
}
