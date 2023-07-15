import { Button, Typography, useTheme } from '@mui/material'

import top_strategies from 'shared/assets/images/top_strategies.png'

import {
  Container,
  ImageContaner,
  Tag,
  TagBorder,
  Tags,
  TextContent,
} from './styles'

// TODO: move to blog page
export const TopStrategies: React.FC = () => {
  const theme = useTheme()

  return (
    <Container>
      <TextContent>
        <Tags>
          <TagBorder>
            <Tag>
              <Typography variant='caption2'>Partnenship</Typography>
            </Tag>
          </TagBorder>
          <TagBorder>
            <Tag>
              <Typography variant='caption2'>Big news</Typography>
            </Tag>
          </TagBorder>
        </Tags>
        <Typography variant='h3'>
          Top strategies and tactics for team battles
        </Typography>
        <Typography
          variant='body1'
          color={theme.custom.colors.neutral.text_secondary}
          marginTop='4px'
        >
          We are excited to announce a partnership between Genesis guild and
          Solana - leading companies in the cryptocurrency industry working
          together to support.
        </Typography>
        <Button
          variant='contained'
          sx={{ p: '12px 60px', width: 'fit-content', mt: '16px' }}
        >
          Read more
        </Button>
      </TextContent>
      <ImageContaner>
        <img src={top_strategies} />
      </ImageContaner>
    </Container>
  )
}
