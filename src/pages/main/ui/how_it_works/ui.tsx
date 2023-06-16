import { Typography, useTheme } from '@mui/material'
import claim_image from 'shared/assets/images/how_it_works/claim.png'
import finding_image from 'shared/assets/images/how_it_works/finding.png'
import paying_image from 'shared/assets/images/how_it_works/paying.png'
import receiving_image from 'shared/assets/images/how_it_works/receiving.png'
import returning_image from 'shared/assets/images/how_it_works/returning.png'

import {
  Container,
  Heading,
  Item,
  ItemBorder,
  ItemContent,
  ItemsContainer,
} from './style'

export const HowItWorks: React.FC = () => {
  const theme = useTheme()

  return (
    <Container>
      <Heading>
        <Typography variant='h2'>How it works</Typography>
        <Typography
          variant='body1'
          color={theme.custom.colors.neutral.text_secondary}
          textAlign='center'
          maxWidth={375}
        >
          Our platform provides an easy and fast way to rent and exhibit NFT
          assets.
        </Typography>
      </Heading>

      <ItemsContainer>
        <ItemBorder color={theme.custom.colors.primary.enable}>
          <Item backgroundImage={`url(${claim_image})`}>
            <ItemContent>
              <Typography variant='h4'>Claim badge</Typography>
              <Typography
                variant='body1'
                color={theme.custom.colors.neutral.text_secondary}
              >
                To start using our platform, you need a badge, which serves as
                an indicator of your identity on our platform.{' '}
                <a>Learn more about badges</a>
              </Typography>
            </ItemContent>
          </Item>
        </ItemBorder>
        <ItemBorder color={theme.custom.colors.accent._2}>
          <Item backgroundImage={`url(${finding_image})`}>
            <ItemContent>
              <Typography variant='h4'>Findings and choosing NFTs</Typography>
              <Typography
                variant='body1'
                color={theme.custom.colors.neutral.text_secondary}
              >
                Players find suitable NFTs and then choose the ones they need
                based on their gaming needs. NFT owners can upload their NFTs to
                our platform and set rental conditions, such as rental cost,
                duration, etc.
              </Typography>
            </ItemContent>
          </Item>
        </ItemBorder>
        <ItemBorder color={theme.custom.colors.accent._4}>
          <Item backgroundImage={`url(${paying_image})`}>
            <ItemContent>
              <Typography variant='h4'>Paying for NFT rental</Typography>
              <Typography
                variant='body1'
                color={theme.custom.colors.neutral.text_secondary}
              >
                When the NFT rental is confirmed, players must make payment
                according to the conditions set by the NFT owners.
              </Typography>
            </ItemContent>
          </Item>
        </ItemBorder>
        <ItemBorder color={theme.custom.colors.accent._1}>
          <Item backgroundImage={`url(${receiving_image})`}>
            <ItemContent>
              <Typography variant='h4'>Receiving NFT</Typography>
              <Typography
                variant='body1'
                color={theme.custom.colors.neutral.text_secondary}
              >
                When payment is made, players can use the rented Nfs in games
                and earn rewards.
              </Typography>
            </ItemContent>
          </Item>
        </ItemBorder>
        <ItemBorder color={theme.custom.colors.accent._7}>
          <Item backgroundImage={`url(${returning_image})`}>
            <ItemContent>
              <Typography variant='h4'>Returning NFT</Typography>
              <Typography
                variant='body1'
                color={theme.custom.colors.neutral.text_secondary}
              >
                At the end of the rental period, the NFT automatically returns
                to the owner along with the reward.
              </Typography>
            </ItemContent>
          </Item>
        </ItemBorder>
      </ItemsContainer>
    </Container>
  )
}
