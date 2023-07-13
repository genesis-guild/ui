import { SelectChangeEvent } from '@mui/material'
import { useState } from 'react'

import { Select } from 'shared/components/select'
import { SelectItem } from 'shared/components/select/ui'
import { ChainType } from 'shared/types/chain'
import { SelectOption } from 'shared/types/common'

interface Props {
  options: SelectOption<ChainType>[]
  onChainChanged?: (chain: ChainType) => void
}

export const ChainSelect: React.FC<Props> = ({ options, onChainChanged }) => {
  const [value, setValue] = useState<ChainType>(options[0].value)

  const handleChange = (e: SelectChangeEvent<ChainType>): void => {
    setValue(e.target.value as ChainType)
    onChainChanged?.(e.target.value as ChainType)
  }

  return (
    <Select<ChainType> value={value} onChange={handleChange}>
      {options.map(option => {
        return <SelectItem value={option.value}>{option.label}</SelectItem>
      })}
    </Select>
  )
}
