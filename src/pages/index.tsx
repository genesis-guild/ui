import { MainLayout } from 'layouts/main'
import { Routes, Route } from 'react-router-dom'

interface RoutingProps {
  isAuthenticated?: boolean
}

export const Routing: React.FC<RoutingProps> = () => {
  return (
    <Routes>
      <Route path='' element={<MainLayout />}>
        <Route path='/' element={<>Home</>} />
      </Route>
    </Routes>
  )
}
