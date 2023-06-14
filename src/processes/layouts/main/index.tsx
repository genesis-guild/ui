import { Outlet } from 'react-router-dom'
import { Footer } from 'widgets/footer'
import { AppHeader } from 'widgets/header/ui'

import { Background, Container } from './style'

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
