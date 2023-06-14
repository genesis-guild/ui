import { MainLayout } from 'processes/layouts/main'
import { Route, Routes } from 'react-router-dom'

import { ClaimBadge } from './claim_badge'
import { Main } from './main'
import { UI_KIT } from './ui-kit'

interface RoutingProps {
  isAuthenticated?: boolean
}

export const Routing: React.FC<RoutingProps> = () => {
  return (
    <Routes>
      <Route path='' element={<MainLayout />}>
        <Route index element={<Main />} />

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
