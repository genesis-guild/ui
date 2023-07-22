import { AccountWS, ChainType, MessageTX } from './chain'
import { Tokens } from './common'

export const MESSAGE_BROKER_NAMESPACE = '__MESSAGE_BROKER__'

export enum MessageEvent {
  SIGN_MESSAGE = 'SIGN_MESSAGE',
  CONNECTION_LOADING = 'CONNECTION_LOADING',
  VERIFY_MESSAGE = 'VERIFY_MESSAGE',
  LOGIN = 'LOGIN',
  TOKENS = 'TOKENS',
}

export interface EventPayload<M> {
  detail: {
    event: MessageEvent
    message: M
  }
}

export interface HandlerDataType {
  [MessageEvent.SIGN_MESSAGE]: {
    message: string
  }
  [MessageEvent.CONNECTION_LOADING]: {
    isLoading: boolean
    chainType: ChainType
  }
  [MessageEvent.VERIFY_MESSAGE]: {
    signature: MessageTX
  }
  [MessageEvent.LOGIN]: undefined
  [MessageEvent.TOKENS]: { tokens: Tokens; account: AccountWS }
}

export interface HandlerType<E extends MessageEvent> {
  cb: (data: HandlerDataType[E]) => void
  id: string
}

export type MessageBrokerHandlers = {
  [K in MessageEvent]?: HandlerType<K>[]
}
