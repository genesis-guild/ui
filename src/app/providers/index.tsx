import { ThemeProvider } from '@mui/material/styles'
import { ModalsProvider } from 'app/contexts/modals'
import { WalletProvider } from 'app/contexts/wallet'
import { getTheme } from 'app/theme'
import { SocketsProvider } from '../contexts'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from 'app/styles/globalStyles'

export const withProviders = (component: () => React.ReactNode) => {
  return () => (
    <SocketsProvider>
      <ThemeProvider theme={getTheme()}>
        <GlobalStyle />
        <BrowserRouter>
          <WalletProvider>
            <ModalsProvider>{component()}</ModalsProvider>
          </WalletProvider>
        </BrowserRouter>
      </ThemeProvider>
    </SocketsProvider>
  )
}
