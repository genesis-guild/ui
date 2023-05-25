import { ThemeProvider } from '@mui/material'
import { ModalsProvider } from 'app/contexts/modals'
import { WalletProvider } from 'app/contexts/wallet'
import { getTheme } from 'app/theme'
import { SocketsProvider } from '../contexts'
import { BrowserRouter } from 'react-router-dom'

export const withProviders = (component: () => React.ReactNode) => {
  return () => (
    <SocketsProvider>
      <BrowserRouter>
        <WalletProvider>
          <ModalsProvider>
            <ThemeProvider theme={getTheme()}>{component()}</ThemeProvider>
          </ModalsProvider>
        </WalletProvider>
      </BrowserRouter>
    </SocketsProvider>
  )
}
