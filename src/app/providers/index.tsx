import { ThemeProvider } from '@mui/material/styles'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ModalsProvider } from 'app/contexts/modals'
import { WalletProvider } from 'app/contexts/wallet'
import { GlobalStyle } from 'app/styles/globalStyles'
import { getTheme } from 'app/theme'
import { BrowserRouter } from 'react-router-dom'
import { OpenAPI } from 'shared/api'

import { SocketsProvider } from '../contexts'

OpenAPI.BASE = import.meta.env.VITE_API_URL

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
})

export const Providers: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  )
}
