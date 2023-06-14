import { Box, Button, Typography, useTheme } from '@mui/material'
import { LogoWhite } from 'shared/assets/icons/logo'
import { Medium } from 'shared/assets/icons/medium'
import { Telegram } from 'shared/assets/icons/telegram'
import { Twitter } from 'shared/assets/icons/twitter'

import {
  Category,
  FooterContainer,
  FooterContent,
  Left,
  Link,
  Links,
  Right,
} from './style'

export const Footer: React.FC = () => {
  const theme = useTheme()

  return (
    <FooterContainer>
      <FooterContent>
        <Left>
          <Box sx={{ d: 'flex', flexDirection: 'column' }}>
            <LogoWhite />
            <Typography
              variant='body2'
              color={theme.custom.colors.neutral.text_dark}
              sx={{ mt: '32px', maxWidth: '400px' }}
            >
              "Genesis Guild" is a platform for renting gaming NFTs, which
              provides a convenient and safe solution for players and NFT
              owners. On our platform, you can find and rent NFTs that will help
              increase your chances of winning games.
            </Typography>
            <Typography
              variant='body2'
              color={theme.custom.colors.neutral.text_dark}
              sx={{ mt: '144px' }}
            >
              Copyright 2023 Genesis Guild. All rights reserved
            </Typography>
          </Box>
        </Left>
        <Right>
          <Category>
            <Typography
              variant='h6'
              color={theme.custom.colors.neutral.text_secondary}
            >
              Platform
            </Typography>
            <Typography variant='links'>
              <Links>
                <Link to='/claim-badge'>Claim Badge</Link>
                <Link to='/games'>Games</Link>
                <Link to='/marketplace/community'>Marketplace</Link>
              </Links>
            </Typography>
          </Category>
          <Category>
            <Typography
              variant='h6'
              color={theme.custom.colors.neutral.text_secondary}
            >
              Resources
            </Typography>
            <Typography variant='links'>
              <Links>
                <Link to='/'>About</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/docs'>Docs</Link>
              </Links>
            </Typography>
          </Category>
          <Category>
            <Typography
              variant='h6'
              color={theme.custom.colors.neutral.text_secondary}
            >
              Socials
            </Typography>
            <Box sx={{ display: 'flex', gap: '16px' }}>
              <Button
                variant='contained'
                sx={{ padding: '8px', borderRadius: '50%', minWidth: 0 }}
              >
                <Telegram width={20} height={20} />
              </Button>
              <Button
                variant='contained'
                sx={{ padding: '8px', borderRadius: '50%', minWidth: 0 }}
              >
                <Medium width={20} height={20} />
              </Button>
              <Button
                variant='contained'
                sx={{ padding: '8px', borderRadius: '50%', minWidth: 0 }}
              >
                <Twitter width={20} height={20} />
              </Button>
            </Box>
          </Category>
        </Right>
      </FooterContent>
    </FooterContainer>
  )
}
