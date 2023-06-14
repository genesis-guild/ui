import { ThemeProvider } from '@mui/material/styles'
import { ModalsProvider } from 'app/contexts/modals'
import { WalletProvider } from 'app/contexts/wallet'
import { GlobalStyle } from 'app/styles/globalStyles'
import { getTheme } from 'app/theme'
import { BrowserRouter } from 'react-router-dom'

import { SocketsProvider } from '../contexts'

export const Providers: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <SocketsProvider>
      <ThemeProvider theme={getTheme()}>
        <GlobalStyle />
        <BrowserRouter>
          <WalletProvider>
            <ModalsProvider>{children}</ModalsProvider>
          </WalletProvider>
        </BrowserRouter>
      </ThemeProvider>
    </SocketsProvider>
  )
}
