import { useContext } from 'react'

import { Account, MessageTX } from 'shared/types'
import { getAccount, getAccountAT, log } from 'shared/utils'

import { SocketsContext } from '../../../model'
import { EventName, EventNamePostfix } from '../../types'
import { EventNameFactory } from '../../utils'

interface Emitters {
  login: (account: Account) => void
  verifyMessage: (signature: MessageTX, account: Account) => void
}

export const useEmitters = (): Emitters => {
  const { socket } = useContext(SocketsContext)
  const enf = new EventNameFactory(EventNamePostfix.EMITTER_POSTFIX)

  const login = (account: Account): void => {
    emit(EventName.LOGIN, account)
  }

  const verifyMessage = (signature: MessageTX, account: Account): void => {
    emit(EventName.VERIFY_MESSAGE, {
      signature,
      account,
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

    const at = getAccountAT()
    const account = getAccount()

    log('info', 'emitting event', enf.get(en), 'with data', data)

    socket.emit(enf.get(en), {
      data,
      auth: {
        at,
        account,
      },
    })
  }

  return { login, verifyMessage }
}
