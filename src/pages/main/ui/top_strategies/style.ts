import styled from '@emotion/styled'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 128px;
  padding: 56px 68px;
`

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  max-width: 520px;
`

export const ImageContaner = styled.div`
  padding: 12px;
  background: ${({ theme }) => theme.custom.colors.surface1.enable};
  border-radius: 25px;
`

export const TagBorder = styled.div`
  border-radius: 10px;
  padding: 1px;
  background: ${({ theme }) => theme.custom.colors.primary.enable};
`

export const Tag = styled.div`
  border-radius: 10px;
  padding: 4px 12px;
  background: ${({ theme }) => theme.custom.colors.surface2.enable};
`

export const Tags = styled.div`
  display: flex;
  gap: 12px;
`
