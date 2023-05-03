import { ThemeProvider } from '@mui/material'
import { ModalsProvider } from 'app/contexts/modals'
import { WalletProvider } from 'app/contexts/wallet'
import { getTheme } from 'app/theme'
import { BrowserRouter } from 'react-router-dom'

export const withProviders = (component: () => React.ReactNode) => {
  return () => (
    <BrowserRouter>
      <WalletProvider>
        <ModalsProvider>
          <ThemeProvider theme={getTheme()}>{component()}</ThemeProvider>
        </ModalsProvider>
      </WalletProvider>
    </BrowserRouter>
  )
}
