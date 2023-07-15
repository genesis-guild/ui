import { AppBar, Box, Button, Toolbar } from '@mui/material'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { WalletContext } from 'entities/wallet'

import { LogoWhite } from 'shared/assets/icons'

import { Connect } from './Connect'
import { Nav } from './Nav'
import { Profile } from './Profile'

export const AppHeader: React.FC = () => {
  const { activeAccount } = useContext(WalletContext)

  return (
    <Box
      sx={theme => ({
        background: theme.custom.colors.neutral.background,
        mt: '20px',
      })}
    >
      <AppBar
        position='static'
        sx={theme => ({
          background: theme.custom.colors.neutral.background,
          p: 0,
        })}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '20px 0',
            ml: '-24px',
            mr: '-24px',
          }}
        >
          <Box
            sx={{
              minWidth: '20%',
            }}
          >
            <Link to='/'>
              <LogoWhite />
            </Link>
          </Box>
          <Box sx={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            <Nav />
            {!!activeAccount && <Button variant='contained'>Rent NFTs</Button>}
            {!!activeAccount && <Profile />}
          </Box>
          {!activeAccount && <Connect />}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
