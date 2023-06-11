import { Theme } from '@mui/material/styles'
import { AccountLvl } from 'shared/components/profile_picture/types'

export const getLvlColor = (theme: Theme, lvl: AccountLvl): string => {
  switch (lvl) {
    case AccountLvl._1:
      return theme.custom.colors.accent._6
    case AccountLvl._2:
      return theme.custom.colors.accent._4
    case AccountLvl._3:
      return theme.custom.colors.accent._5
    case AccountLvl._4:
      return theme.custom.colors.accent._1
    case AccountLvl._5:
      return theme.custom.colors.accent._3
    case AccountLvl._6:
      return theme.custom.colors.accent._2
    default:
      return theme.custom.colors.surface3.enable
  }
}
