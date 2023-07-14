import { useContext } from 'react'

import { SocketsContext } from 'app/contexts'

import { AccountWS, MessageTX } from 'shared/types'
import { log } from 'shared/utils/log'

import { EventName, EventNameFactory, EventNamePostfix } from '../common'

interface Emitters {
  login: (account: AccountWS) => void
  verifyMessage: (signature: MessageTX, account: AccountWS) => void
}

export const useEmitters = (): Emitters => {
  const { socket } = useContext(SocketsContext)
  const enf = new EventNameFactory(EventNamePostfix.EMITTER_POSTFIX)

  const login = ({ accountId, chainType }: AccountWS): void => {
    emit(EventName.LOGIN, {
      accountId,
      chainType,
    })
  }

  const verifyMessage = (signature: MessageTX, account: AccountWS): void => {
    emit(EventName.VERIFY_MESSAGE, {
      signature,
      account: {
        chainType: account.chainType,
        accountId: account.accountId,
      },
    })
  }

  const emit = <D,>(en: EventName, data?: D): void => {
    if (!socket) {
      log(
        'error',
        'socket is undefined for event',
        enf.get(en),
        ' //useEmitters// ',
      )

      return
    }

    log('info', 'emitting event', enf.get(en), 'with data', data)

    socket.emit(enf.get(en), data)
  }

  return { login, verifyMessage }
}
