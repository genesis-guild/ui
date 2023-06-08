import { MainLayout } from 'processes/layouts/main'
import { Routes, Route } from 'react-router-dom'
import { Main } from './main'

interface RoutingProps {
  isAuthenticated?: boolean
}

export const Routing: React.FC<RoutingProps> = () => {
  return (
    <Routes>
      <Route path='' element={<MainLayout />}>
        <Route index element={<Main />} />
      </Route>
    </Routes>
  )
}
