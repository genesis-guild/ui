import { Socket } from 'socket.io-client'

import { publishMessage } from 'shared/hooks'
import { AccountWS, MessageEvent } from 'shared/types'
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
    handleLogin(socket)
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

  const handleLogin = (socket: Socket): void => {
    socket.on(enf.get(EventName.LOGIN), (account: AccountWS) => {
      log(
        'info',
        'handling event',
        enf.get(EventName.LOGIN),
        'with account',
        account,
      )

      // TODO: handle next sign message
    })
  }

  return { init }
}
