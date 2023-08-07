import { ThemeProvider } from '@mui/material/styles'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
import { io } from 'socket.io-client'

import { GlobalStyle } from 'app/styles/globalStyles'
import { getTheme } from 'app/theme'

import { SocketsProvider } from 'features/sockets'

import { WalletProvider } from 'entities/wallet'

import { OpenAPI } from 'shared/api'

import { ChainProvider } from './ChainProvider'

OpenAPI.BASE = import.meta.env.VITE_API_URL

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
})

const socket = io(import.meta.env.VITE_API_URL)

export const Providers: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SocketsProvider socket={socket}>
        <ChainProvider>
          <ThemeProvider theme={getTheme()}>
            <GlobalStyle />
            <WalletProvider>
              <BrowserRouter>{children}</BrowserRouter>
            </WalletProvider>
          </ThemeProvider>
        </ChainProvider>
      </SocketsProvider>
    </QueryClientProvider>
  )
}
