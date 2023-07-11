import { Typography } from '@mui/material'
import { WalletContext } from 'app/contexts'
import { HowItWorks } from 'pages/main/ui/how_it_works'
import { MainBenefits } from 'pages/main/ui/main_benefits'
import { RentAndEarn } from 'pages/main/ui/rent_and_earn'
import { TopStrategies } from 'pages/main/ui/top_strategies'
import { useContext } from 'react'
import rent_bg from 'shared/assets/images/main_rent.png'
import { JoinDiscord } from 'widgets/join_discord'

import { Benefit, Container, RentAndEarnContainer } from './style'

export const Main: React.FC = () => {
  const { activeAccount } = useContext(WalletContext)

  return (
    <Container>
      {!activeAccount && (
        <RentAndEarnContainer style={{ backgroundImage: `url(${rent_bg})` }}>
          <RentAndEarn />
        </RentAndEarnContainer>
      )}
      {!activeAccount && (
        <Benefit>
          <Typography variant='h2' maxWidth={616} textAlign='center'>
            Who can benefit from our platform?
          </Typography>
          <MainBenefits />
        </Benefit>
      )}

      {!!activeAccount && <TopStrategies />}

      {!activeAccount && <HowItWorks />}

      <JoinDiscord />
    </Container>
  )
}
