import { Box, Button, Typography, useTheme } from '@mui/material'
import rent_bg from 'shared/assets/images/main_rent.png'
import {
  Benefit,
  Container,
  RentAndEarn,
  RentAndEarnInner,
  Surface2Button,
} from './style'
import { MainBenefits } from 'widgets/main_benefits'

export const Main: React.FC = () => {
  const theme = useTheme()
  return (
    <Container>
      <RentAndEarn style={{ backgroundImage: `url(${rent_bg})` }}>
        <RentAndEarnInner>
          <Typography variant='h1'>
            Rent an NFT and earn while playing
          </Typography>
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
        </RentAndEarnInner>
      </RentAndEarn>
      <Benefit>
        <Typography variant='h2' maxWidth={616} textAlign='center'>
          Who can benefit from our platform?
        </Typography>
        <MainBenefits />
      </Benefit>
    </Container>
  )
}
