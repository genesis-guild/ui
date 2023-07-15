import { Typography } from '@mui/material'

import { JoinDiscord } from 'features/JoinDiscord'

import rent_bg from 'shared/assets/images/main_rent.png'

import { HowItWorks } from './HowItWorks'
import { MainBenefits } from './MainBenefits'
import { RentAndEarn } from './RentAndEarn'
import { Benefit, Container, RentAndEarnContainer } from './styles'

export const MainPage: React.FC = () => {
  return (
    <Container>
      <RentAndEarnContainer style={{ backgroundImage: `url(${rent_bg})` }}>
        <RentAndEarn />
      </RentAndEarnContainer>
      <Benefit>
        <Typography variant='h2' maxWidth={616} textAlign='center'>
          Who can benefit from our platform?
        </Typography>
        <MainBenefits />
      </Benefit>
      <HowItWorks />
      <JoinDiscord />
    </Container>
  )
}
