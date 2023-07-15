import image from 'shared/assets/images/claim_badge_bg.png'

import { Badge } from './Badge'
import { FAQ } from './Faq'
import { Container, FaqContainer } from './styles'

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
