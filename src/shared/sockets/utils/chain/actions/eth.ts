import { TransactionReqParamsType } from 'shared/sockets/types'

export const ethSendTransaction = (reqParams: TransactionReqParamsType) => {
  console.log(window.ethereum, reqParams)

  window.ethereum
    .request({
      method: 'eth_sendTransaction',
      params: [reqParams],
    })
    .then(console.log)
}
