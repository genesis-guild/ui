import { Box, Tooltip, Typography, useTheme } from '@mui/material'
import { trunckate } from 'shared/utils'
import useCopy from 'use-copy'

import { BorderButton } from '../border_button'

interface Props {
  text: string
  maxSymbols?: number
}

export const CopyTag: React.FC<Props> = ({ text, maxSymbols = 8 }) => {
  const theme = useTheme()
  const [copied, copy, setCopied] = useCopy(text)

  const handleClick = (): void => {
    copy()

    setTimeout(() => {
      setCopied(false)
    }, 1000)
  }

  return (
    <Box component='span' sx={{ display: 'inline-block' }}>
      <Tooltip title='Copied!' open={copied} placement='top'>
        <BorderButton
          onClick={handleClick}
          padding='4px 8px 4px 12px'
          sx={{ width: 'fit-content' }}
          background={theme.custom.colors.surface2.enable}
          hover={theme.custom.colors.surface2.hover}
          borderRadius='10px'
        >
          <Typography variant='caption2'>
            {trunckate(text, maxSymbols / 2)}
          </Typography>
        </BorderButton>
      </Tooltip>
    </Box>
  )
}
