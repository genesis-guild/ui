import { EventNameFactory } from '../utils/event-name-factory'
import { ChainType, EventNamePostfix } from '../types'
export class Handlers extends EventNameFactory {
  constructor() {
    super(EventNamePostfix.HANDLER_POSTFIX)
  }
}
