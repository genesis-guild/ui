import { DependencyList, useEffect, useMemo } from 'react'
import { v4 as uuid } from 'uuid'

import { HandlerType, MessageEvent } from 'shared/types'

import {
  publishMessage,
  subscribeToMessage,
  unsubscribeToMessage,
} from './utils'

export { publishMessage }

export const useSubscribeToMessage = <E extends MessageEvent>(
  event: E,
  cb: HandlerType<E>['cb'],
  deps: DependencyList = [],
): void => {
  const id = useMemo(() => uuid(), [])

  useEffect(() => {
    subscribeToMessage(event, {
      cb,
      id,
    })

    return () => {
      unsubscribeToMessage(event, id)
    }
  }, deps)
}
