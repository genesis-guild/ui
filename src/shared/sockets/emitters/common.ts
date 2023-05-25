import { EventNameFactory } from '../utils/event-name-factory'
import { EventNamePostfix } from '../types'
import { Socket } from 'socket.io-client'

export const enf = new EventNameFactory(EventNamePostfix.EMITTER_POSTFIX)
// ADD ARGS IF NEEDED
export const emit = (socket: Socket, en: string) => {
  const account = localStorage.getItem('account')

  if (!account) return

  const { accountId } = JSON.parse(account)

  socket.emit(en, accountId)
}
