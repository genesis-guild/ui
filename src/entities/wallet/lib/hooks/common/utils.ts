import { publishMessage } from 'shared/hooks/useSubscribeToMessage'
import { ChainType, MessageEvent } from 'shared/types'

export const handleConnect = <P>(
  connectPromise: Promise<P>,
  chainType: ChainType,
): void => {
  publishMessage(MessageEvent.CONNECTION_LOADING, {
    isLoading: true,
    chainType,
  })
  connectPromise.finally(() => {
    publishMessage(MessageEvent.CONNECTION_LOADING, {
      isLoading: false,
      chainType,
    })
  })
}
