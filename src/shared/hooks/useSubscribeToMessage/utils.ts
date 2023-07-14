import {
  HandlerDataType,
  HandlerType,
  MESSAGE_BROKER_NAMESPACE,
  MessageEvent,
} from 'shared/types'
import { log } from 'shared/utils'

export const publishMessage = <E extends MessageEvent>(
  event: E,
  data: HandlerDataType[E],
): void => {
  if (!window[MESSAGE_BROKER_NAMESPACE]) return

  log('info', 'PUBLISH_MESSAGE', event, 'with data', data)

  window[MESSAGE_BROKER_NAMESPACE][event]?.forEach(handler => {
    try {
      handler.cb(data)
    } catch (e) {
      log('error', "can't emit handler", handler, e)
    }
  })
}

export const subscribeToMessage = <E extends MessageEvent>(
  event: E,
  handler: HandlerType<E>,
): void => {
  const eventHandlers: HandlerType<E>[] = [
    ...(window[MESSAGE_BROKER_NAMESPACE]?.[event] ?? []),
    handler,
  ]

  window[MESSAGE_BROKER_NAMESPACE] = {
    ...window[MESSAGE_BROKER_NAMESPACE],
    [event]: eventHandlers,
  }
}

export const unsubscribeToMessage = <E extends MessageEvent>(
  event: E,
  id: string,
): void => {
  const eventHandlers: HandlerType<E>[] =
    window[MESSAGE_BROKER_NAMESPACE]?.[event]?.filter(
      ({ id: _id }) => _id !== id,
    ) ?? []

  window[MESSAGE_BROKER_NAMESPACE] = {
    ...window[MESSAGE_BROKER_NAMESPACE],
    [event]: eventHandlers,
  }
}
