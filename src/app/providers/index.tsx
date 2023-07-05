import { ThemeProvider } from '@mui/material/styles'
import { ChainProvider, ModalsProvider } from 'app/contexts'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
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
    <QueryClientProvider client={queryClient}>    <ChainProvider>
      <SocketsProvider>
        <ThemeProvider theme={getTheme()}>
          <GlobalStyle />
          <BrowserRouter>
            <ModalsProvider>{children}</ModalsProvider>
          </BrowserRouter>
        </ThemeProvider>
      </SocketsProvider>
    </ChainProvider></QueryClientProvider>

  )
}
