import { useMemo } from 'react'
import {
  useAccount,
  useConnect as useConnectWagmi,
  useDisconnect,
  useSignMessage,
} from 'wagmi'

import { publishMessage } from 'shared/hooks'
import { Account, ChainType, MessageEvent, WalletTag } from 'shared/types'
import { log } from 'shared/utils'

import { UseConnectNetType } from './common/types'
import { handleConnect } from './common/utils'

export const useEthConntect = (): UseConnectNetType => {
  const { connectAsync: connectWagmi, connectors } = useConnectWagmi()
  const { signMessageAsync: signMessageWagmi } = useSignMessage()
  const { address, isConnected } = useAccount()
  const { disconnect: wagmiDisconnect } = useDisconnect()

  const account = useMemo(
    (): Account | undefined =>
      isConnected && address
        ? {
            address,
            chainType: ChainType.ETH,
          }
        : undefined,
    [isConnected, address],
  )

  const connect = (walletTag: WalletTag): void => {
    const connector = connectors.find(c => (c.id as WalletTag) === walletTag)

    if (!connector) {
      log(
        'error',
        'connector not found for walletTag',
        `"${walletTag}"`,
        '//EthProvider//',
      )

      return
    }

    handleConnect(connectWagmi({ connector }), ChainType.ETH)
  }

  const signMessage = (message: string): void => {
    signMessageWagmi({ message }).then(res => {
      publishMessage(MessageEvent.VERIFY_MESSAGE, { signature: res })
    })
  }

  const disconnect = (): void => {
    wagmiDisconnect()
  }

  return { connect, disconnect, account, signMessage }
}
