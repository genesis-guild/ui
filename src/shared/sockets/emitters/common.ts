import { Socket } from 'socket.io-client'

import { EventNamePostfix } from '../types'
import { EventNameFactory } from '../utils/event-name-factory'

export class Emitters extends EventNameFactory {
  constructor() {
    super(EventNamePostfix.EMITTER_POSTFIX)
  }

  emit<D>(socket: Socket, en: string, data?: D): void {
    const account = localStorage.getItem('account')

    if (!account) return

    const { accountId } = JSON.parse(account)

    socket.emit(en, accountId, data)
  }
}
