import { ThemeProvider } from '@mui/material/styles'
import { ModalsProvider } from 'app/contexts/modals'
import { WalletProvider } from 'app/contexts/wallet'
import { getTheme } from 'app/theme'
import { SocketsProvider } from '../contexts'
import { BrowserRouter } from 'react-router-dom'

export const withProviders = (component: () => React.ReactNode) => {
  return () => (
    <SocketsProvider>
      <ThemeProvider theme={getTheme()}>
        <BrowserRouter>
          <WalletProvider>
            <ModalsProvider>{component()}</ModalsProvider>
          </WalletProvider>
        </BrowserRouter>
      </ThemeProvider>
    </SocketsProvider>
  )
}
