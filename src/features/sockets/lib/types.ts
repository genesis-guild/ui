export enum EventName {
  MINT = 'mint',
  SIGN_TRANSACTION = 'sign_transaction',
  LIST = 'list',
  LOGIN = 'login',
  SIGN_MESSAGE = 'sign_message',
  VERIFY_MESSAGE = 'verify_message',
  TOKENS = 'tokens',
  LOGGED_IN = 'logged_in',
  MERGE = 'merge',
  FINISH_LOGIN = 'finish_login',
}

export enum EventNamePostfix {
  HANDLER_POSTFIX = 'client',
  EMITTER_POSTFIX = 'server',
}
