import image from 'shared/assets/images/claim_badge_bg.png'
import { Badge } from 'widgets/badge'

import { Container } from './style'

export const ClaimBadge: React.FC = () => {
  return (
    <Container style={{ backgroundImage: `url(${image})` }}>
      <Badge />
    </Container>
  )
}
