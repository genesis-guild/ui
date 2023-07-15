import { Box } from '@mui/material'

import { Close as CloseIcon } from 'shared/assets/icons/close'

interface Props {
  onClose: () => void
}

export const Close: React.FC<Props> = ({ onClose }) => {
  return (
    <Box
      sx={theme => ({
        position: 'absolute',
        top: '24px',
        right: '24px',
        cursor: 'pointer',
        color: theme.custom.colors.neutral.secondary_icon,
      })}
      onClick={onClose}
    >
      <CloseIcon width={14} height={14} />
    </Box>
  )
}
