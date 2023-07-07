import { Theme } from '@mui/material'

import { custom } from '../custom'
import { appBar } from './appBar'
import { button } from './button'
import { dialog } from './dialog'
import { listItemButton } from './listItemButton'
import { menuItem } from './menuItem'
import { popover } from './popover'
import { select } from './select'
import { typograpgy } from './typography'

window.CSS.registerProperty({
  name: '--1',
  syntax: '<color>',
  inherits: false,
  initialValue: custom.colors.gradient.primary._1,
})

window.CSS.registerProperty({
  name: '--2',
  syntax: '<color>',
  inherits: false,
  initialValue: custom.colors.gradient.primary._2,
})

export const components: Theme['components'] = {
  ...typograpgy,
  ...listItemButton,
  ...menuItem,
  ...popover,
  ...appBar,
  ...dialog,
  ...button,
  ...select,
}
