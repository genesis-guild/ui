import { Outlet } from 'react-router-dom'

import { Footer } from 'widgets/Footer'
import { AppHeader } from 'widgets/Header'

import { Background, Container } from './styles'

export const MainLayout: React.FC = () => {
  return (
    <Background>
      <Container>
        <AppHeader />
        <Outlet />
      </Container>
      <Footer />
    </Background>
  )
}
