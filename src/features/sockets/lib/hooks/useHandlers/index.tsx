import { Socket } from 'socket.io-client'

import { publishMessage } from 'shared/hooks'
import { AccountWS, MessageEvent, Tokens } from 'shared/types'
import { log } from 'shared/utils'

import { EventName, EventNamePostfix } from '../../types'
import { EventNameFactory } from '../../utils'

interface ReturnType {
  init: (socket: Socket) => void
}

export const useHandlers = (): ReturnType => {
  const enf = new EventNameFactory(EventNamePostfix.HANDLER_POSTFIX)

  const init = (socket: Socket): void => {
    log('info', 'handlers initialized')

    handleSignMessage(socket)
    handleTokens(socket)
  }

  const handleSignMessage = (socket: Socket): void => {
    socket.on(enf.get(EventName.SIGN_MESSAGE), (message: string) => {
      log(
        'info',
        'handling event',
        enf.get(EventName.SIGN_MESSAGE),
        'with data',
        message,
      )

      publishMessage(MessageEvent.SIGN_MESSAGE, {
        message,
      })
    })
  }

  const handleTokens = (socket: Socket): void => {
    socket.on(
      enf.get(EventName.TOKENS),
      ({ tokens, account }: { tokens: Tokens; account: AccountWS }) => {
        log('info', 'handling event', enf.get(EventName.TOKENS))

        publishMessage(MessageEvent.TOKENS, { tokens, account })
      },
    )
  }

  return { init }
}
