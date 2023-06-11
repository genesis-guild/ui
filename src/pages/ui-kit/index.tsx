import { Box, Button, Typography } from '@mui/material'
import { ProfilePicture } from 'shared/components/profile_picture'
import { AccountLvl, Sizes } from 'shared/components/profile_picture/types'

export const UI_KIT: React.FC = () => {
  return (
    <div>
      <h1>Typography</h1>
      <div>
        <Typography variant='h1'>H1–Poppins–Medium-52/64/0%</Typography>
        <Typography variant='h2'>H2–Poppins–Medium-40/48/0%</Typography>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          padding: '2rem',
        }}
      >
        <Typography variant='h1'>H1–Poppins–Medium-52/64/0%</Typography>
        <Typography variant='h2'>H2–Poppins–Medium-40/48/0%</Typography>
        <Typography variant='h3'>H3–Poppins–Medium-36/48/0%</Typography>
        <Typography variant='h4'>H4–Poppins–Medium-24/28/0%</Typography>
        <Typography variant='h5'>H5–Poppins–SemiBold-18/28/0%</Typography>
        <Typography variant='h6'>H6–Inter–SemiBold-17/24/0%</Typography>
        <Typography variant='button'>Button–Inter–SemiBold-15/24/2%</Typography>
        <Typography variant='links'>Links–Inter–Medium-15/24/0%</Typography>
        <Typography variant='caption1'>
          Caption 1–Inter–SemiBold-15/20/0%
        </Typography>
        <Typography variant='caption2'>
          Caption 2–Inter–SemiBold-13/20/-1%
        </Typography>
        <Typography variant='label'>Label–Inter–SemiBold-14/24/0%</Typography>
        <Typography variant='body1'>Body1–Inter–Regular-16/24/0%</Typography>
        <Typography variant='body2'>Body2–Inter–Regular-14/20/0%</Typography>
        <Typography variant='overline'>
          Overline–Inter–Medium-14/20/0%–caps
        </Typography>
        <Typography variant='num_s'>Num–s–Poppins–SemiBold-16/24/0%</Typography>
        <Typography variant='num_l'>Num–l–Poppins–SemiBold-22/24/0%</Typography>
      </div>
      <Typography variant='h1'>Buttons</Typography>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ width: '15%', padding: 1 }}></div>
        <div style={{ width: '15%', padding: 1 }}>
          <Typography variant='h4' style={{ padding: 2 }}>
            Enable
          </Typography>
        </div>
        <div style={{ width: '15%', padding: 1 }}>
          <Typography variant='h4' style={{ padding: 2 }}>
            Disable
          </Typography>
        </div>
        <div style={{ width: '15%', padding: 1 }}>
          <Typography variant='h4' style={{ padding: 2 }}>
            Hover
          </Typography>
        </div>
        <div style={{ width: '15%', padding: 1 }}>
          <Typography variant='h4' style={{ padding: 2 }}>
            Press
          </Typography>
        </div>
        <div style={{ width: '15%', padding: 1 }}>
          <Typography variant='h4' style={{ padding: 2 }}>
            Loading
          </Typography>
        </div>

        <div style={{ width: '15%', padding: 1 }}>
          {' '}
          <Typography variant='h4' style={{ padding: 2 }}>
            L - 56
          </Typography>
        </div>
        <div style={{ width: '15%', padding: 1 }}>
          <Button variant='contained' size='large'>
            Button
          </Button>
        </div>
        <div style={{ width: '15%', padding: 1 }}>
          <Button variant='contained' disabled size='large'>
            Button
          </Button>
        </div>
        <div style={{ width: '15%', padding: 1 }}>
          <Button variant='contained' size='large'>
            Button
          </Button>
        </div>
        <div style={{ width: '15%', padding: 1 }}>
          <Button variant='contained' size='large' disableRipple>
            Button
          </Button>
        </div>
        <div style={{ width: '15%', padding: 1 }}>
          <Button variant='contained' size='large'>
            Button
          </Button>
        </div>

        <div style={{ width: '15%', padding: 1 }}>
          <Typography variant='h4' style={{ padding: 2 }}>
            M - 48
          </Typography>
        </div>
        <div style={{ width: '15%', padding: 1 }}>
          <Button variant='contained' size='medium' color='secondary'>
            Button
          </Button>
        </div>
        <div style={{ width: '15%', padding: 1 }}>
          <Button variant='contained' size='medium' color='secondary' disabled>
            Button
          </Button>
        </div>
        <div style={{ width: '15%', padding: 1 }}>
          <Button variant='contained' size='medium' color='secondary'>
            Button
          </Button>
        </div>
        <div style={{ width: '15%', padding: 1 }}>
          <Button
            variant='contained'
            size='medium'
            disableRipple
            color='secondary'
          >
            Button
          </Button>
        </div>
        <div style={{ width: '15%', padding: 1 }}>
          <Button variant='contained' size='medium' color='secondary'>
            Button
          </Button>
        </div>

        <div style={{ width: '15%', padding: 1 }}>
          <Typography variant='h4' style={{ padding: 2 }}>
            S - 36
          </Typography>
        </div>
        <div style={{ width: '15%', padding: 1 }}>
          <Button variant='contained' color='tertiary' size='small'>
            Button
          </Button>
        </div>
        <div style={{ width: '15%', padding: 1 }}>
          <Button variant='contained' color='tertiary' size='small' disabled>
            Button
          </Button>
        </div>
        <div style={{ width: '15%', padding: 1 }}>
          <Button variant='contained' color='tertiary' size='small'>
            Button
          </Button>
        </div>
        <div style={{ width: '15%', padding: 1 }}>
          <Button
            variant='contained'
            color='tertiary'
            size='small'
            disableRipple
          >
            Button
          </Button>
        </div>
        <div style={{ width: '15%', padding: 1 }}>
          <Button variant='contained' color='tertiary' size='small'>
            Button
          </Button>
        </div>
      </div>
      <Typography variant='h1'>Account lvl</Typography>
      <Box sx={{ display: 'flex', gap: '24px', p: 4 }}>
        <ProfilePicture account_lvl={AccountLvl.NoLvl} />
        <ProfilePicture account_lvl={AccountLvl._1} />
        <ProfilePicture account_lvl={AccountLvl._2} />
        <ProfilePicture account_lvl={AccountLvl._3} />
        <ProfilePicture account_lvl={AccountLvl._4} />
        <ProfilePicture account_lvl={AccountLvl._5} />
        <ProfilePicture account_lvl={AccountLvl._6} />
      </Box>
      <Box sx={{ display: 'flex', gap: '24px', p: 4 }}>
        <ProfilePicture account_lvl={AccountLvl.NoLvl} size={Sizes.large} />
        <ProfilePicture account_lvl={AccountLvl._1} size={Sizes.large} />
        <ProfilePicture account_lvl={AccountLvl._2} size={Sizes.large} />
        <ProfilePicture account_lvl={AccountLvl._3} size={Sizes.large} />
        <ProfilePicture account_lvl={AccountLvl._4} size={Sizes.large} />
        <ProfilePicture account_lvl={AccountLvl._5} size={Sizes.large} />
        <ProfilePicture account_lvl={AccountLvl._6} size={Sizes.large} />
      </Box>
    </div>
  )
}
