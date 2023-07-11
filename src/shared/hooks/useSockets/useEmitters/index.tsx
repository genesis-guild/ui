import { SocketsContext } from 'app/contexts'
import { useContext } from 'react'
import { ChainType } from 'shared/types'
import { log } from 'shared/utils/log'

import { EventName, EventNameFactory, EventNamePostfix } from '../common'

interface Emitters {
  login: (accountId: string, chainType: ChainType) => void
}

export const useEmitters = (): Emitters => {
  const { socket } = useContext(SocketsContext)
  const enf = new EventNameFactory(EventNamePostfix.EMITTER_POSTFIX)

  const login = (accountId: string, chainType: ChainType): void => {
    emit(EventName.LOGIN, {
      accountId,
      chainType,
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

  return { login }
}
