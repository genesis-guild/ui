import { useContext } from 'react'

import { Account, MessageTX } from 'shared/types'
import { getAccount, getAccountAT, log } from 'shared/utils'

import { SocketsContext } from '../../../model'
import { EventName, EventNamePostfix } from '../../types'
import { EventNameFactory } from '../../utils'

interface Emitters {
  login: () => void
  verifyMessage: (signature: MessageTX) => void
  mergeAccounts: (sessionAccount: Account) => void
  finishLogin: () => void
}

export const useEmitters = (): Emitters => {
  const { socket } = useContext(SocketsContext)
  const enf = new EventNameFactory(EventNamePostfix.EMITTER_POSTFIX)

  const login = (): void => {
    emit(EventName.LOGIN)
  }

  const verifyMessage = (signature: MessageTX): void => {
    emit(EventName.VERIFY_MESSAGE, {
      signature,
    })
  }

  const finishLogin = (): void => {
    emit(EventName.FINISH_LOGIN)
  }

  const mergeAccounts = (sessionAccount: Account): void => {
    emit(EventName.MERGE, {
      sessionAccount,
      authSessionAccount: getAccountAT(sessionAccount),
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

  return { login, verifyMessage, mergeAccounts, finishLogin }
}
