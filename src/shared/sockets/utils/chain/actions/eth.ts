import { TransactionReqParamsType } from 'shared/sockets/types'

export const ethSendTransaction = (
  reqParams: TransactionReqParamsType,
): void => {
  window.ethereum
    .request({
      method: 'eth_sendTransaction',
      params: [reqParams],
    })
    .then()
}
