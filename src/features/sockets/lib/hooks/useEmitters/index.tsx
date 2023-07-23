import { useContext } from 'react'

import { WalletContext } from 'entities/wallet'

import { Account, MessageTX } from 'shared/types'
import { log } from 'shared/utils'

import { SocketsContext } from '../../../model'
import { EventName, EventNamePostfix } from '../../types'
import { EventNameFactory } from '../../utils'

interface Emitters {
  login: (account: Account) => void
  verifyMessage: (signature: MessageTX, account: Account) => void
}

export const useEmitters = (): Emitters => {
  const { activeAccount } = useContext(WalletContext)
  const { socket } = useContext(SocketsContext)
  const enf = new EventNameFactory(EventNamePostfix.EMITTER_POSTFIX)

  const login = (account: Account): void => {
    emit(EventName.LOGIN, account)
  }

  const verifyMessage = (signature: MessageTX, account: Account): void => {
    emit(EventName.VERIFY_MESSAGE, {
      signature,
      account: {
        chainType: account.chainType,
        address: account.address,
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

    const at = localStorage.getItem(
      JSON.stringify({
        address: activeAccount?.address,
        chainType: activeAccount?.chainType,
      }),
    )

    log('info', 'emitting event', enf.get(en), 'with data', data)

    socket.emit(enf.get(en), {
      data,
      auth: {
        at,
        account: activeAccount,
      },
    })
  }

  return { login, verifyMessage }
}
