export enum EventName {
  MINT = 'mint',
  SIGN_TRANSACTION = 'sign_transaction',
  LIST = 'list',
  LOGIN = 'login',
  SIGN_MESSAGE = 'sign_message',
  VERIFY_MESSAGE = 'verify_message',
  TOKENS = 'tokens',
}

export enum EventNamePostfix {
  HANDLER_POSTFIX = 'client',
  EMITTER_POSTFIX = 'server',
}
