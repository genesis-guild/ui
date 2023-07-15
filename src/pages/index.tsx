import { Route, Routes } from 'react-router-dom'

import { MainLayout } from 'processes/layouts/main'

import { ClaimBadge } from './claim-badge'
import { MainPage } from './main'
import { UI_KIT } from './ui-kit'

interface RoutingProps {
  isAuthenticated?: boolean
}

export const Routing: React.FC<RoutingProps> = () => {
  return (
    <Routes>
      <Route path='' element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route path='/claim-badge' element={<ClaimBadge />} />
        <Route path='/games' element={<>games</>} />
        <Route path='/marketplace/:type' element={<>marketplace</>} />
        <Route path='/blog' element={<>blog</>} />
        <Route path='/docs' element={<>docs</>} />
        <Route path='/ui-kit' element={<UI_KIT />} />
      </Route>
    </Routes>
  )
}
