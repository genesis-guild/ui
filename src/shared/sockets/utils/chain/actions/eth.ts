import { TransactionReqParamsType } from 'shared/sockets/types'

export const ethSendTransaction = (reqParams: TransactionReqParamsType) => {
  window.ethereum
    .request({
      method: 'eth_sendTransaction',
      params: [reqParams],
    })
    .then(console.log)
}
