import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import styled from '@emotion/styled'
import {
  FormControl,
  MenuItem,
  Select as MuiSelect,
  SelectProps,
} from '@mui/material'

import { SelectArrow } from 'shared/assets/icons'

const paperStyles = {
  borderRadius: '20px',
  transform: 'translateY(8px) !important',
  padding: '20px 16px',
  boxSizing: 'border-box',
}

const menuListStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
}

export const Select = <T extends string>(
  props: SelectProps<T>,
): ReactJSXElement => {
  return (
    <FormControl fullWidth>
      <MuiSelect
        {...props}
        IconComponent={SelectArrow}
        MenuProps={{
          PaperProps: {
            sx: paperStyles,
          },
          MenuListProps: {
            sx: menuListStyles,
          },
        }}
      >
        {props.children}
      </MuiSelect>
    </FormControl>
  )
}

export const SelectItem = styled(MenuItem)`
  padding: 12px;
  border-radius: 15px;

  &.Mui-selected {
    background: ${({ theme }) => theme.custom.colors.surface1.hover};
  }

  &.Mui-selected:hover {
    background: ${({ theme }) => theme.custom.colors.surface1.hover};
  }
`
