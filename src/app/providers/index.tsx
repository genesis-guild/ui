import { ThemeProvider } from '@mui/material/styles'
import { ChainProvider, ModalsProvider } from 'app/contexts'
import { GlobalStyle } from 'app/styles/globalStyles'
import { getTheme } from 'app/theme'
import { BrowserRouter } from 'react-router-dom'

import { SocketsProvider } from '../contexts'

export const Providers: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ChainProvider>
      <SocketsProvider>
        <ThemeProvider theme={getTheme()}>
          <GlobalStyle />
          <BrowserRouter>
            <ModalsProvider>{children}</ModalsProvider>
          </BrowserRouter>
        </ThemeProvider>
      </SocketsProvider>
    </ChainProvider>
  )
}
