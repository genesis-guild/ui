import { Badge } from 'widgets/badge'
import { Container } from './style'
import image from 'shared/assets/images/claim_badge_bg.png'

export const ClaimBadge: React.FC = () => {
  return (
    <Container style={{ backgroundImage: `url(${image})` }}>
      <Badge />
    </Container>
  )
}
