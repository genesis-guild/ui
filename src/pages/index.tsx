import { MainLayout } from 'processes/layouts/main'
import { Routes, Route } from 'react-router-dom'

import { MintPage } from './mint'

interface RoutingProps {
  isAuthenticated?: boolean
}

export const Routing: React.FC<RoutingProps> = () => {
  return (
    <Routes>
      <Route path='' element={<MainLayout />}>
        <Route index element={<>Home</>} />
        <Route path='/mint' element={<MintPage />} />
      </Route>
    </Routes>
  )
}
