import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { AppHeader } from 'widgets/header/ui'

export const MainLayout = () => {
  return (
    <Box>
      <AppHeader />
      <Outlet />
    </Box>
  )
}
