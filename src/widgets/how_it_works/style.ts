import styled from '@emotion/styled'

export const Container = styled.div`
  background: linear-gradient(180deg, #131419 0%, rgba(19, 20, 25, 0) 100%);
  border-radius: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 44px;
  padding: 64px 48px;
`

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`

export const Item = styled.div<{ backgroundImage: string }>`
  background: ${({ theme }) => theme.custom.colors.surface1.enable};
  background-image: ${({ backgroundImage }) => backgroundImage};
  border-radius: 35px;
  padding: 44px 36px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`

export const ItemBorder = styled.div`
  background: ${({ color }) => color};
  border-radius: 35px;
  padding: 1px;
  box-sizing: border-box;
`

export const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;

  a {
    color: ${({ theme }) => theme.custom.colors.neutral.secondary};
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`

export const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;

  & > ${ItemBorder} {
    width: calc(33% - 10px);
    height: 448px;
    ${Item} {
      background-repeat: no-repeat;
      background-position: 0 100%;
      & > ${ItemContent} {
        max-width: 327px;
      }
    }
  }

  ${ItemBorder}:nth-child(1), ${ItemBorder}:nth-child(2) {
    width: calc(50% - 10px);
    height: 360px;

    ${Item} {
      background-position: 100% 100%;
      & > ${ItemContent} {
        max-width: 360px;
      }
    }
  }

  ${ItemBorder}:nth-child(2) {
    ${Item} {
      & > ${ItemContent} {
        max-width: 388px;
      }
    }
  }
`
