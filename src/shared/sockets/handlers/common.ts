import { EventNamePostfix } from '../types'
import { EventNameFactory } from '../utils/event-name-factory'

export class Handlers extends EventNameFactory {
  constructor() {
    super(EventNamePostfix.HANDLER_POSTFIX)
  }
}
