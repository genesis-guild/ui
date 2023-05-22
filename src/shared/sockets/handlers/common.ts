import { EventNameFactory } from '../utils/event-name-factory'
import { EventNamePostfix } from '../types'

export const enf = new EventNameFactory(EventNamePostfix.HANDLER_POSTFIX)
