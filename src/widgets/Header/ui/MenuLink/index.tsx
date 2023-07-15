import { Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

interface MenuLinkProps {
  link: string
  label: string
  pathname: string
}

export const MenuLink: React.FC<MenuLinkProps> = ({
  link,
  pathname,
  label,
}) => {
  return (
    <Link to={link}>
      <Button
        variant='contained'
        sx={{ padding: '10px 16px', borderRadius: '10px' }}
        color={pathname === link ? 'primary' : 'tertiary'}
      >
        <Typography variant='links'>{label}</Typography>
      </Button>
    </Link>
  )
}
