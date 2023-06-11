import { Outlet } from 'react-router-dom'
import { AppHeader } from 'widgets/header/ui'
import { Background, Container } from './style'
import { Footer } from 'widgets/footer'

export const MainLayout = () => {
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
