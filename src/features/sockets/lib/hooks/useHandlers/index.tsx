import { useMemo } from 'react'
import { Socket } from 'socket.io-client'

import { publishMessage } from 'shared/hooks'
import { Account, MessageEvent, Tokens } from 'shared/types'
import { log } from 'shared/utils'

import { EventName, EventNamePostfix } from '../../types'
import { EventNameFactory } from '../../utils'

export const useHandlers = (socket: Socket): void => {
  const enf = new EventNameFactory(EventNamePostfix.HANDLER_POSTFIX)

  const init = (): void => {
    log('info', 'sockets initialized', socket)

    handleSignMessage()
    handleTokens()
    loggedIn()
  }

  const handleSignMessage = (): void => {
    socket.on(
      enf.get(EventName.SIGN_MESSAGE),
      ({ message, account }: { message: string; account: Account }) => {
        log(
          'info',
          'handling event',
          enf.get(EventName.SIGN_MESSAGE),
          'with data',
          message,
        )

        publishMessage(MessageEvent.SIGN_MESSAGE, {
          message,
          account,
        })
      },
    )
  }

  const handleTokens = (): void => {
    socket.on(
      enf.get(EventName.TOKENS),
      ({ tokens, account }: { tokens: Tokens; account: Account }) => {
        log('info', 'handling event', enf.get(EventName.TOKENS))

        publishMessage(MessageEvent.TOKENS, { tokens, account })
      },
    )
  }

  const loggedIn = (): void => {
    socket.on(enf.get(EventName.LOGGED_IN), (account: Account) => {
      log('info', 'handling event', enf.get(EventName.LOGGED_IN))

      publishMessage(MessageEvent.LOGGED_IN, account)
    })
  }

  useMemo(() => init(), [socket])
}
