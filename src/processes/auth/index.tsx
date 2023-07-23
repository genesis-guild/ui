import { useContext } from 'react'

import { useEmitters } from 'features/sockets'

import { WalletContext } from 'entities/wallet'

import { useSubscribeToMessage } from 'shared/hooks'
import { MessageEvent } from 'shared/types'

export const Auth: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { login, verifyMessage } = useEmitters()
  const { activeAccount } = useContext(WalletContext)

  useSubscribeToMessage(
    MessageEvent.LOGIN,
    () => {
      if (!activeAccount) return

      login(activeAccount)
    },
    [activeAccount],
  )

  useSubscribeToMessage(
    MessageEvent.VERIFY_MESSAGE,
    ({ signature }) => {
      if (!activeAccount) return

      verifyMessage(signature, activeAccount)
    },
    [activeAccount, verifyMessage],
  )

  return <div>{children}</div>
}
