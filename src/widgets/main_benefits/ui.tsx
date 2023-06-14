import {
  BottomText,
  ColoredElipse,
  Container,
  DefaultBackground,
  Elipse,
  ElipseBorder,
  GamesCardContainer,
  GamesCardContent,
  GamesText,
  GradientBorder,
  NFTOwnesrCardContainer,
  NFTOwnesrCardContent,
  PlayerCardContainer,
  PlayerCube,
  PlayerImage,
  PlayerName,
  TabBlockBorder,
  TabContent,
  TabImageContainer,
  TabPanelItem,
  TabText,
  TabsContainer,
  TabsPanel,
  Text,
  TopText,
  VentureCapitalsCardContainer,
} from './style'
import default_profile from 'shared/assets/images/default_profile.png'
import { TabLabels } from './types'
import { Players } from 'shared/assets/icons/players'
import { VentureCapitals } from 'shared/assets/icons/venture_capitals'
import { NftOwners } from 'shared/assets/icons/nft_owners'
import { Games } from 'shared/assets/icons/games'
import { useState } from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { UserProfile } from 'shared/assets/icons/user_profile'
import { CubeWithLogo } from 'shared/assets/icons/cube_with_logo'
import { NftOwnersCard } from 'shared/assets/icons/nft_owners_card'
import { GamesCardIcon } from 'shared/assets/icons/games_card'
import { Coin } from 'shared/assets/icons/coin'

export const MainBenefits: React.FC = () => {
  const theme = useTheme()
  const [tabsValue, setTabsValue] = useState(TabLabels.Players)

  const handleTabsChanged = (_: React.SyntheticEvent, value: TabLabels) => {
    setTabsValue(value)
  }

  const getTabColor = (tab: TabLabels) => {
    switch (tab) {
      case TabLabels.Players:
        return theme.custom.colors.primary.enable
      case TabLabels.Games:
        return theme.custom.colors.accent._7
      case TabLabels.OwnersNfts:
        return theme.custom.colors.accent._4
      default:
        return theme.custom.colors.secondary.enable
    }
  }

  return (
    <TabBlockBorder>
      <DefaultBackground>
        <Container>
          <TabsContainer>
            <GradientBorder>
              <TabsPanel
                defaultValue={TabLabels.Players}
                value={tabsValue}
                onChange={handleTabsChanged}
              >
                <TabPanelItem
                  value={TabLabels.Players}
                  label={TabLabels.Players}
                  color={getTabColor(TabLabels.Players)}
                  iconPosition='start'
                  icon={<Players width={24} height={24} />}
                  disableRipple
                />
                <TabPanelItem
                  value={TabLabels.OwnersNfts}
                  label={TabLabels.OwnersNfts}
                  color={getTabColor(TabLabels.OwnersNfts)}
                  iconPosition='start'
                  icon={<NftOwners width={24} height={24} />}
                  disableRipple
                />
                <TabPanelItem
                  value={TabLabels.Games}
                  label={TabLabels.Games}
                  color={getTabColor(TabLabels.Games)}
                  iconPosition='start'
                  icon={<Games width={24} height={24} />}
                  disableRipple
                />
                <TabPanelItem
                  value={TabLabels.VentureCapitals}
                  label={TabLabels.VentureCapitals}
                  color={getTabColor(TabLabels.VentureCapitals)}
                  iconPosition='start'
                  icon={<VentureCapitals width={24} height={24} />}
                  disableRipple
                />
              </TabsPanel>
            </GradientBorder>
          </TabsContainer>

          <TabContent>
            <TabText>
              <Text>
                <Typography
                  variant='body1'
                  fontWeight={300}
                  sx={{ opacity: Number(tabsValue === TabLabels.Players) }}
                >
                  Players have the opportunity to earn money during the game by
                  renting the NFT assets they are interested in on our platform.
                  Choose various NFT assets on the marketplace and rent them for
                  a convenient period. After gaining access to the NFT asset,
                  you can enjoy the game without any restrictions!
                </Typography>
              </Text>
              <Text>
                <Typography
                  variant='body1'
                  fontWeight={300}
                  sx={{ opacity: Number(tabsValue === TabLabels.OwnersNfts) }}
                >
                  Some text about Owners NFTs
                </Typography>
              </Text>
              <Text>
                <Typography
                  variant='body1'
                  fontWeight={300}
                  sx={{ opacity: Number(tabsValue === TabLabels.Games) }}
                >
                  Some text about Games
                </Typography>
              </Text>
              <Text>
                <Typography
                  variant='body1'
                  fontWeight={300}
                  sx={{
                    opacity: Number(tabsValue === TabLabels.VentureCapitals),
                  }}
                >
                  Some text about Venture capitals
                </Typography>
              </Text>
            </TabText>
            <TabImageContainer>
              <ElipseBorder width='440px' height='440px'>
                <Elipse>
                  <ElipseBorder width='382px' height='382px'>
                    <Elipse>
                      <ElipseBorder width='326px' height='326px'>
                        <Elipse>
                          <ColoredElipse
                            color={getTabColor(tabsValue)}
                          ></ColoredElipse>
                          <PlayerCard show={tabsValue === TabLabels.Players} />
                          <OwnerNftsCard
                            show={tabsValue === TabLabels.OwnersNfts}
                          />
                          <GamesCard show={tabsValue === TabLabels.Games} />
                          <VentureCapitalsCardContainer
                            show={tabsValue === TabLabels.VentureCapitals}
                          >
                            <Coin />
                          </VentureCapitalsCardContainer>
                        </Elipse>
                      </ElipseBorder>
                    </Elipse>
                  </ElipseBorder>
                </Elipse>
              </ElipseBorder>
            </TabImageContainer>
          </TabContent>
        </Container>
      </DefaultBackground>
    </TabBlockBorder>
  )
}

const PlayerCard = ({ show = false }) => {
  const theme = useTheme()

  return (
    <PlayerCardContainer show={show}>
      <Box
        sx={{
          border: `8px solid ${theme.custom.colors.surface1.enable}`,
          height: '100%',
          borderRadius: '20px',
          boxSizing: 'border-box',
          overflow: 'hidden',
        }}
      >
        <PlayerImage>
          <UserProfile width={212} height={217} />
        </PlayerImage>
        <PlayerCube>
          <CubeWithLogo width={104} height={104} />
        </PlayerCube>
        <PlayerName>
          <Typography variant='h4' fontSize={20} lineHeight='20px'>
            Player
          </Typography>
        </PlayerName>
      </Box>
    </PlayerCardContainer>
  )
}

const OwnerNftsCard = ({ show = false }) => {
  return (
    <NFTOwnesrCardContainer show={show}>
      <NFTOwnesrCardContent>
        <TopText>
          <Typography variant='body1' fontSize={13}>
            Legendary
          </Typography>
        </TopText>
        <NftOwnersCard width={133} height={135} />
        <BottomText>
          <Typography variant='h6' fontSize={13}>
            5 ETH/week
          </Typography>
        </BottomText>
      </NFTOwnesrCardContent>
      <Typography variant='body1' fontSize={15} sx={{ ml: '12px' }}>
        Owners
      </Typography>
    </NFTOwnesrCardContainer>
  )
}

const GamesCard = ({ show = false }) => {
  return (
    <GamesCardContainer show={show}>
      <GamesCardContent>
        <GamesCardIcon width={70} height={70} />
        <GamesText>
          <Typography variant='h6' fontSize={13}>
            Games
          </Typography>
        </GamesText>
      </GamesCardContent>
    </GamesCardContainer>
  )
}
