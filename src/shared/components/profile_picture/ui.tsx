import default_profile from 'shared/assets/images/default_profile.png'
import { Container, LvlBorder, LvlCube, LvlDisplay } from './style'
import { AccountLvl, Sizes } from './types'
import { getLvlColor } from 'shared/utils/getLvlColor'
import { Typography, useTheme } from '@mui/material'
import { ProfileCube } from 'shared/assets/icons/profile_cube'

interface ProfilePictureProps {
  picture_url?: string
  account_lvl: AccountLvl
  size?: Sizes
}

export const ProfilePicture: React.FC<ProfilePictureProps> = ({
  size = Sizes.normal,
  picture_url,
  account_lvl,
}) => {
  const theme = useTheme()
  const lvlColor = getLvlColor(theme, account_lvl)

  const width = size === Sizes.large ? '90px' : '66px'

  return (
    <Container width={width} height={width} color={lvlColor}>
      <LvlBorder color={lvlColor}>
        <img src={picture_url || default_profile} alt='picture' />
        {account_lvl !== AccountLvl.NoLvl && (
          <LvlDisplay color={lvlColor} size={size}>
            {size === Sizes.large ? (
              <Typography variant='caption1'>Lvl {account_lvl}</Typography>
            ) : (
              <Typography
                variant='caption2'
                color={theme.custom.colors.neutral.background}
              >
                Lvl {account_lvl}
              </Typography>
            )}
          </LvlDisplay>
        )}
        {size === Sizes.large && (
          <LvlCube color={lvlColor}>
            <ProfileCube width={32} height={32} account_lvl={account_lvl} />
          </LvlCube>
        )}
      </LvlBorder>
    </Container>
  )
}
