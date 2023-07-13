import { Badge } from 'widgets/badge'

import image from 'shared/assets/images/claim_badge_bg.png'

import { Container, FaqContainer } from './style'
import { FAQ } from './ui/faq'

export const ClaimBadge: React.FC = () => {
  return (
    <Container style={{ backgroundImage: `url(${image})` }}>
      <Badge />

      <FaqContainer>
        <FAQ />
      </FaqContainer>
    </Container>
  )
}
