import { Box, Button, Typography, useTheme } from '@mui/material'

import { Container, Surface2Button } from './styles'

export const RentAndEarn: React.FC = () => {
  const theme = useTheme()

  return (
    <Container>
      <Typography variant='h1'>Rent an NFT and earn while playing</Typography>
      <Typography
        fontSize={20}
        fontFamily='Inter'
        fontWeight={300}
        maxWidth={392}
        color={theme.custom.colors.neutral.text_secondary}
      >
        With our platform, you can rent or lease Ntfs for games.
      </Typography>

      <Box sx={{ display: 'flex', gap: '16px', mt: '42px' }}>
        <Button variant='contained' size='large'>
          Start earning
        </Button>
        <Surface2Button variant='contained' color='tertiary' size='large'>
          Whitepaper
        </Surface2Button>
      </Box>
    </Container>
  )
}
